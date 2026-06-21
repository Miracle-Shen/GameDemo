export type { DigServerPatch, EndlessMineConfig, EnterMineData, Harvest, MineHomeData, SettlementData } from '@/game/types';
import type { EnterMineData, Harvest } from '@/game/types';

export interface PendingRunData {
  runId: string;
  recoverable: boolean;
  snapshot?: EnterMineData;
  unsettledHarvest?: Harvest;
}
