import { BIOMES } from '@/constants/game';

export const getBiomeByDepth = (depth: number) => {
  return BIOMES.find((item) => depth >= item.minDepth && depth <= item.maxDepth) ?? BIOMES[BIOMES.length - 1];
};

export const getNextSupplyText = (biomeIndex: number): string => {
  const biome = BIOMES.find((item) => item.index === biomeIndex) ?? BIOMES[0];
  const parts = [
    biome.supply.woodPick > 0 ? `木镐+${biome.supply.woodPick}` : '',
    biome.supply.rowBomb > 0 ? `横炸+${biome.supply.rowBomb}` : '',
    biome.supply.areaBomb > 0 ? `九炸+${biome.supply.areaBomb}` : '',
  ].filter(Boolean);
  return `补给：${parts.join(' ')}`;
};
