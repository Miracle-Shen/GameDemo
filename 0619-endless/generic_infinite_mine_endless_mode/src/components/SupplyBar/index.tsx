import React from 'react';
import './index.750.less';

export const SupplyBar: React.FC<{ value: number; max: number }> = ({ value, max }) => {
  const pct = max > 0 ? Math.min(1, value / max) : 0;
  return (
    <div className="supply-bar">
      <div className="supply-bar__fill" style={{ width: `${169 * pct}px` }} />
      <span className="supply-bar__text">{value}/{max}</span>
    </div>
  );
};
