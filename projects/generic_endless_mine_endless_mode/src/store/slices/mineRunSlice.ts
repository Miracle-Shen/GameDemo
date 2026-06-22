import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRoute, RunStatus, SettlementReason, ToolType } from '@/constants/enum';
import { INITIAL_TOOLS } from '@/constants/game';
import { BoardSnapshot, createInitialBoard } from '@/data/initialBoard';
import { getBiomeByDepth } from '@/data/biomeConfig';

export interface RunLoot {
  gold: number;
  ore: number;
  material: number;
  openedChests: number;
}

export interface SettlementSnapshot {
  finalDepth: number;
  finalBiomeName: string;
  runLoot: RunLoot;
  reason: SettlementReason;
}

export interface MineRunState {
  currentDepth: number;
  currentBiomeIndex: number;
  currentBiomeName: string;
  supplyPoints: number;
  supplyTarget: number;
  woodPick: number;
  rowBomb: number;
  areaBomb: number;
  selectedTool: ToolType;
  runStatus: RunStatus;
  runLoot: RunLoot;
  rareOreUnlockedShown: boolean;
  boardVersion: number;
  lastActionAt: number;
  settlementReason: SettlementReason | null;
  finalSnapshot: SettlementSnapshot | null;
  board: BoardSnapshot;
}

const createInitialState = (): MineRunState => ({
  currentDepth: 1,
  currentBiomeIndex: 1,
  currentBiomeName: '地表矿区',
  supplyPoints: 0,
  supplyTarget: 12,
  woodPick: INITIAL_TOOLS.pick,
  rowBomb: INITIAL_TOOLS.rowBomb,
  areaBomb: INITIAL_TOOLS.areaBomb,
  selectedTool: ToolType.Pick,
  runStatus: RunStatus.Running,
  runLoot: { gold: 0, ore: 0, material: 0, openedChests: 0 },
  rareOreUnlockedShown: false,
  boardVersion: 0,
  lastActionAt: 0,
  settlementReason: null,
  finalSnapshot: null,
  board: createInitialBoard(),
});

const mineRunSlice = createSlice({
  name: 'mineRun',
  initialState: createInitialState(),
  reducers: {
    resetRun() {
      return createInitialState();
    },
    updateRun(state, action: PayloadAction<Partial<MineRunState>>) {
      Object.assign(state, action.payload);
    },
    selectTool(state, action: PayloadAction<ToolType>) {
      state.selectedTool = action.payload;
    },
    addLoot(state, action: PayloadAction<Partial<RunLoot>>) {
      state.runLoot.gold += action.payload.gold ?? 0;
      state.runLoot.ore += action.payload.ore ?? 0;
      state.runLoot.material += action.payload.material ?? 0;
      state.runLoot.openedChests += action.payload.openedChests ?? 0;
    },
    applyToolDelta(state, action: PayloadAction<{ woodPick?: number; rowBomb?: number; areaBomb?: number }>) {
      state.woodPick = Math.max(0, state.woodPick + (action.payload.woodPick ?? 0));
      state.rowBomb = Math.max(0, state.rowBomb + (action.payload.rowBomb ?? 0));
      state.areaBomb = Math.max(0, state.areaBomb + (action.payload.areaBomb ?? 0));
      if (state.woodPick <= 0 && state.rowBomb <= 0 && state.areaBomb <= 0) state.runStatus = RunStatus.Exhausted;
    },
    advanceDepth(state) {
      state.currentDepth += 1;
      state.supplyPoints += 1;
      const biome = getBiomeByDepth(state.currentDepth);
      state.currentBiomeIndex = biome.index;
      state.currentBiomeName = biome.name;
      state.supplyTarget = biome.supplyTarget;
      state.boardVersion += 1;
    },
    setBoard(state, action: PayloadAction<BoardSnapshot>) {
      state.board = action.payload;
      state.boardVersion += 1;
    },
    setSettlement(state, action: PayloadAction<SettlementSnapshot>) {
      state.finalSnapshot = action.payload;
      state.settlementReason = action.payload.reason;
      state.runStatus = action.payload.reason === 'manual' ? RunStatus.Settling : RunStatus.Exhausted;
    },
    bumpBoardVersion(state) {
      state.boardVersion += 1;
    },
    hydrateDevRun(state) {
      Object.assign(state, createInitialState());
    },
  },
});

export const { resetRun, updateRun, selectTool, addLoot, applyToolDelta, advanceDepth, setBoard, setSettlement, bumpBoardVersion, hydrateDevRun } = mineRunSlice.actions;
export const routeForRun = AppRoute.Running;
export default mineRunSlice.reducer;
