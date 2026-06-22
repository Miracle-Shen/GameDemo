import { ToolType, SettlementReason } from '@/constants/enum';
import { MineRunState, RunLoot, SettlementSnapshot } from '@/store/slices/mineRunSlice';
import { BoardSnapshot, GridPoint } from '@/data/initialBoard';

export interface MineGameConfig {
  cols: number;
  rows: number;
  inputDebounceMs: number;
}

export interface MineGameCallbacks {
  onStatePatch: (patch: Partial<MineRunState>) => void;
  onLootChange: (loot: Partial<RunLoot>) => void;
  onToast: (message: string) => void;
  onSettle: (reason: SettlementReason, snapshot?: SettlementSnapshot) => void;
}

export interface ProcessResult {
  board: BoardSnapshot;
  broken: GridPoint[];
  advanced: boolean;
  loot: Partial<RunLoot>;
  toolDelta: { woodPick?: number; rowBomb?: number; areaBomb?: number };
  supplyDelta: number;
}

export { ToolType };
