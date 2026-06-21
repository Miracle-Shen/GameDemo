import { useCallback, useEffect, useRef } from 'react';
import { ENTRY_COST_ENERGY, AppPage, ModalType } from '@/constants';
import { getMineHome, getPendingMineRun, submitEnterEndlessMine } from '@/apis';
import { useAppDispatch, useAppSelector } from '@/store';
import { openModal, pushToast, setRoute, updateApp } from '@/store/slices/appSlice';
import { initRun, setHarvest } from '@/store/slices/mineSlice';

export const useMineHome = () => {
  const dispatch = useAppDispatch();
  const homeState = useAppSelector((state) => state.app);
  const entryLockRef = useRef(false);

  useEffect(() => {
    let alive = true;
    getMineHome().then((data) => {
      if (alive) dispatch(updateApp(data));
    }).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : '主页数据加载失败';
      dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: message } }));
    });
    getPendingMineRun().then((pending) => {
      if (!alive || !pending?.recoverable || !pending.snapshot) return;
      dispatch(initRun(pending.snapshot));
      if (pending.unsettledHarvest) dispatch(setHarvest(pending.unsettledHarvest));
      dispatch(pushToast('已恢复未结算矿井收益'));
      dispatch(setRoute(AppPage.EndlessMine));
    }).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : '未结算收益查询失败';
      dispatch(pushToast(message));
    });
    return () => { alive = false; };
  }, [dispatch]);

  const handleEnterMine = useCallback(async () => {
    if (entryLockRef.current) return;
    if (homeState.homeEnergy < ENTRY_COST_ENERGY) {
      dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: '体力不足，无法继续操作' } }));
      return;
    }
    entryLockRef.current = true;
    dispatch(updateApp({ loading: true, entryLocked: true }));
    try {
      const data = await submitEnterEndlessMine({ costEnergy: 1 });
      dispatch(initRun(data));
      dispatch(updateApp({ homeEnergy: homeState.homeEnergy - ENTRY_COST_ENERGY }));
      dispatch(setRoute(AppPage.EndlessMine));
    } catch (error) {
      const message = error instanceof Error ? error.message : '进入矿井失败';
      dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: message } }));
    } finally {
      entryLockRef.current = false;
      dispatch(updateApp({ loading: false, entryLocked: false }));
    }
  }, [dispatch, homeState.homeEnergy]);

  return { homeState, handleEnterMine };
};
