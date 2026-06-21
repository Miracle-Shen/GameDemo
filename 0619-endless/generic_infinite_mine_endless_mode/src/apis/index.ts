import { IS_MOCK } from '@/constants';
import type { DigServerPatch, EndlessMineConfig, EnterMineData, MineHomeData, PendingRunData, SettlementData } from './types';
import { request } from './request';
import * as mocks from './mocks';

export const getMineHome = async (signal?: AbortSignal): Promise<MineHomeData> => IS_MOCK ? mocks.mockGetMineHome(signal) : request<MineHomeData>('/api/mine/home', { signal });

export const submitEnterEndlessMine = async (params: { costEnergy: 1 }, signal?: AbortSignal): Promise<EnterMineData> => IS_MOCK ? mocks.mockSubmitEnterEndlessMine(params, signal) : request<EnterMineData>('/api/mine/enter', { method: 'POST', body: JSON.stringify(params), signal });

export const getEndlessMineConfig = async (params: { runId: string }, signal?: AbortSignal): Promise<EndlessMineConfig> => IS_MOCK ? mocks.mockGetEndlessMineConfig(params, signal) : request<EndlessMineConfig>(`/api/mine/config?runId=${params.runId}`, { signal });

export const submitDigAction = async (params: { runId: string; tool: string; target: { row: number; col: number }; clientSeq: number }, signal?: AbortSignal): Promise<DigServerPatch> => IS_MOCK ? mocks.mockSubmitDigAction(params, signal) : request<DigServerPatch>('/api/mine/dig', { method: 'POST', body: JSON.stringify(params), signal });

export const submitSettleMine = async (params: { runId: string; reason: SettlementData['reason']; clientSnapshot: { depth: number; harvest: SettlementData['harvest'] } }, signal?: AbortSignal): Promise<SettlementData> => IS_MOCK ? mocks.mockSubmitSettleMine(params, signal) : request<SettlementData>('/api/mine/settle', { method: 'POST', body: JSON.stringify(params), signal });

export const getPendingMineRun = async (signal?: AbortSignal): Promise<PendingRunData | null> => IS_MOCK ? mocks.mockGetPendingMineRun(signal) : request<PendingRunData | null>('/api/mine/pending', { signal });
