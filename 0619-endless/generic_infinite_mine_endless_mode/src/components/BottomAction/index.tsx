import React from 'react';
import './index.750.less';

export const BottomAction: React.FC<{ onBackpack: () => void; onExit: () => void }> = ({ onBackpack, onExit }) => (
  <div className="bottom-action">
    <button className="bottom-action__backpack" onClick={onBackpack} aria-label="背包"><img src="./assets/imgs/icon_backpack.png" alt="" /></button>
    <button className="bottom-action__exit" onClick={onExit} aria-label="收队返场" />
  </div>
);
