import { ToolType } from '@/constants';

export const initialTools: Record<ToolType, number> = {
  [ToolType.Pickaxe]: 20,
  [ToolType.RowBomb]: 0,
  [ToolType.AreaBomb]: 0,
};
