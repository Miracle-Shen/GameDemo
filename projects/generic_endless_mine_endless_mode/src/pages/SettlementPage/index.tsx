import React from 'react';
import { Abs, PageShell } from '@/components/Stage';
import { IMAGE_ASSETS } from '@/data/assetKeys';
import { useAppActions } from '@/hooks/useAppActions';
import { useAppSelector } from '@/store';
import './index.750.less';

const SettlementPage: React.FC = () => {
  const snapshot = useAppSelector((state) => state.mineRun.finalSnapshot);
  const fallback = useAppSelector((state) => state.mineRun);
  const { replay, goTitle } = useAppActions();
  const data = snapshot ?? { finalDepth: fallback.currentDepth, finalBiomeName: fallback.currentBiomeName, runLoot: fallback.runLoot, reason: 'manual' as const };

  return (
    <PageShell bg={IMAGE_ASSETS.surfaceBg} className="settlement-page">
      <Abs box={[76, 316, 599, 675]} z={10} className="settlement-page__panel">
        <img src={`./assets/imgs/${IMAGE_ASSETS.resultPanel}`} alt="" />
        <div className="settlement-page__row settlement-page__row--1">最深深度　{data.finalDepth}m</div>
        <div className="settlement-page__row settlement-page__row--2 settlement-page__row--red">深度类型　{data.finalBiomeName}</div>
        <div className="settlement-page__row settlement-page__row--3">获得金币　{data.runLoot.gold.toLocaleString()}</div>
        <div className="settlement-page__row settlement-page__row--4">获得宝石　{data.runLoot.material.toLocaleString()}</div>
        <div className="settlement-page__row settlement-page__row--5">获得矿石　{data.runLoot.ore.toLocaleString()}</div>
        <div className="settlement-page__row settlement-page__row--6">开启宝箱　{data.runLoot.openedChests}</div>
        <div className="settlement-page__reason">本局因{data.reason === 'manual' ? '收队返场' : '工具耗尽'}结束，数据已结算</div>
      </Abs>
      <Abs box={[107, 1022, 265, 125]} z={10} anchor="bottom" className="settlement-page__button" onClick={replay}>
        <img src={`./assets/imgs/${IMAGE_ASSETS.replay}`} alt="再来一局" />
      </Abs>
      <Abs box={[396, 1022, 258, 125]} z={10} anchor="bottom" className="settlement-page__button" onClick={goTitle}>
        <img src={`./assets/imgs/${IMAGE_ASSETS.backTitle}`} alt="返回标题" />
      </Abs>
    </PageShell>
  );
};

export default SettlementPage;
