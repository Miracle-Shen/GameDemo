import { CellType, MineContentType } from '@/constants/enum';
import { BOARD_COLS } from '@/constants/game';
import { BoardCell } from '@/data/initialBoard';

export class MineRowGenerator {
  generate(depth: number, biomeIndex: number, currentBottomOpenings: number[] = []): BoardCell[] {
    const newRow: BoardCell[] = new Array(BOARD_COLS).fill(0).map((_, x) => {
      const shouldWall = x === 0 || x === BOARD_COLS - 1 ? false : (x + depth) % (7 - Math.min(biomeIndex, 4)) === 0;
      if (shouldWall) return { terrain: CellType.Wall, meta: { coverVisible: false, contentType: 'sand', durability: 999, hasOreHint: false, hasToolHint: false, rewardTableId: 'wall' } };
      const selector = (x + depth + biomeIndex) % 6;
      const contentType: MineContentType = selector === 0 && biomeIndex >= 2 ? 'chest' : selector === 1 && biomeIndex >= 3 ? 'blindBox' : selector === 2 ? 'ore' : selector === 3 ? 'tool' : 'sand';
      return { terrain: CellType.Special, meta: { coverVisible: true, contentType, durability: contentType === 'ore' ? 2 : 1, hasOreHint: contentType === 'ore', hasToolHint: contentType === 'tool', rewardTableId: contentType } };
    });
    const preferredOpening = currentBottomOpenings.find((x) => x > 0 && x < BOARD_COLS - 1) ?? depth % BOARD_COLS;
    newRow[preferredOpening] = { terrain: CellType.Special, meta: { coverVisible: true, contentType: 'sand', durability: 1, hasOreHint: false, hasToolHint: false, rewardTableId: 'path' } };
    return newRow;
  }
}
