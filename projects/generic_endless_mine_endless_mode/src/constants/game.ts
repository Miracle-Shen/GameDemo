import { CellType, ToolType } from './enum';

export const DESIGN_CANVAS = { width: 750, height: 1334 } as const;
export const BOARD_COLS = 7;
export const BOARD_ROWS = 6;
export const INPUT_DEBOUNCE_MS = 120;
export const SETTLEMENT_DELAY_MS = 600;
export const START_ENERGY_COST = 1;

export const INITIAL_TOOLS = {
  [ToolType.Pick]: 20,
  [ToolType.RowBomb]: 2,
  [ToolType.AreaBomb]: 2,
} as const;

export const BIOMES = [
  { index: 1, name: '地表矿区', minDepth: 1, maxDepth: 30, bg: 'mine_surface_bg.png', supplyTarget: 12, supply: { woodPick: 4, rowBomb: 0, areaBomb: 0 } },
  { index: 2, name: '深地表', minDepth: 31, maxDepth: 80, bg: 'mine_mid_bg.png', supplyTarget: 16, supply: { woodPick: 3, rowBomb: 1, areaBomb: 0 } },
  { index: 3, name: '浅海', minDepth: 81, maxDepth: 150, bg: 'mine_shallow_sea_bg.png', supplyTarget: 20, supply: { woodPick: 3, rowBomb: 1, areaBomb: 0 } },
  { index: 4, name: '深海', minDepth: 151, maxDepth: 260, bg: 'mine_deep_sea_bg.png', supplyTarget: 24, supply: { woodPick: 2, rowBomb: 1, areaBomb: 1 } },
  { index: 5, name: '地心火山泥', minDepth: 261, maxDepth: Infinity, bg: 'mine_core_bg.png', supplyTarget: 28, supply: { woodPick: 2, rowBomb: 1, areaBomb: 1 } },
] as const;

export const INITIAL_TERRAIN: CellType[][] = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 6, 6, 1, 6, 6, 0],
  [0, 6, 6, 6, 6, 1, 0],
  [0, 1, 6, 6, 6, 6, 0],
  [0, 6, 6, 1, 6, 6, 0],
  [0, 6, 6, 6, 6, 6, 0],
];

export const TILE_ASSET_KEYS = {
  emptyReveal: 'tile_empty_tunnel.png',
  wall: 'tile_wall.png',
  sand: 'tile_sand.png',
  ore: 'tile_ore.png',
  blindBox: 'tile_blind_box.png',
  cover: 'tile_cover.png',
  chest: 'tile_chest.png',
  oreHint: 'marker_ore_hint.png',
  toolHint: 'marker_tool_hint.png',
} as const;
