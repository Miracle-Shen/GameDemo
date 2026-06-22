import { MineContentType } from '@/constants/enum';

export interface RewardPayload {
  gold: number;
  ore: number;
  material: number;
  openedChests: number;
  woodPick: number;
  rowBomb: number;
  areaBomb: number;
  supplyPoints: number;
}

export const emptyReward = (): RewardPayload => ({
  gold: 0,
  ore: 0,
  material: 0,
  openedChests: 0,
  woodPick: 0,
  rowBomb: 0,
  areaBomb: 0,
  supplyPoints: 0,
});

export const resolveDemoReward = (contentType: MineContentType, depth: number): RewardPayload => {
  const reward = emptyReward();
  if (contentType === 'ore') {
    reward.gold = 20 + depth;
    reward.ore = 1 + Math.floor(depth / 30);
    reward.material = depth % 2;
  }
  if (contentType === 'blindBox') {
    reward.gold = 10;
    reward.supplyPoints = 1 + (depth % 4);
    reward.rowBomb = depth >= 31 ? 1 : 0;
  }
  if (contentType === 'chest') {
    reward.openedChests = 1;
    reward.ore = 3;
    reward.woodPick = 1;
  }
  if (contentType === 'tool') {
    reward.woodPick = 3;
    reward.rowBomb = depth >= 31 ? 1 : 0;
    reward.areaBomb = depth >= 151 ? 1 : 0;
  }
  return reward;
};
