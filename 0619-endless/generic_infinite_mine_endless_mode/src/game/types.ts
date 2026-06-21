import { CellType, DepthStageId, RunState, ToolType } from '@/constants';

export type GridPoint = { row: number; col: number };
export type ResourceType = 'coin' | 'ore' | 'material';
export type Harvest = { coin: number; ores: Record<string, number>; materials: Record<string, number> };

export interface DropPayload {
  coin?: number;
  oreKey?: string;
  material?: number;
  supplyScore?: number;
  tools?: Partial<Record<ToolType, number>>;
}

export interface BoardCell {
  row: number;
  col: number;
  type: CellType;
  hp: number;
  maxHp: number;
  revealed: boolean;
  locked: boolean;
  payload?: DropPayload;
}

export interface DepthStageConfig {
  id: DepthStageId;
  label: string;
  minDepth: number;
  maxDepth: number | null;
  supplyMax: number;
  reward: Partial<Record<ToolType, number>>;
}

export interface EndlessMineConfig {
  depthStages: DepthStageConfig[];
}

export interface EnterMineData {
  runId: string;
  tools: Record<ToolType, number>;
  depth: number;
  board: BoardCell[][];
  nextRowPreview: BoardCell[];
  supplyValue: number;
  supplyMax: number;
}

export interface SettlementData {
  runId: string;
  depth: number;
  harvest: Harvest;
  reason: 'manual_exit' | 'tools_depleted' | 'return_confirm' | 'interrupted';
}

export interface MineHomeData {
  homeEnergy: number;
  homeCoin: number;
  premiumCurrency: number;
  mainOreBag: Record<string, number>;
  mainMaterialBag: Record<string, number>;
}

export interface DigServerPatch {
  board: BoardCell[][];
  nextRowPreview: BoardCell[];
  tools: Record<ToolType, number>;
  harvest: Harvest;
  depth: number;
  depthStageId: DepthStageId;
  stageProgressText: string;
  supplyValue: number;
  supplyMax: number;
  runState: RunState;
  toast?: string;
}

export interface MineCallbacks {
  onBoardChange: (cells: BoardCell[][], nextRow: BoardCell[]) => void;
  onDepthChange: (depth: number, stageId: DepthStageId, progressText: string) => void;
  onSupplyChange: (value: number, max: number) => void;
  onToolChange: (tools: Record<ToolType, number>, selected: ToolType | null) => void;
  onHarvestChange: (delta: Partial<Harvest>, total: Harvest, flyFrom?: GridPoint) => void;
  getResourceTargetRect?: (type: ResourceType) => DOMRect | null;
  onPreviewChange?: (points: GridPoint[]) => void;
  onToast: (message: string) => void;
  onBlocker?: (title: string, content: string) => void;
  onRunStateChange: (state: RunState) => void;
  onGameOver: (reason: 'manual_exit' | 'tools_depleted') => void;
}
