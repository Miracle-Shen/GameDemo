import React, { useEffect, useMemo } from 'react';
import { Abs, PageShell } from '@/components/Stage';
import { ToolType } from '@/constants/enum';
import { IMAGE_ASSETS } from '@/data/assetKeys';
import { getNextSupplyText } from '@/data/biomeConfig';
import { useEndlessMineGame } from '@/hooks/useEndlessMineGame';
import { useRouteGuard } from '@/hooks/useRouteGuard';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectTool } from '@/store/slices/mineRunSlice';
import './index.750.less';

const bgByBiome = ['mine_surface_bg.png', 'mine_surface_bg.png', 'mine_mid_bg.png', 'mine_shallow_sea_bg.png', 'mine_deep_sea_bg.png', 'mine_core_bg.png'];

const RunPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const run = useAppSelector((state) => state.mineRun);
  const toast = useAppSelector((state) => ({ message: state.app.toastMessage, seq: state.app.toastSeq }));
  const { canvasRef, selectTool: selectGameTool, returnToCamp, resizeGame } = useEndlessMineGame();
  const { canInteract } = useRouteGuard();
  const supplyText = useMemo(() => getNextSupplyText(run.currentBiomeIndex), [run.currentBiomeIndex]);
  const supplyPercent = Math.min(1, run.supplyPoints / run.supplyTarget);

  useEffect(() => {
    resizeGame();
  }, [resizeGame]);

  const handleSelectTool = (tool: ToolType) => {
    if (!canInteract) return;
    dispatch(selectTool(tool));
    selectGameTool(tool);
  };

  return (
    <PageShell bg={bgByBiome[run.currentBiomeIndex] ?? IMAGE_ASSETS.surfaceBg} className="run-page">
      <Abs box={[16, 13, 721, 78]} z={10} className="run-page__status-bar">
        <div className="run-page__biome">{run.currentBiomeName}</div>
        <div className="run-page__progress">{run.supplyPoints}/{run.supplyTarget}</div>
        <div className="run-page__state">{run.runStatus}</div>
      </Abs>
      <Abs box={[16, 91, 721, 73]} z={10} className="run-page__loot-bar">
        <div className="run-page__loot run-page__loot--gold">{run.runLoot.gold.toLocaleString()}</div>
        <div className="run-page__loot run-page__loot--ore">{run.runLoot.ore.toLocaleString()}</div>
        <div className="run-page__loot run-page__loot--material">{run.runLoot.material.toLocaleString()}</div>
      </Abs>
      <Abs box={[28, 178, 109, 116]} z={10} className="run-page__depth-panel">
        <img src={`./assets/imgs/${IMAGE_ASSETS.depthPanel}`} alt="" />
        <div className="run-page__depth-value">{run.currentDepth}m</div>
      </Abs>
      <Abs box={[156, 183, 563, 67]} z={10} className="run-page__supply-panel">
        <img src={`./assets/imgs/${IMAGE_ASSETS.supplyPanel}`} alt="" />
        <div className="run-page__supply-fill" style={{ width: `${82 * supplyPercent}px` }} />
        <div className="run-page__supply-text">{run.supplyPoints}/{run.supplyTarget}　{supplyText}</div>
      </Abs>
      <Abs box={[28, 300, 694, 642]} z={10} className="run-page__board">
        <canvas ref={canvasRef} className="run-page__canvas" />
      </Abs>
      <Abs box={[28, 733, 694, 5]} z={10} className="run-page__depth-line">
        <span>~{run.currentDepth}m</span>
      </Abs>
      <Abs box={[47, 1067, 661, 252]} z={10} anchor="bottom" className="run-page__tool-bar">
        <img className="run-page__tool-bg" src={`./assets/imgs/${IMAGE_ASSETS.toolBar}`} alt="" />
        <button className={`run-page__tool-slot run-page__tool-slot--pick ${run.selectedTool === ToolType.Pick ? 'is-active' : ''}`} onClick={() => handleSelectTool(ToolType.Pick)}>
          <img className="run-page__tool-icon run-page__tool-icon--pick" src={`./assets/imgs/${IMAGE_ASSETS.pickIcon}`} alt="" />
          <span>木镐<br />×{run.woodPick}</span>
        </button>
        <button className={`run-page__tool-slot run-page__tool-slot--row ${run.selectedTool === ToolType.RowBomb ? 'is-active' : ''}`} onClick={() => handleSelectTool(ToolType.RowBomb)}>
          <img className="run-page__tool-icon run-page__tool-icon--row" src={`./assets/imgs/${IMAGE_ASSETS.rowBombIcon}`} alt="" />
          <span>炸行<br />×{run.rowBomb}</span>
        </button>
        <button className={`run-page__tool-slot run-page__tool-slot--area ${run.selectedTool === ToolType.AreaBomb ? 'is-active' : ''}`} onClick={() => handleSelectTool(ToolType.AreaBomb)}>
          <img className="run-page__tool-icon run-page__tool-icon--area" src={`./assets/imgs/${IMAGE_ASSETS.areaBombIcon}`} alt="" />
          <span>九宫格<br />×{run.areaBomb}</span>
        </button>
        <button className="run-page__bag" onClick={() => handleSelectTool(run.selectedTool)}>
          <img src={`./assets/imgs/${IMAGE_ASSETS.bag}`} alt="背包" />
        </button>
        <button className="run-page__return" disabled={!canInteract} onClick={returnToCamp}>
          <img src={`./assets/imgs/${IMAGE_ASSETS.returnCamp}`} alt="收队返场" />
        </button>
      </Abs>
      {toast.message && <Abs key={toast.seq} box={[165, 585, 420, 56]} z={100} className="run-page__toast">{toast.message}</Abs>}
    </PageShell>
  );
};

export default RunPage;
