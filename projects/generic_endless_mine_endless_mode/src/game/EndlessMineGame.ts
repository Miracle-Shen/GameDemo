import { RunStatus, SettlementReason, ToolType } from '@/constants/enum';
import { INPUT_DEBOUNCE_MS } from '@/constants/game';
import { getBiomeByDepth } from '@/data/biomeConfig';
import { BoardSnapshot } from '@/data/initialBoard';
import { MineRunState, SettlementSnapshot } from '@/store/slices/mineRunSlice';
import { MineBoardModel } from './MineBoardModel';
import { MineBoardRenderer } from './MineBoardRenderer';
import { AudioGenerator } from './AudioGenerator';
import { MineGameCallbacks, MineGameConfig } from './types';

export class EndlessMineGame {
  private canvas: HTMLCanvasElement | null = null;
  private callbacks: MineGameCallbacks | null = null;
  private model = new MineBoardModel();
  private renderer = new MineBoardRenderer();
  private audio = new AudioGenerator();
  private state: MineRunState | null = null;
  private selectedTool: ToolType = ToolType.Pick;
  private lastActionAt = 0;
  private config: MineGameConfig = { cols: 7, rows: 6, inputDebounceMs: INPUT_DEBOUNCE_MS };

  async init(canvas: HTMLCanvasElement, config: MineGameConfig, callbacks: MineGameCallbacks): Promise<void> {
    this.canvas = canvas;
    this.config = config;
    this.callbacks = callbacks;
    const rect = canvas.getBoundingClientRect();
    this.audio.register();
    await this.renderer.init(canvas, Math.max(1, rect.width), Math.max(1, rect.height));
    this.audio.playBgm();
    canvas.addEventListener('click', this.handleCanvasClick);
  }

  startRun(initialState: MineRunState): void {
    this.state = { ...initialState, runLoot: { ...initialState.runLoot }, board: initialState.board.map((row) => row.map((cell) => ({ terrain: cell.terrain, meta: { ...cell.meta } }))) };
    this.model.setBoard(this.state.board);
    this.selectedTool = this.state.selectedTool;
    this.renderer.renderBoard(this.model.getSnapshot());
  }

  syncBoard(board: BoardSnapshot): void {
    this.model.setBoard(board);
    this.renderer.renderBoard(board);
  }

  selectTool(tool: ToolType): void {
    this.selectedTool = tool;
  }

