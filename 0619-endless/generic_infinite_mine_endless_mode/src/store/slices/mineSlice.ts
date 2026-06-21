import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { DepthStageId, RunState, ToolType } from '@/constants';
import type { BoardCell, Harvest, SettlementData, GridPoint, EnterMineData } from '@/game/types';
import { emptyHarvest } from '@/game/BoardModel';

export interface MineState {
  runId: string | null;
  runState: RunState;
  depth: number;
  depthStageId: DepthStageId;
  stageProgressText: string;
  board: BoardCell[][];
  nextRowPreview: BoardCell[];
  tools: Record<ToolType, number>;
  selectedTool: ToolType | null;
  previewCells: GridPoint[];
  supplyValue: number;
  supplyMax: number;
  harvest: Harvest;
  unlockedFlags: Record<string, boolean>;
  lastInvalidReason: string | null;
  settlement: SettlementData | null;
}

const initialState: MineState = {
  runId: null,
  runState: RunState.Idle,
  depth: 1,
  depthStageId: DepthStageId.Surface,
  stageProgressText: '1/30',
  board: [],
  nextRowPreview: [],
  tools: { [ToolType.Pickaxe]: 0, [ToolType.RowBomb]: 0, [ToolType.AreaBomb]: 0 },
  selectedTool: null,
  previewCells: [],
  supplyValue: 0,
  supplyMax: 30,
  harvest: emptyHarvest(),
  unlockedFlags: {},
  lastInvalidReason: null,
  settlement: null,
};

export const mineSlice = createSlice({
  name: 'mine',
  initialState,
  reducers: {
    updateMine: (state, action: PayloadAction<Partial<MineState>>) => ({ ...state, ...action.payload }),
    resetMine: () => initialState,
    initRun: (state, action: PayloadAction<EnterMineData>) => ({
      ...state,
      runId: action.payload.runId,
      runState: RunState.Progressing,
      depth: action.payload.depth,
      depthStageId: DepthStageId.Surface,
      stageProgressText: `${action.payload.depth}/30`,
      board: action.payload.board,
      nextRowPreview: action.payload.nextRowPreview,
      tools: action.payload.tools,
      selectedTool: ToolType.Pickaxe,
      supplyValue: action.payload.supplyValue,
      supplyMax: action.payload.supplyMax,
      harvest: emptyHarvest(),
      settlement: null,
    }),
    setBoard: (state, action: PayloadAction<{ board: BoardCell[][]; nextRowPreview: BoardCell[] }>) => { state.board = action.payload.board; state.nextRowPreview = action.payload.nextRowPreview; },
    setTools: (state, action: PayloadAction<Record<ToolType, number>>) => { state.tools = action.payload; },
    setHarvest: (state, action: PayloadAction<Harvest>) => { state.harvest = action.payload; },
    setPreviewCells: (state, action: PayloadAction<GridPoint[]>) => { state.previewCells = action.payload; },
    setSettlement: (state, action: PayloadAction<SettlementData>) => { state.settlement = action.payload; },
  },
});

export const { updateMine, resetMine, initRun, setBoard, setTools, setHarvest, setPreviewCells, setSettlement } = mineSlice.actions;
export default mineSlice.reducer;
