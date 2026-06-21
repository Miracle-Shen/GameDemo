import { BOARD_COLS, CellType, RunState, ToolType } from '@/constants';
import type { BoardCell, Harvest } from './types';

export const cloneBoard = (board: BoardCell[][]): BoardCell[][] => board.map((row) => row.map((cell) => ({ ...cell, payload: cell.payload ? { ...cell.payload, tools: cell.payload.tools ? { ...cell.payload.tools } : undefined } : undefined })));

export const emptyHarvest = (): Harvest => ({ coin: 0, ores: {}, materials: {} });

export const sumHarvest = (harvest: Harvest): { ore: number; material: number } => ({
  ore: Object.values(harvest.ores).reduce((acc, value) => acc + value, 0),
  material: Object.values(harvest.materials).reduce((acc, value) => acc + value, 0),
});

export const mergeHarvest = (base: Harvest, delta: Partial<Harvest>): Harvest => ({
  coin: base.coin + (delta.coin ?? 0),
  ores: Object.entries(delta.ores ?? {}).reduce((acc, [key, value]) => ({ ...acc, [key]: (acc[key] ?? 0) + value }), { ...base.ores }),
  materials: Object.entries(delta.materials ?? {}).reduce((acc, [key, value]) => ({ ...acc, [key]: (acc[key] ?? 0) + value }), { ...base.materials }),
});

export const resolveBombCells = (tool: ToolType, row: number, col: number): Array<{ row: number; col: number }> => {
  if (tool === ToolType.RowBomb) return new Array(BOARD_COLS).fill(null).map((_, itemCol) => ({ row, col: itemCol }));
  if (tool === ToolType.AreaBomb) {
    const cells: Array<{ row: number; col: number }> = [];
    for (let r = row - 1; r <= row + 1; r += 1) {
      for (let c = col - 1; c <= col + 1; c += 1) {
        if (r >= 0 && c >= 0 && c < BOARD_COLS) cells.push({ row: r, col: c });
      }
    }
    return cells;
  }
  return [{ row, col }];
};

export const isBreakable = (cell: BoardCell): boolean => cell.type !== CellType.Unbreakable && cell.type !== CellType.Empty && cell.hp > 0;

export const readableRunState = (state: RunState): string => {
  if (state === RunState.ToolsDepleted) return '工具已耗尽';
  if (state === RunState.Settling) return '结算中';
  if (state === RunState.ReturnConfirm) return '确认返场';
  return '推进中';
};
