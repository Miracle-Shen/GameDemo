import { CellType, MineContentType } from '@/constants/enum';
import { INITIAL_TERRAIN } from '@/constants/game';

export interface GridPoint { x: number; y: number }
export interface MineCellMeta {
  coverVisible: boolean;
  contentType: MineContentType;
  durability: number;
  hasOreHint: boolean;
  hasToolHint: boolean;
  rewardTableId: string;
}
export interface BoardCell {
  terrain: CellType;
  meta: MineCellMeta;
}
export type BoardSnapshot = BoardCell[][];

const metaCodes = [
  ['E', 'S', 'O', 'X', 'S', 'S', 'E'],
  ['S', 'O', 'S', 'W', 'B', 'X', 'S'],
  ['S', 'S', 'O', 'S', 'T', 'W', 'S'],
  ['E', 'W', 'S', 'O', 'S', 'S', 'E'],
  ['S', 'T', 'S', 'W', 'O', 'S', 'S'],
  ['S', 'S', 'O', 'S', 'S', 'B', 'T'],
];

export const createMetaFromCode = (code: string): MineCellMeta => {
  if (code === 'W') return { coverVisible: false, contentType: 'sand', durability: 999, hasOreHint: false, hasToolHint: false, rewardTableId: 'wall' };
  if (code === 'E') return { coverVisible: false, contentType: 'emptyReveal', durability: 0, hasOreHint: false, hasToolHint: false, rewardTableId: 'empty' };
  if (code === 'O') return { coverVisible: true, contentType: 'ore', durability: 2, hasOreHint: true, hasToolHint: false, rewardTableId: 'ore_basic' };
  if (code === 'B') return { coverVisible: true, contentType: 'blindBox', durability: 1, hasOreHint: false, hasToolHint: false, rewardTableId: 'blind_basic' };
  if (code === 'X') return { coverVisible: true, contentType: 'chest', durability: 1, hasOreHint: false, hasToolHint: false, rewardTableId: 'chest_basic' };
  if (code === 'T') return { coverVisible: true, contentType: 'tool', durability: 1, hasOreHint: false, hasToolHint: true, rewardTableId: 'tool_basic' };
  return { coverVisible: true, contentType: 'sand', durability: 1, hasOreHint: false, hasToolHint: false, rewardTableId: 'sand' };
};

export const createInitialBoard = (): BoardSnapshot =>
  INITIAL_TERRAIN.map((row, y) =>
    row.map((terrain, x) => ({ terrain, meta: createMetaFromCode(metaCodes[y][x]) })),
  );
