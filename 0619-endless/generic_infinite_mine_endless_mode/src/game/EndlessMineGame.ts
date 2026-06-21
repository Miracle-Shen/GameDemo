import { BOARD_ROWS, CellType, RunState, ToolType } from '@/constants';
import { depthStages } from '@/data/depthStages';
import { BoardGenerator } from './BoardGenerator';
import { cloneBoard, emptyHarvest, isBreakable, mergeHarvest, resolveBombCells } from './BoardModel';
import { EffectLayer } from './EffectLayer';
import { AssetLoader } from './AssetLoader';
import type { BoardCell, DigServerPatch, EndlessMineConfig, EnterMineData, GridPoint, Harvest, MineCallbacks, ResourceType } from './types';

type AdvanceResult = { stageChanged: boolean; unlockToasts: string[] };

export class EndlessMineGame {
  private app: InstanceType<typeof window.PIXI.Application> | null = null;
  private callbacks: MineCallbacks | null = null;
  private generator = new BoardGenerator({ depthStages });
  private effects = new EffectLayer();
  private board: BoardCell[][] = [];
  private nextRowPreview: BoardCell[] = [];
  private tools: Record<ToolType, number> = { [ToolType.Pickaxe]: 0, [ToolType.RowBomb]: 0, [ToolType.AreaBomb]: 0 };
  private selectedTool: ToolType | null = ToolType.Pickaxe;
  private harvest: Harvest = emptyHarvest();
  private depth = 1;
  private supplyValue = 0;
  private supplyMax = 30;
  private unlockedFlags: Record<string, boolean> = {};

  async init(container: HTMLDivElement, config: EndlessMineConfig, callbacks: MineCallbacks): Promise<void> {
    this.callbacks = callbacks;
    this.generator = new BoardGenerator(config);
    const PIXI = window.PIXI;
    if (PIXI?.Application) {
      const app = new PIXI.Application();
      await app.init({ width: 594, height: 628, backgroundAlpha: 0, antialias: true, resolution: Math.min(window.devicePixelRatio, 2), autoDensity: true });
      container.innerHTML = '';
      container.appendChild(app.canvas as HTMLCanvasElement);
      this.app = app;
      await new AssetLoader().loadPixiTextures();
      this.effects.attach(app);
    }
  }

  start(initialData: EnterMineData): void {
    this.board = cloneBoard(initialData.board);
    this.nextRowPreview = initialData.nextRowPreview.map((cell) => ({ ...cell }));
    this.tools = { ...initialData.tools };
    this.depth = initialData.depth;
    this.supplyValue = initialData.supplyValue;
    this.supplyMax = initialData.supplyMax;
    this.selectedTool = ToolType.Pickaxe;
    this.collectUnlockToasts(this.board, this.nextRowPreview).forEach((message) => this.callbacks?.onToast(message));
    this.renderBoard();
    this.emitAll(RunState.Progressing);
  }

  selectTool(tool: ToolType): void {
    if (this.tools[tool] <= 0) {
      this.callbacks?.onToast(`${tool === ToolType.Pickaxe ? '木镐子' : '炸弹'}数量不足`);
      return;
    }
    this.selectedTool = tool;
    this.callbacks?.onToolChange({ ...this.tools }, this.selectedTool);
    this.callbacks?.onRunStateChange(tool === ToolType.Pickaxe ? RunState.ToolSelected : RunState.BombPreview);
  }

  clearSelectedTool(): void {
    this.selectedTool = null;
    this.clearBombPreview();
    this.callbacks?.onToolChange({ ...this.tools }, null);
  }

  clearBombPreview(): void {
    this.effects.clearBombPreview();
    this.callbacks?.onPreviewChange?.([]);
  }

  hoverCell(point: GridPoint): void {
    if (this.selectedTool === ToolType.RowBomb || this.selectedTool === ToolType.AreaBomb) {
      const points = resolveBombCells(this.selectedTool, point.row, point.col);
      this.callbacks?.onRunStateChange(RunState.BombPreview);
      this.effects.showBombPreview(points);
      this.callbacks?.onPreviewChange?.(points);
    }
  }

