import React from 'react';
import './index.750.less';

export const BottomDock: React.FC<{ activeKey: string }> = ({ activeKey }) => (
  <div className="bottom-dock" data-active={activeKey}>
    <img className="bottom-dock__backpack" src="./assets/imgs/icon_backpack.png" alt="背包" />
  </div>
);
