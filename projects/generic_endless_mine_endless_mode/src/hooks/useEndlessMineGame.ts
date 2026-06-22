import { useCallback, useEffect, useRef } from 'react';
import { BOARD_COLS, BOARD_ROWS, INPUT_DEBOUNCE_MS } from '@/constants/game';
import { ToolType } from '@/constants/enum';
import { EndlessMineGame } from '@/game/EndlessMineGame';
import { MineGameCallbacks } from '@/game/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { showToast } from '@/store/slices/appSlice';
import { addLoot, updateRun } from '@/store/slices/mineRunSlice';
import { useAppActions } from './useAppActions';

export const useEndlessMineGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<EndlessMineGame | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const latestRunState = useAppSelector((state) => state.mineRun);
  const latestRunStateRef = useRef(latestRunState);
  const dispatch = useAppDispatch();
  const { settleAndShow } = useAppActions();

  useEffect(() => {
    latestRunStateRef.current = latestRunState;
  }, [latestRunState]);

  const callbacksRef = useRef<MineGameCallbacks>({
    onStatePatch: (patch) => dispatch(updateRun(patch)),
    onLootChange: (loot) => dispatch(addLoot(loot)),
    onToast: (message) => dispatch(showToast(message)),
    onSettle: (reason, finalSnapshot) => void settleAndShow(reason, finalSnapshot),
  });

  useEffect(() => {
    callbacksRef.current = {
      onStatePatch: (patch) => dispatch(updateRun(patch)),
      onLootChange: (loot) => dispatch(addLoot(loot)),
      onToast: (message) => dispatch(showToast(message)),
      onSettle: (reason, finalSnapshot) => void settleAndShow(reason, finalSnapshot),
    };
  }, [dispatch, settleAndShow]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    let disposed = false;
    const game = new EndlessMineGame();
    gameRef.current = game;
    void game.init(canvas, { cols: BOARD_COLS, rows: BOARD_ROWS, inputDebounceMs: INPUT_DEBOUNCE_MS }, callbacksRef.current).then(() => {
      if (disposed) return;
      game.startRun(latestRunStateRef.current);
    });
    resizeObserverRef.current = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect;
      if (rect) game.resize(rect.width, rect.height);
    });
    resizeObserverRef.current.observe(canvas);
    return () => {
      disposed = true;
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
      game.destroy();
      gameRef.current = null;
    };
  }, []);

  const selectTool = useCallback((tool: ToolType) => {
    gameRef.current?.selectTool(tool);
  }, []);

  const returnToCamp = useCallback(() => {
    gameRef.current?.requestReturnToCamp();
  }, []);

  const resizeGame = useCallback(() => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) gameRef.current?.resize(rect.width, rect.height);
  }, []);

  return { canvasRef, selectTool, returnToCamp, resizeGame };
};