  async digCell(point: GridPoint): Promise<DigServerPatch> {
    this.effects.clearBombPreview();
    this.callbacks?.onPreviewChange?.([]);
    return this.resolveAction(ToolType.Pickaxe, point);
  }

  async useBomb(point: GridPoint): Promise<DigServerPatch> {
    const tool = this.selectedTool === ToolType.RowBomb || this.selectedTool === ToolType.AreaBomb ? this.selectedTool : ToolType.RowBomb;
    return this.resolveAction(tool, point);
  }

  applyServerPatch(patch: DigServerPatch): void {
    this.board = cloneBoard(patch.board);
    this.nextRowPreview = patch.nextRowPreview.map((cell) => ({ ...cell }));
    this.tools = { ...patch.tools };
    this.harvest = { coin: patch.harvest.coin, ores: { ...patch.harvest.ores }, materials: { ...patch.harvest.materials } };
    this.depth = patch.depth;
    this.supplyValue = patch.supplyValue;
    this.supplyMax = patch.supplyMax;
    this.renderBoard();
    this.callbacks?.onBoardChange(cloneBoard(this.board), this.nextRowPreview);
  }

  showResourceFly(type: ResourceType, from: GridPoint, toDomRect: DOMRect): void {
    this.effects.flyResource(type, from, toDomRect);
  }

  resize(_width: number, _height: number): void {}

  destroy(): void {
    this.effects.destroy();
    if (this.app) {
      try { this.app.destroy(true, { children: true, texture: false }); } catch {}
    }
    this.app = null;
    this.callbacks = null;
  }

  private async resolveAction(tool: ToolType, point: GridPoint): Promise<DigServerPatch> {
    this.callbacks?.onRunStateChange(RunState.DigResolving);
    if (this.tools[tool] <= 0) {
      this.callbacks?.onToast('工具数量不足');
      return this.snapshot(RunState.Progressing);
    }
    const target = this.board[point.row]?.[point.col];
    if (!target || !isBreakable(target)) {
      this.effects.playHit(point);
      const message = tool === ToolType.Pickaxe ? '不可敲砖不会消耗木镐' : '炸弹不可释放';
      if (tool === ToolType.Pickaxe) this.callbacks?.onToast(message);
      else this.callbacks?.onBlocker?.('提示', message);
      return this.snapshot(RunState.Progressing, '目标不可破坏');
    }

    const cells = tool === ToolType.Pickaxe ? [point] : resolveBombCells(tool, point.row, point.col);
    this.effects.clearBombPreview();
    this.callbacks?.onPreviewChange?.([]);
    if (tool !== ToolType.Pickaxe) this.effects.playExplosion(cells);
    this.tools = { ...this.tools, [tool]: this.tools[tool] - 1 };
    let delta: Partial<Harvest> = { coin: 0, ores: {}, materials: {} };
    let supplyGain = 0;
    cells.forEach((cellPoint) => {
      const cell = this.board[cellPoint.row]?.[cellPoint.col];
      if (!cell || !isBreakable(cell)) return;
      if (tool === ToolType.Pickaxe) this.effects.playHit(cellPoint);
      cell.hp = Math.max(0, cell.hp - (tool === ToolType.Pickaxe ? 1 : 99));
      if (cell.hp === 0) {
        const payload = cell.payload;
        if (payload?.coin) delta = { ...delta, coin: (delta.coin ?? 0) + payload.coin };
        if (payload?.oreKey) delta = { ...delta, ores: { ...(delta.ores ?? {}), [payload.oreKey]: ((delta.ores ?? {})[payload.oreKey] ?? 0) + 1 } };
        if (payload?.material) delta = { ...delta, materials: { ...(delta.materials ?? {}), stone: ((delta.materials ?? {}).stone ?? 0) + payload.material } };
        if (payload?.tools) {
          Object.entries(payload.tools).forEach(([key, value]) => {
            const toolKey = key as ToolType;
            this.tools = { ...this.tools, [toolKey]: this.tools[toolKey] + (value ?? 0) };
          });
        }
        supplyGain += payload?.supplyScore ?? 0;
        cell.type = CellType.Empty;
        this.effects.playBreak(cellPoint);
      } else {
        this.effects.playCrack(cellPoint);
      }
    });

    this.harvest = mergeHarvest(this.harvest, delta);
    this.flyResourceToHarvestSlot('coin', delta, point);
    this.flyResourceToHarvestSlot('ore', delta, point);
    this.flyResourceToHarvestSlot('material', delta, point);
    const advance = this.advanceDepthIfNeeded(supplyGain);
    advance.unlockToasts.forEach((message) => this.callbacks?.onToast(message));
    this.selectedTool = this.tools[tool] > 0 ? tool : ToolType.Pickaxe;
    const depleted = Object.keys(this.tools).every((key) => this.tools[key as ToolType] <= 0);
    const state = depleted ? RunState.ToolsDepleted : advance.stageChanged ? RunState.StageUpPrompt : advance.unlockToasts.length > 0 ? RunState.RareUnlockToast : RunState.Progressing;
    this.renderBoard();
    this.callbacks?.onHarvestChange(delta, this.harvest, point);
    this.emitAll(state);
    if (depleted) this.callbacks?.onGameOver('tools_depleted');
    return this.snapshot(state);
  }

