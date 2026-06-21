import React from 'react';
import { PageShell } from '@/components/Stage';
import { TopHud } from '@/components/TopHud';
import { StatusInfo } from '@/components/StatusInfo';
import { RunHarvest } from '@/components/RunHarvest';
import { SupplyBar } from '@/components/SupplyBar';
import { PixiMineCanvas } from '@/components/PixiMineCanvas';
import { ToolBar } from '@/components/ToolBar';
import { BottomAction } from '@/components/BottomAction';
import { ToastLayer } from '@/components/ToastLayer';
import { ModalLayer } from '@/components/modals';
import { DepthStageId, RunState } from '@/constants';
import { useEndlessMine } from '@/hooks/useEndlessMine';
import './index.750.less';

const bgByStage: Record<DepthStageId, string> = {
  [DepthStageId.Surface]: 'bg_mine_surface.png',
  [DepthStageId.DeepSurface]: 'bg_mine_deep_surface.png',
  [DepthStageId.ShallowSea]: 'bg_mine_shallow_sea.png',
  [DepthStageId.DeepSea]: 'bg_mine_deep_sea.png',
  [DepthStageId.CoreVolcanicMud]: 'bg_mine_core_volcanic_mud.png',
};

const EndlessMinePage: React.FC = () => {
  const state = useEndlessMine();
  const toastMessage = state.app.toastQueue[0]?.message;
  return (
    <PageShell bg={bgByStage[state.mine.depthStageId]} className="endless-mine-page">
      <TopHud energy={state.app.homeEnergy} coin={state.app.homeCoin} premiumCurrency={state.app.premiumCurrency} onBack={state.handleReturnClick} />
      <StatusInfo depthStageId={state.mine.depthStageId} stageProgressText={state.mine.stageProgressText} runState={state.mine.runState} />
      <RunHarvest harvest={state.mine.harvest} slotRefs={state.harvestSlotRefs} />
      <SupplyBar value={state.mine.supplyValue} max={state.mine.supplyMax} />
      <PixiMineCanvas hostRef={state.canvasHostRef} nextRowPreview={state.mine.nextRowPreview} previewCells={state.mine.previewCells} onCellClick={state.handleCellClick} onCellHover={state.handleCellHover} onCellLeave={state.handleCellLeave} />
      <ToolBar counts={state.mine.tools} selectedTool={state.mine.selectedTool} onSelectTool={state.handleSelectTool} />
      <BottomAction onBackpack={state.handleBackpack} onExit={state.handleExit} />
      {state.mine.runState === RunState.StageUpPrompt && (
        <div className="stage-up-panel" aria-live="polite">
          <img src="./assets/imgs/panel_stage_up.png" alt="" />
          <strong>进入更深矿层</strong>
          <span>本层矿脉价值提升</span>
        </div>
      )}
      <ToastLayer message={toastMessage} onDone={state.handleToastDone} />
      <ModalLayer activeModal={state.app.activeModal} payload={state.app.modalPayload} settlement={state.mine.settlement} onClose={state.handleCloseModal} onContinue={state.handleContinueDig} onConfirmReturn={state.handleConfirmReturn} onResultConfirm={state.handleResultConfirm} />
    </PageShell>
  );
};

export default EndlessMinePage;
