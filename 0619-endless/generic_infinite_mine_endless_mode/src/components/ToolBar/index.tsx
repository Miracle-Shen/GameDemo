import React from 'react';
import { ToolType, TOOL_LABEL } from '@/constants';
import './index.750.less';

const tools = [ToolType.Pickaxe, ToolType.RowBomb, ToolType.AreaBomb];

export const ToolBar: React.FC<{ counts: Record<ToolType, number>; selectedTool: ToolType | null; onSelectTool: (tool: ToolType) => void }> = ({ counts, selectedTool, onSelectTool }) => (
  <div className="tool-bar">
    {tools.map((tool) => <button key={tool} className={`tool-bar__btn tool-bar__btn--${tool} ${selectedTool === tool ? 'tool-bar__btn--active' : ''}`} onClick={() => onSelectTool(tool)} aria-label={TOOL_LABEL[tool]}><span>x{counts[tool]}</span></button>)}
  </div>
);