  private flyResourceToHarvestSlot(type: ResourceType, delta: Partial<Harvest>, from: GridPoint): void {
    const hasDelta = type === 'coin'
      ? (delta.coin ?? 0) > 0
      : type === 'ore'
        ? Object.keys(delta.ores ?? {}).length > 0
        : Object.keys(delta.materials ?? {}).length > 0;
    if (!hasDelta) return;
    const targetRect = this.callbacks?.getResourceTargetRect?.(type);
    if (targetRect) this.showResourceFly(type, from, targetRect);
  }

  private advanceDepthIfNeeded(supplyGain: number): AdvanceResult {
    const beforeStage = this.generator.resolveDepthStage(this.depth);
    this.supplyValue += 1 + supplyGain;
    if (this.supplyValue >= this.supplyMax) {
      const stage = this.generator.getStage(this.depth);
      Object.entries(stage.reward).forEach(([key, value]) => {
        const toolKey = key as ToolType;
        this.tools = { ...this.tools, [toolKey]: this.tools[toolKey] + (value ?? 0) };
      });
      this.supplyValue = this.supplyValue - this.supplyMax;
      this.callbacks?.onToast('补给积分已满，获得工具补给');
    }
    let stageChanged = false;
    let unlockToasts: string[] = [];
    if (this.board[BOARD_ROWS - 1]?.some((cell) => cell.type === CellType.Empty)) {
      this.depth += 1;
      this.board = [...this.board.slice(1), this.nextRowPreview.map((cell, col) => ({ ...cell, row: BOARD_ROWS - 1, col }))];
      this.nextRowPreview = this.generator.generateNextRow(this.depth + BOARD_ROWS, this.board);
      const stage = this.generator.getStage(this.depth);
      this.supplyMax = stage.supplyMax;
      const afterStage = this.generator.resolveDepthStage(this.depth);
      stageChanged = beforeStage !== afterStage;
      if (stageChanged) this.callbacks?.onToast('进入更深矿层，本层矿脉价值提升');
      unlockToasts = this.collectUnlockToasts(this.board, this.nextRowPreview);
    }
    return { stageChanged, unlockToasts };
  }

