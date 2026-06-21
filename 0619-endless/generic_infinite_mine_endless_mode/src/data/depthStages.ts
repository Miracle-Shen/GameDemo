import { DepthStageId, ToolType } from '@/constants';
import type { DepthStageConfig } from '@/game/types';

export const depthStages: DepthStageConfig[] = [
  { id: DepthStageId.Surface, label: '地表矿区', minDepth: 1, maxDepth: 30, supplyMax: 30, reward: { [ToolType.Pickaxe]: 2 } },
  { id: DepthStageId.DeepSurface, label: '深地表', minDepth: 31, maxDepth: 80, supplyMax: 50, reward: { [ToolType.Pickaxe]: 3, [ToolType.RowBomb]: 1 } },
  { id: DepthStageId.ShallowSea, label: '浅海', minDepth: 81, maxDepth: 150, supplyMax: 70, reward: { [ToolType.Pickaxe]: 4, [ToolType.AreaBomb]: 1 } },
  { id: DepthStageId.DeepSea, label: '深海', minDepth: 151, maxDepth: 260, supplyMax: 90, reward: { [ToolType.Pickaxe]: 5, [ToolType.RowBomb]: 1, [ToolType.AreaBomb]: 1 } },
  { id: DepthStageId.CoreVolcanicMud, label: '地心火山泥', minDepth: 261, maxDepth: null, supplyMax: 120, reward: { [ToolType.Pickaxe]: 6, [ToolType.RowBomb]: 2, [ToolType.AreaBomb]: 1 } },
];
