import { useCallback, useRef } from 'react';
import { getHomePage, submitRunSettlement, submitStartRun } from '@/apis';
import { AppRoute, SettlementReason } from '@/constants/enum';
import { useAppDispatch, useAppSelector } from '@/store';
import { setRoute, showToast, updateApp } from '@/store/slices/appSlice';
import { resetRun, setSettlement, SettlementSnapshot } from '@/store/slices/mineRunSlice';

export const useAppActions = () => {
  const dispatch = useAppDispatch();
  const mineRun = useAppSelector((state) => state.mineRun);
  const lockRef = useRef(false);

  const loadHome = useCallback(async () => {
    try {
      await getHomePage();
    } catch (error) {
      dispatch(showToast(error instanceof Error ? error.message : '加载失败'));
    }
  }, [dispatch]);

  const startNewRun = useCallback(async () => {
    if (lockRef.current) return;
    lockRef.current = true;
    dispatch(updateApp({ isLoading: true, inputLocked: true }));
    try {
      const result = await submitStartRun({ startEnergyCost: 1 });
      dispatch(resetRun());
      dispatch(updateApp({ isLoading: false, inputLocked: false }));
      dispatch(setRoute(AppRoute.Running));
      if (result.startEnergyCost > 0) dispatch(showToast(`消耗体力 ${result.startEnergyCost}`));
    } catch (error) {
      dispatch(updateApp({ isLoading: false, inputLocked: false }));
      dispatch(showToast(error instanceof Error ? error.message : '开始失败'));
    } finally {
      lockRef.current = false;
    }
  }, [dispatch]);

  const settleAndShow = useCallback(async (reason: SettlementReason, finalSnapshot?: SettlementSnapshot) => {
    if (lockRef.current) return;
    lockRef.current = true;
    const snapshot = finalSnapshot ?? { finalDepth: mineRun.currentDepth, finalBiomeName: mineRun.currentBiomeName, runLoot: mineRun.runLoot, reason };
    dispatch(setSettlement(snapshot));
    dispatch(updateApp({ inputLocked: true }));
    try {
      await submitRunSettlement(snapshot);
    } catch (error) {
      dispatch(showToast(error instanceof Error ? error.message : '结算提交失败，已本地结算'));
    } finally {
      window.setTimeout(() => {
        dispatch(updateApp({ inputLocked: false }));
        dispatch(setRoute(AppRoute.Settlement));
        lockRef.current = false;
      }, 600);
    }
  }, [dispatch, mineRun.currentDepth, mineRun.currentBiomeName, mineRun.runLoot]);

  const replay = useCallback(async () => {
    await startNewRun();
  }, [startNewRun]);

  const goTitle = useCallback(() => {
    dispatch(setRoute(AppRoute.Title));
  }, [dispatch]);

  return { loadHome, startNewRun, settleAndShow, replay, goTitle };
};
