import { CellType, ToolType } from '@/constants/enum';
import { BOARD_COLS, BOARD_ROWS } from '@/constants/game';
import { BoardSnapshot, GridPoint, createInitialBoard } from '@/data/initialBoard';
import { getBiomeByDepth } from '@/data/biomeConfig';
import { MineRowGenerator } from './MineRowGenerator';
import { RewardResolver } from './RewardResolver';
import { ProcessResult } from './types';

const cloneBoard = (board: BoardSnapshot): BoardSnapshot => board.map((row) => row.map((cell) => ({ terrain: cell.terrain, meta: { ...cell.meta } })));

export class MineBoardModel {
  private board: BoardSnapshot = createInitialBoard();
  private rowGenerator = new MineRowGenerator();
  private rewardResolver = new RewardResolver();

  setBoard(board: BoardSnapshot) {
    this.board = cloneBoard(board);
  }

  getSnapshot(): BoardSnapshot {
    return cloneBoard(this.board);
  }

  isLegalTarget(x: number, y: number, tool: ToolType): boolean {
    const cell = this.board[y]?.[x];
    if (!cell || cell.terrain === CellType.Wall) return false;
    if (tool === ToolType.RowBomb || tool === ToolType.AreaBomb) {
      return cell.terrain === CellType.Empty && this.getReachableTunnelCells().has(this.pointKey(x, y));
    }
    if (tool === ToolType.Pick && cell.terrain === CellType.Empty) return false;
    return this.hasAdjacentTunnel(x, y);
  }

  getTargets(x: number, y: number, tool: ToolType): GridPoint[] {
    if (tool === ToolType.RowBomb) return new Array(BOARD_COLS).fill(0).map((_, col) => ({ x: col, y }));
    if (tool === ToolType.AreaBomb) {
      const targets: GridPoint[] = [];
      for (let yy = y - 1; yy <= y + 1; yy += 1) {
        for (let xx = x - 1; xx <= x + 1; xx += 1) {
          if (xx >= 0 && xx < BOARD_COLS && yy >= 0 && yy < BOARD_ROWS) targets.push({ x: xx, y: yy });
        }
      }
      return targets;
    }
    return [{ x, y }];
  }

  applyAction(x: number, y: number, tool: ToolType, depth: number): ProcessResult {
    const broken: GridPoint[] = [];
    const loot = { gold: 0, ore: 0, material: 0, openedChests: 0 };
    const toolDelta = { woodPick: 0, rowBomb: 0, areaBomb: 0 };
    let supplyDelta = 0;

    this.getTargets(x, y, tool).forEach((point) => {
      const cell = this.board[point.y]?.[point.x];
      if (!cell || cell.terrain === CellType.Wall || cell.terrain === CellType.Empty) return;
      if (cell.meta.coverVisible) {
        cell.meta.coverVisible = false;
        cell.meta.durability = Math.max(1, cell.meta.durability);
        return;
      }
      cell.meta.durability -= 1;
      if (cell.meta.durability <= 0) {
        const reward = this.rewardResolver.resolve(cell.meta, depth);
        loot.gold += reward.gold;
        loot.ore += reward.ore;
        loot.material += reward.material;
        loot.openedChests += reward.openedChests;
        toolDelta.woodPick += reward.woodPick;
        toolDelta.rowBomb += reward.rowBomb;
        toolDelta.areaBomb += reward.areaBomb;
        supplyDelta += reward.supplyPoints;
        cell.terrain = CellType.Empty;
        cell.meta.contentType = 'emptyReveal';
        broken.push(point);
      }
    });

    const advanced = this.canAdvanceFromBottom();
    if (advanced) {
      this.rollOneRow(depth + 1);
      supplyDelta += 1;
    }

    return { board: this.getSnapshot(), broken, advanced, loot, toolDelta, supplyDelta };
  }

  private hasAdjacentTunnel(x: number, y: number): boolean {
    return [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ].some(([xx, yy]) => this.board[yy]?.[xx]?.terrain === CellType.Empty);
  }

  private canAdvanceFromBottom(): boolean {
    const reachable = this.getReachableTunnelCells();
    return this.board[BOARD_ROWS - 1].some((cell, x) => x > 0 && x < BOARD_COLS - 1 && cell.terrain === CellType.Empty && reachable.has(this.pointKey(x, BOARD_ROWS - 1)));
  }

  private getReachableTunnelCells(): Set<string> {
    const reachable = new Set<string>();
    const queue: GridPoint[] = [];
    this.board.forEach((row, y) => row.forEach((cell, x) => {
      if (cell.terrain === CellType.Empty && (y === 0 || x === 0 || x === BOARD_COLS - 1)) {
        const key = this.pointKey(x, y);
        reachable.add(key);
        queue.push({ x, y });
      }
    }));

    while (queue.length > 0) {
      const point = queue.shift();
      if (!point) continue;
      [
        { x: point.x + 1, y: point.y },
        { x: point.x - 1, y: point.y },
        { x: point.x, y: point.y + 1 },
        { x: point.x, y: point.y - 1 },
      ].forEach((next) => {
        const cell = this.board[next.y]?.[next.x];
        const key = this.pointKey(next.x, next.y);
        if (!cell || cell.terrain !== CellType.Empty || reachable.has(key)) return;
        reachable.add(key);
        queue.push(next);
      });
    }
    return reachable;
  }

  private pointKey(x: number, y: number): string {
    return `${x},${y}`;
  }

  private rollOneRow(nextDepth: number): void {
    const biome = getBiomeByDepth(nextDepth);
    const currentBottomOpenings = this.board[BOARD_ROWS - 1]
      .map((cell, x) => (cell.terrain === CellType.Empty ? x : -1))
      .filter((x) => x >= 0);
    const newRow = this.rowGenerator.generate(nextDepth, biome.index, currentBottomOpenings);
    this.board = [...this.board.slice(1), newRow];
  }
}
