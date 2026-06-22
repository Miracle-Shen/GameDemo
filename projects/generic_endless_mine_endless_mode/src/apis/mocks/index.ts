import { START_ENERGY_COST } from '@/constants/game';
import { delay } from '@/utils';
import type { HomePageData, SettlementResult, StartRunData } from '@/apis';
import { resetRun } from '@/store/slices/mineRunSlice';
import { store } from '@/store';
import type { SettlementSnapshot } from '@/store/slices/mineRunSlice';

let mockState = {
  energy: 99,
  startedCount: 0,
  lastSettlement: null as SettlementSnapshot | null,
};

export const mockGetHomePage = async (): Promise<HomePageData> => {
  await delay(180);
  return { title: '无限矿井', startLabel: '进入无尽矿井', startEnergyCost: START_ENERGY_COST };
};

export const mockSubmitStartRun = async (params: { startEnergyCost: number }): Promise<StartRunData> => {
  await delay(220);
  if (mockState.energy < params.startEnergyCost) throw new Error('体力不足');
  mockState = { ...mockState, energy: mockState.energy - params.startEnergyCost, startedCount: mockState.startedCount + 1 };
  store.dispatch(resetRun());
  return { startEnergyCost: params.startEnergyCost, runState: store.getState().mineRun };
};

export const mockSubmitRunSettlement = async (snapshot: SettlementSnapshot): Promise<SettlementResult> => {
  await delay(200);
  const lastSettlement = { ...snapshot, runLoot: { ...snapshot.runLoot } };
  mockState = { ...mockState, lastSettlement };
  return { accepted: true, snapshot: lastSettlement };
};