  private emitAll(state: RunState): void {
    const stage = this.generator.getStage(this.depth);
    const max = stage.maxDepth ?? this.depth + 39;
    this.callbacks?.onBoardChange(cloneBoard(this.board), this.nextRowPreview.map((cell) => ({ ...cell })));
    this.callbacks?.onDepthChange(this.depth, this.generator.resolveDepthStage(this.depth), `${this.depth}/${max}`);
    this.callbacks?.onSupplyChange(this.supplyValue, this.supplyMax);
    this.callbacks?.onToolChange({ ...this.tools }, this.selectedTool);
    this.callbacks?.onRunStateChange(state);
  }

  private snapshot(runState: RunState, toast?: string): DigServerPatch {
    const stage = this.generator.getStage(this.depth);
    return {
      board: cloneBoard(this.board),
      nextRowPreview: this.nextRowPreview.map((cell) => ({ ...cell })),
      tools: { ...this.tools },
      harvest: this.harvest,
      depth: this.depth,
      depthStageId: this.generator.resolveDepthStage(this.depth),
      stageProgressText: `${this.depth}/${stage.maxDepth ?? this.depth + 39}`,
      supplyValue: this.supplyValue,
      supplyMax: this.supplyMax,
      runState,
      toast,
    };
  }

  private renderBoard(): void {
    if (!this.app || !window.PIXI) return;
    const PIXI = window.PIXI;
    this.app.stage.removeChildren();
    for (let rowIndex = 0; rowIndex < this.board.length; rowIndex += 1) {
      const row = this.board[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
        const cell = row[colIndex];
        const asset = this.assetForCell(cell);
        const texture = PIXI.Assets.get(asset);
        if (!texture) continue;
        const sprite = new PIXI.Sprite(texture);
        const baseScale = Math.min(72 / texture.width, 78 / texture.height);
        sprite.scale.set(baseScale);
        sprite.x = 25 + cell.col * 74;
        sprite.y = 22 + cell.row * 79;
        this.app.stage.addChild(sprite);
      }
    }
    this.effects.attach(this.app);
  }

  private collectUnlockToasts(board: BoardCell[][], nextRow: BoardCell[]): string[] {
    const messages: string[] = [];
    const scanRows = [...board, nextRow];
    for (let rowIndex = 0; rowIndex < scanRows.length; rowIndex += 1) {
      const row = scanRows[rowIndex];
      for (let colIndex = 0; colIndex < row.length; colIndex += 1) {
        const cell = row[colIndex];
        if (cell.type === CellType.Chest && !this.unlockedFlags.chest) {
          this.unlockedFlags = { ...this.unlockedFlags, chest: true };
          messages.push('首次发现宝箱，挖到后将自动开启');
        }
        if (cell.type === CellType.MysteryBrick && !this.unlockedFlags.mystery) {
          this.unlockedFlags = { ...this.unlockedFlags, mystery: true };
          messages.push('首次发现红砖盲盒矿，收益上限提升');
        }
        if ((cell.payload?.oreKey === 'ore_lapis' || cell.payload?.oreKey === 'ore_amethyst') && !this.unlockedFlags.rareOre) {
          this.unlockedFlags = { ...this.unlockedFlags, rareOre: true };
          messages.push('首次发现稀有矿石');
        }
      }
    }
    return messages;
  }

  private assetForCell(cell: BoardCell): string {
    if (cell.type === CellType.DarkWall) return './assets/imgs/tile_dark_wall.png';
    if (cell.type === CellType.OreBrick) return cell.hp < cell.maxHp ? './assets/imgs/tile_ore_brick_cracked.png' : './assets/imgs/tile_ore_brick.png';
    if (cell.type === CellType.MysteryBrick) return './assets/imgs/tile_mystery_brick.png';
    if (cell.type === CellType.Unbreakable) return './assets/imgs/tile_unbreakable.png';
    if (cell.type === CellType.Chest) return './assets/imgs/tile_chest.png';
    if (cell.type === CellType.ToolCell) return './assets/imgs/icon_tool_cell.png';
    if (cell.type === CellType.Empty) return './assets/imgs/tile_empty_tunnel.png';
    return './assets/imgs/tile_sand.png';
  }
}
