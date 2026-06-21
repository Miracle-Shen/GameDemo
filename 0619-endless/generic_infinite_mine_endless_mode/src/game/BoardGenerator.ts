import { BOARD_COLS, BOARD_ROWS, CellType, DepthStageId, ToolType } from '@/constants';
import { cellDurability, oreKeys } from '@/data/cellConfigs';
import { depthStages } from '@/data/depthStages';
import type { BoardCell, DepthStageConfig, EndlessMineConfig } from './types';

export class BoardGenerator {
  private readonly stages: DepthStageConfig[];

  constructor(config: EndlessMineConfig = { depthStages }) {
    this.stages = config.depthStages;
  }

  resolveDepthStage(depth: number): DepthStageId {
    const stage = this.stages.find((item) => depth >= item.minDepth && (item.maxDepth === null || depth <= item.maxDepth));
    return stage?.id ?? DepthStageId.Surface;
  }

  getStage(depth: number): DepthStageConfig {
    return this.stages.find((item) => depth >= item.minDepth && (item.maxDepth === null || depth <= item.maxDepth)) ?? this.stages[0];
  }

  makeCell(row: number, col: number, depth: number): BoardCell {
    const stage = this.getStage(depth);
    const stageSpan = Math.max(1, (stage.maxDepth ?? stage.minDepth + 160) - stage.minDepth + 1);
    const stageProgress = Math.max(0, Math.min(1, (depth - stage.minDepth) / stageSpan));
    const roll = (row * 17 + col * 29 + depth * 13 + Math.floor(stageProgress * 23)) % 100;
    const obstacleChance = stage.id === DepthStageId.Surface ? 8 : stage.id === DepthStageId.DeepSurface ? 12 : stage.id === DepthStageId.ShallowSea ? 16 : stage.id === DepthStageId.DeepSea ? 20 : 25;
    const wallChance = stage.id === DepthStageId.Surface ? 18 : stage.id === DepthStageId.DeepSurface ? 22 : stage.id === DepthStageId.ShallowSea ? 26 : stage.id === DepthStageId.DeepSea ? 30 : 34;
    const chestChance = depth < 31 ? 0 : 5 + Math.floor(stageProgress * 10) + (stage.id === DepthStageId.DeepSea ? 4 : stage.id === DepthStageId.CoreVolcanicMud ? 8 : 0);
    const mysteryChance = depth < 81 ? 0 : 4 + Math.floor(stageProgress * 12) + (stage.id === DepthStageId.DeepSea ? 5 : stage.id === DepthStageId.CoreVolcanicMud ? 10 : 0);
    const oreChance = 30 + Math.floor(stageProgress * 12) + (stage.id === DepthStageId.CoreVolcanicMud ? 8 : 0);

    let cursor = 0;
    let type: CellType = CellType.Sand;
    cursor += obstacleChance;
    if (roll < cursor) type = CellType.Unbreakable;
    else {
      cursor += wallChance;
      if (roll < cursor) type = CellType.DarkWall;
      else {
        cursor += chestChance;
        if (roll < cursor) type = CellType.Chest;
        else {
          cursor += mysteryChance;
          if (roll < cursor) type = CellType.MysteryBrick;
          else {
            cursor += oreChance;
            if (roll < cursor) type = CellType.OreBrick;
            else if ((roll + row + col) % 11 === 0) type = CellType.ToolCell;
          }
        }
      }
    }

    const hp = cellDurability[type];
    const grade = this.resolveOreGrade(depth, stageProgress);
    const randomSupplyScore = this.resolveRandomSupplyScore(stage, roll, row, col, depth);
    return {
      row,
      col,
      type,
      hp,
      maxHp: hp,
      revealed: true,
      locked: type === CellType.Unbreakable,
      payload: type === CellType.OreBrick
        ? { coin: 6 + depth + Math.floor(stageProgress * 12), oreKey: oreKeys[grade], material: 1 + (depth >= 151 ? 1 : 0), supplyScore: 1 + randomSupplyScore }
        : type === CellType.Chest
          ? { coin: 18 + depth + Math.floor(stageProgress * 20), oreKey: oreKeys[Math.min(grade + 1, oreKeys.length - 1)], tools: { [ToolType.Pickaxe]: 1 + (depth >= 151 ? 1 : 0), [ToolType.RowBomb]: 1 }, supplyScore: 3 + randomSupplyScore }
          : type === CellType.ToolCell
            ? { tools: { [ToolType.Pickaxe]: 2, [ToolType.AreaBomb]: depth >= 81 ? 1 : 0 }, supplyScore: 2 + randomSupplyScore }
            : type === CellType.MysteryBrick
              ? { coin: 10 + depth * 2 + Math.floor(stageProgress * 30), material: 2 + (depth >= 151 ? 1 : 0), tools: { [ToolType.RowBomb]: stageProgress > 0.5 ? 1 : 0 }, supplyScore: 4 + randomSupplyScore }
              : { supplyScore: (type === CellType.Sand ? 1 : 0) + randomSupplyScore },
    };
  }

  generateInitialBoard(depth: number): BoardCell[][] {
    const rows = new Array(BOARD_ROWS).fill(null).map((_, row) => new Array(BOARD_COLS).fill(null).map((__, col) => this.makeCell(row, col, depth + row)));
    return this.ensureDiggablePath(rows);
  }

  generateNextRow(depth: number, previousRows: BoardCell[][]): BoardCell[] {
    const row = previousRows.length % BOARD_ROWS;
    const cells = new Array(BOARD_COLS).fill(null).map((_, col) => this.makeCell(row, col, depth));
    const center = Math.floor(BOARD_COLS / 2);
    cells[center] = { ...cells[center], type: CellType.Sand, hp: 1, maxHp: 1, locked: false, payload: { supplyScore: cells[center].payload?.supplyScore ?? 1 } };
    return cells;
  }

  ensureDiggablePath(rows: BoardCell[][]): BoardCell[][] {
    return rows.map((row, rowIndex) => row.map((cell, colIndex) => (colIndex === Math.floor(BOARD_COLS / 2) ? { ...cell, locked: false, type: rowIndex % 2 === 0 ? CellType.Sand : cell.type, hp: cell.type === CellType.Unbreakable ? 1 : cell.hp } : cell)));
  }

  private resolveRandomSupplyScore(stage: DepthStageConfig, roll: number, row: number, col: number, depth: number): number {
    const stageMaxDepth = stage.maxDepth ?? stage.minDepth;
    const randomReward = Math.floor(stageMaxDepth * 0.3);
    const shouldDropRandomScore = (roll + row * 7 + col * 11 + depth) % 17 === 0;
    return shouldDropRandomScore ? randomReward : 0;
  }

  private resolveOreGrade(depth: number, stageProgress: number): number {
    if (depth < 81) return depth >= 31 ? 1 : Math.min(1, Math.floor(Math.max(depth, 1) / 30));
    if (depth < 151) return 2 + (stageProgress > 0.65 ? 1 : 0);
    if (depth < 261) return 3 + Math.min(2, Math.floor(stageProgress * 3));
    return Math.min(oreKeys.length - 1, 5 + Math.floor(stageProgress * 4));
  }
}
