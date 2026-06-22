import { IS_MOCK } from '@/constants';
import { START_ENERGY_COST } from '@/constants/game';
import { MineRunState, SettlementSnapshot } from '@/store/slices/mineRunSlice';
import { request } from './request';
import * as mocks from './mocks';

export interface HomePageData {
  title: string;
  startLabel: string;
  startEnergyCost: number;
}

export interface StartRunData {
  startEnergyCost: number;
  runState: MineRunState;
}

export interface SettlementResult {
  accepted: boolean;
  snapshot: SettlementSnapshot;
}

export const getHomePage = async (): Promise<HomePageData> => {
  if (IS_MOCK) return mocks.mockGetHomePage();
  return request<HomePageData>('/api/getHomePage');
};

export const submitStartRun = async (params: { startEnergyCost?: number } = {}): Promise<StartRunData> => {
  const payload = { startEnergyCost: params.startEnergyCost ?? START_ENERGY_COST };
  if (IS_MOCK) return mocks.mockSubmitStartRun(payload);
  return request<StartRunData>('/api/submitStartRun', { method: 'POST', body: JSON.stringify(payload) });
};

export const submitRunSettlement = async (snapshot: SettlementSnapshot): Promise<SettlementResult> => {
  if (IS_MOCK) return mocks.mockSubmitRunSettlement(snapshot);
  return request<SettlementResult>('/api/submitRunSettlement', { method: 'POST', body: JSON.stringify(snapshot) });
};
