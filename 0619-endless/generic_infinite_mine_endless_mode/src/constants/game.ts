import { DepthStageId, ToolType } from './enum';

export const DESIGN_WIDTH = 750;
export const DESIGN_HEIGHT = 1334;
export const ENTRY_COST_ENERGY = 1;
export const INITIAL_PICKAXE_COUNT = 20;
export const BOARD_COLS = 7;
export const BOARD_ROWS = 6;
export const CELL_WIDTH = 72;
export const CELL_HEIGHT = 78;
export const GRID_ORIGIN = { x: 65, y: 385 };
export const GRID_GAP_X = 2;
export const GRID_GAP_Y = 1;

export const TOOL_LABEL: Record<ToolType, string> = {
  [ToolType.Pickaxe]: '木镐',
  [ToolType.RowBomb]: '横排炸弹',
  [ToolType.AreaBomb]: '九宫炸弹',
};

export const STAGE_LABEL: Record<DepthStageId, string> = {
  [DepthStageId.Surface]: '地表矿区',
  [DepthStageId.DeepSurface]: '深地表',
  [DepthStageId.ShallowSea]: '浅海',
  [DepthStageId.DeepSea]: '深海',
  [DepthStageId.CoreVolcanicMud]: '地心火山泥',
};
