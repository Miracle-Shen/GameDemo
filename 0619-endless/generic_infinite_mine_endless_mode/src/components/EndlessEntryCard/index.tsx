import React from 'react';
import './index.750.less';

export const EndlessEntryCard: React.FC<{ disabled: boolean; loading: boolean; costEnergy: number; onEnter: () => void }> = ({ disabled, loading, costEnergy, onEnter }) => (
  <div className={`entry-card ${disabled ? 'entry-card--disabled' : ''}`}>
    <button className="entry-card__hit" onClick={onEnter} disabled={loading} aria-label="进入无尽矿井">
      <span className="entry-card__title">无尽矿井</span>
      <span className="entry-card__desc">消耗 {costEnergy} 点体力<br />向更深处进发</span>
      <span className="entry-card__button"><span>{loading ? '入场中' : '进入无尽矿井'}</span></span>
      {disabled ? <span className="entry-card__mask">体力不足</span> : null}
    </button>
  </div>
);
