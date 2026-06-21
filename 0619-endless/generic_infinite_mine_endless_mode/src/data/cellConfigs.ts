import { CellType } from '@/constants';

export const cellDurability: Record<CellType, number> = {
  [CellType.DarkWall]: 1,
  [CellType.Sand]: 1,
  [CellType.OreBrick]: 2,
  [CellType.MysteryBrick]: 1,
  [CellType.Unbreakable]: 999,
  [CellType.Chest]: 1,
  [CellType.ToolCell]: 1,
  [CellType.Empty]: 0,
};

export const oreKeys = [
  'ore_common_stone',
  'ore_fluorite',
  'ore_lapis',
  'ore_amethyst',
  'ore_blue_crystal',
  'ore_jade',
  'ore_fire_obsidian',
  'ore_meteorite_iron',
  'ore_starlight_stone',
];
