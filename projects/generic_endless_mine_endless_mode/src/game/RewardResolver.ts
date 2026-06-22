import { getBiomeByDepth } from '@/data/biomeConfig';
import { emptyReward, resolveDemoReward, RewardPayload } from '@/data/rewardConfig';
import { MineCellMeta } from '@/data/initialBoard';

export interface ToolReward {
  woodPick: number;
  rowBomb: number;
  areaBomb: number;
}

export class RewardResolver {
  resolve(meta: MineCellMeta, depth: number): RewardPayload {
    if (meta.contentType === 'emptyReveal') return emptyReward();
    return resolveDemoReward(meta.contentType, depth);
  }

  resolveSupply(depth: number): ToolReward {
    const biome = getBiomeByDepth(depth);
    return { ...biome.supply };
  }
}
