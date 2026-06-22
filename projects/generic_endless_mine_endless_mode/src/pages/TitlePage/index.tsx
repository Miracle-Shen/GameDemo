import React, { useEffect } from 'react';
import { Abs, PageShell } from '@/components/Stage';
import { IMAGE_ASSETS } from '@/data/assetKeys';
import { useAppActions } from '@/hooks/useAppActions';
import { useAppSelector } from '@/store';
import './index.750.less';

const TitlePage: React.FC = () => {
  const { loadHome, startNewRun } = useAppActions();
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    void loadHome();
  }, [loadHome]);

  return (
    <PageShell bg={IMAGE_ASSETS.titleBg} className="title-page">
      <Abs box={[125, 1015, 503, 185]} z={10} anchor="bottom" className={`title-page__start ${isLoading ? 'is-loading' : ''}`} onClick={startNewRun}>
        <img src={`./assets/imgs/${IMAGE_ASSETS.enterMine}`} alt="进入无尽矿井" />
      </Abs>
    </PageShell>
  );
};

export default TitlePage;