  handleCellClick(gridX: number, gridY: number): void {
    if (!this.state || !this.callbacks) return;
    const now = Date.now();
    if (now - this.lastActionAt < this.config.inputDebounceMs) return;
    this.lastActionAt = now;
    if (!this.hasTool(this.selectedTool)) {
      this.callbacks.onToast('工具数量不足');
      return;
    }
    if (!this.model.isLegalTarget(gridX, gridY, this.selectedTool)) {
      this.callbacks.onToast('只能挖掘连通坑道边缘，墙体不可破坏');
      return;
    }

    this.audio.resume();
    this.audio.playMineHit();
    if (this.selectedTool === ToolType.RowBomb || this.selectedTool === ToolType.AreaBomb) this.audio.playBomb(this.selectedTool);
    const consume = this.getToolConsume(this.selectedTool);
    const previousRareOreShown = this.state.rareOreUnlockedShown;
    const result = this.model.applyAction(gridX, gridY, this.selectedTool, this.state.currentDepth);
    const nextDepth = this.state.currentDepth + (result.advanced ? 1 : 0);
    const biome = getBiomeByDepth(nextDepth);
    const nextSupply = this.state.supplyPoints + result.supplyDelta;
    const supplyAwarded = nextSupply >= this.state.supplyTarget;
    const supplyReward = supplyAwarded ? biome.supply : { woodPick: 0, rowBomb: 0, areaBomb: 0 };
    const patch: Partial<MineRunState> = {
      board: result.board,
      boardVersion: this.state.boardVersion + 1,
      currentDepth: nextDepth,
      currentBiomeIndex: biome.index,
      currentBiomeName: biome.name,
      supplyTarget: biome.supplyTarget,
      supplyPoints: supplyAwarded ? nextSupply - this.state.supplyTarget : nextSupply,
      woodPick: Math.max(0, this.state.woodPick + (result.toolDelta.woodPick ?? 0) + supplyReward.woodPick + (consume.woodPick ?? 0)),
      rowBomb: Math.max(0, this.state.rowBomb + (result.toolDelta.rowBomb ?? 0) + supplyReward.rowBomb + (consume.rowBomb ?? 0)),
      areaBomb: Math.max(0, this.state.areaBomb + (result.toolDelta.areaBomb ?? 0) + supplyReward.areaBomb + (consume.areaBomb ?? 0)),
      rareOreUnlockedShown: previousRareOreShown || biome.index >= 3,
      lastActionAt: now,
    };
    if ((patch.woodPick ?? 0) <= 0 && (patch.rowBomb ?? 0) <= 0 && (patch.areaBomb ?? 0) <= 0) patch.runStatus = RunStatus.Exhausted;
    const nextRunLoot = {
      gold: this.state.runLoot.gold + (result.loot.gold ?? 0),
      ore: this.state.runLoot.ore + (result.loot.ore ?? 0),
      material: this.state.runLoot.material + (result.loot.material ?? 0),
      openedChests: this.state.runLoot.openedChests + (result.loot.openedChests ?? 0),
    };
    this.state = { ...this.state, ...patch, runLoot: nextRunLoot };
    this.callbacks.onStatePatch(patch);
    this.callbacks.onLootChange(result.loot);
    if (result.broken.length > 0) {
      this.audio.playMineBreak();
      if (result.loot.gold || result.loot.ore || result.loot.material || result.loot.openedChests || result.toolDelta.woodPick || result.toolDelta.rowBomb || result.toolDelta.areaBomb) this.audio.playReward();
      void this.renderer.playBreak();
    }
    if (result.advanced) {
      this.audio.playDepthUp();
      this.callbacks.onToast(`下探至 ${nextDepth}m`);
    }
    if (!previousRareOreShown && biome.index >= 3) this.callbacks.onToast('稀有矿脉已解锁');
    if (supplyAwarded) this.callbacks.onToast(`获得补给：木镐+${supplyReward.woodPick} 横炸+${supplyReward.rowBomb} 九炸+${supplyReward.areaBomb}`);
    this.renderer.renderBoard(result.board);
    if (patch.runStatus === RunStatus.Exhausted) this.callbacks.onSettle('exhausted', this.createSettlementSnapshot('exhausted'));
  }

  requestReturnToCamp(): void {
    this.callbacks?.onSettle('manual', this.state ? this.createSettlementSnapshot('manual') : undefined);
  }

  resize(width: number, height: number): void {
    this.renderer.resizeToViewport(width, height);
  }

  destroy(): void {
    this.canvas?.removeEventListener('click', this.handleCanvasClick);
    this.renderer.destroy();
    this.audio.destroy();
    this.canvas = null;
    this.callbacks = null;
    this.state = null;
  }

  private createSettlementSnapshot(reason: SettlementReason): SettlementSnapshot {
    const current = this.state;
    if (!current) {
      return { finalDepth: 0, finalBiomeName: '', runLoot: { gold: 0, ore: 0, material: 0, openedChests: 0 }, reason };
    }
    return {
      finalDepth: current.currentDepth,
      finalBiomeName: current.currentBiomeName,
      runLoot: { ...current.runLoot },
      reason,
    };
  }

  private handleCanvasClick = (event: MouseEvent): void => {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const x = Math.floor(((event.clientX - rect.left) / rect.width) * this.config.cols);
    const y = Math.floor(((event.clientY - rect.top) / rect.height) * this.config.rows);
    this.handleCellClick(Math.min(this.config.cols - 1, Math.max(0, x)), Math.min(this.config.rows - 1, Math.max(0, y)));
  };

  private hasTool(tool: ToolType): boolean {
    if (!this.state) return false;
    if (tool === ToolType.Pick) return this.state.woodPick > 0;
    if (tool === ToolType.RowBomb) return this.state.rowBomb > 0;
    return this.state.areaBomb > 0;
  }

  private getToolConsume(tool: ToolType): { woodPick?: number; rowBomb?: number; areaBomb?: number } {
    if (tool === ToolType.Pick) return { woodPick: -1 };
    if (tool === ToolType.RowBomb) return { rowBomb: -1 };
    return { areaBomb: -1 };
  }
}

export type { SettlementReason };
