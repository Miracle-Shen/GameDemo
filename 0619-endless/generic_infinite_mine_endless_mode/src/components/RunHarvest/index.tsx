import React from 'react';
import { sumHarvest } from '@/game/BoardModel';
import type { Harvest, ResourceType } from '@/game/types';
import './index.750.less';

export const RunHarvest: React.FC<{
  harvest: Harvest;
  slotRefs?: Partial<Record<ResourceType, (element: HTMLDivElement | null) => void>>;
}> = ({ harvest, slotRefs }) => {
  const sums = sumHarvest(harvest);
  return (
    <div className="run-harvest">
      <div ref={slotRefs?.coin} className="run-harvest__slot run-harvest__slot--coin"><img src="./assets/imgs/icon_coin.png" alt="" /><span key={`coin-${harvest.coin}`}>+{harvest.coin}</span></div>
      <div ref={slotRefs?.ore} className="run-harvest__slot run-harvest__slot--ore"><img src="./assets/imgs/icon_ore.png" alt="" /><span key={`ore-${sums.ore}`}>+{sums.ore}</span></div>
      <div ref={slotRefs?.material} className="run-harvest__slot run-harvest__slot--material"><img src="./assets/imgs/icon_material.png" alt="" /><span key={`material-${sums.material}`}>+{sums.material}</span></div>
    </div>
  );
};
