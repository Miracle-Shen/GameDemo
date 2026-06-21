import React from 'react';
import { PageShell } from '@/components/Stage';
import { TopHud } from '@/components/TopHud';
import { EndlessEntryCard } from '@/components/EndlessEntryCard';
import { BottomDock } from '@/components/BottomDock';
import { ModalLayer } from '@/components/modals';
import { ENTRY_COST_ENERGY } from '@/constants';
import { useMineHome } from '@/hooks/useMineHome';
import { closeModal } from '@/store/slices/appSlice';
import { useAppDispatch } from '@/store';
import './index.750.less';

const MineHomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { homeState, handleEnterMine } = useMineHome();
  return (
    <PageShell bg="bg_mine_home.png" className="mine-home-page">
      <TopHud energy={homeState.homeEnergy} coin={homeState.homeCoin} premiumCurrency={homeState.premiumCurrency} />
      <EndlessEntryCard disabled={homeState.homeEnergy < ENTRY_COST_ENERGY} loading={homeState.loading || homeState.entryLocked} costEnergy={ENTRY_COST_ENERGY} onEnter={handleEnterMine} />
      <BottomDock activeKey="mine" />
      <ModalLayer activeModal={homeState.activeModal} payload={homeState.modalPayload} settlement={null} onClose={() => dispatch(closeModal())} onContinue={() => dispatch(closeModal())} onConfirmReturn={() => dispatch(closeModal())} onResultConfirm={() => dispatch(closeModal())} />
    </PageShell>
  );
};

export default MineHomePage;
