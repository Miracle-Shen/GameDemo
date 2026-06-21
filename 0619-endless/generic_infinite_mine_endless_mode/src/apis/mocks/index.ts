import { DepthStageId, RunState, ToolType } from '@/constants';
import { depthStages } from '@/data/depthStages';
import { BoardGenerator } from '@/game/BoardGenerator';
import { emptyHarvest } from '@/game/BoardModel';
import type { DigServerPatch, EndlessMineConfig, EnterMineData, Harvest, MineHomeData, SettlementData } from '@/game/types';
import { delay } from '@/utils';
import type { PendingRunData } from '../types';
const generator = new BoardGenerator({ depthStages });
let mockState = {
  homeEnergy: 30,
  homeCoin: 128,
  premiumCurrency: 6,
  mainOreBag: {} as Record<string, number>,
  mainMaterialBag: {} as Record<string, number>,
  runSeq: 0,
  activeRun: null as EnterMineData | null,
  harvest: emptyHarvest(),
  depth: 1,
  clientSeq: 0,
};

export const mockGetMineHome = async (signal?: AbortSignal): Promise<MineHomeData> => {
  await delay(160, signal);
  return { homeEnergy: mockState.homeEnergy, homeCoin: mockState.homeCoin, premiumCurrency: mockState.premiumCurrency, mainOreBag: { ...mockState.mainOreBag }, mainMaterialBag: { ...mockState.mainMaterialBag } };
};

export const mockSubmitEnterEndlessMine = async (params: { costEnergy: 1 }, signal?: AbortSignal): Promise<EnterMineData> => {
  await delay(220, signal);
  if (mockState.homeEnergy < params.costEnergy) throw new Error('体力不足');
  const board = generator.generateInitialBoard(1);
  const activeRun: EnterMineData = {
    runId: `run-${Date.now()}-${mockState.runSeq + 1}`,
    tools: { [ToolType.Pickaxe]: 20, [ToolType.RowBomb]: 0, [ToolType.AreaBomb]: 0 },
    depth: 1,
    board,
    nextRowPreview: generator.generateNextRow(7, board),
    supplyValue: 0,
    supplyMax: 30,
  };
  mockState = { ...mockState, homeEnergy: mockState.homeEnergy - 1, runSeq: mockState.runSeq + 1, activeRun, harvest: emptyHarvest(), depth: 1 };
  return { ...activeRun, tools: { ...activeRun.tools }, board: activeRun.board.map((row) => row.map((cell) => ({ ...cell }))) };
};

export const mockGetEndlessMineConfig = async (_params: { runId: string }, signal?: AbortSignal): Promise<EndlessMineConfig> => {
  await delay(120, signal);
  return { depthStages };
};

export const mockSubmitDigAction = async (_params: { runId: string; tool: string; target: { row: number; col: number }; clientSeq: number }, signal?: AbortSignal): Promise<DigServerPatch> => {
  await delay(80, signal);
  mockState = { ...mockState, clientSeq: mockState.clientSeq + 1 };
  const active = mockState.activeRun;
  const board = active?.board ?? generator.generateInitialBoard(1);
  return {
    board,
    nextRowPreview: active?.nextRowPreview ?? generator.generateNextRow(7, board),
    tools: active?.tools ?? { [ToolType.Pickaxe]: 20, [ToolType.RowBomb]: 0, [ToolType.AreaBomb]: 0 },
    harvest: mockState.harvest,
    depth: mockState.depth,
    depthStageId: DepthStageId.Surface,
    stageProgressText: '1/30',
    supplyValue: active?.supplyValue ?? 0,
    supplyMax: active?.supplyMax ?? 30,
    runState: RunState.Progressing,
  };
};

const mergeBag = (bag: Record<string, number>, delta: Record<string, number>): Record<string, number> => {
  const next = { ...bag };
  Object.entries(delta).forEach(([key, value]) => {
    next[key] = (next[key] ?? 0) + value;
  });
  return next;
};

export const mockSubmitSettleMine = async (params: { runId: string; reason: SettlementData['reason']; clientSnapshot: { depth: number; harvest: Harvest } }, signal?: AbortSignal): Promise<SettlementData> => {
  await delay(220, signal);
  const settlement: SettlementData = { runId: params.runId, reason: params.reason, depth: params.clientSnapshot.depth, harvest: params.clientSnapshot.harvest };
  mockState = {
    ...mockState,
    homeCoin: mockState.homeCoin + settlement.harvest.coin,
    mainOreBag: mergeBag(mockState.mainOreBag, settlement.harvest.ores),
    mainMaterialBag: mergeBag(mockState.mainMaterialBag, settlement.harvest.materials),
    activeRun: null,
    harvest: emptyHarvest(),
  };
  return { ...settlement, harvest: { coin: settlement.harvest.coin, ores: { ...settlement.harvest.ores }, materials: { ...settlement.harvest.materials } } };
};

export const mockGetPendingMineRun = async (signal?: AbortSignal): Promise<PendingRunData | null> => {
  await delay(80, signal);
  if (!mockState.activeRun) return null;
  return {
    runId: mockState.activeRun.runId,
    recoverable: true,
    snapshot: {
      ...mockState.activeRun,
      tools: { ...mockState.activeRun.tools },
      board: mockState.activeRun.board.map((row) => row.map((cell) => ({ ...cell, payload: cell.payload ? { ...cell.payload, tools: cell.payload.tools ? { ...cell.payload.tools } : undefined } : undefined }))),
      nextRowPreview: mockState.activeRun.nextRowPreview.map((cell) => ({ ...cell, payload: cell.payload ? { ...cell.payload, tools: cell.payload.tools ? { ...cell.payload.tools } : undefined } : undefined })),
    },
    unsettledHarvest: { coin: mockState.harvest.coin, ores: { ...mockState.harvest.ores }, materials: { ...mockState.harvest.materials } },
  };
};
