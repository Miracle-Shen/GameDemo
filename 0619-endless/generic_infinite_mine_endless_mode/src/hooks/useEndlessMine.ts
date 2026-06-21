import { useCallback, useEffect, useRef } from 'react';
import { AppPage, IS_MOCK, ModalType, RunState, ToolType } from '@/constants';
import { getEndlessMineConfig, submitDigAction, submitSettleMine } from '@/apis';
import { EndlessMineGame } from '@/game/EndlessMineGame';
import type { MineCallbacks, ResourceType } from '@/game/types';
import { useAppDispatch, useAppSelector } from '@/store';
import { applyMainSettlement, closeModal, openModal, pushToast, setRoute, shiftToast } from '@/store/slices/appSlice';
import { resetMine, setBoard, setHarvest, setPreviewCells, setSettlement, updateMine } from '@/store/slices/mineSlice';

export const useEndlessMine = () => {
  const dispatch = useAppDispatch();
  const app = useAppSelector((state) => state.app);
  const mine = useAppSelector((state) => state.mine);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<EndlessMineGame | null>(null);
  const settleLockRef = useRef(false);
  const actionLockRef = useRef(false);
  const clientSeqRef = useRef(0);
  const harvestSlotRef = useRef<Partial<Record<ResourceType, HTMLDivElement | null>>>({});
  const mineRef = useRef(mine);

  useEffect(() => { mineRef.current = mine; }, [mine]);

  useEffect(() => {
    if (mine.runState !== RunState.StageUpPrompt && mine.runState !== RunState.RareUnlockToast) return undefined;
    const timer = window.setTimeout(() => dispatch(updateMine({ runState: RunState.Progressing })), 1200);
    return () => window.clearTimeout(timer);
  }, [dispatch, mine.runState]);

  useEffect(() => {
    if (!mine.runId || !canvasHostRef.current) return undefined;
    let alive = true;
    const callbacks: MineCallbacks = {
      onBoardChange: (board, nextRowPreview) => dispatch(setBoard({ board, nextRowPreview })),
      onDepthChange: (depth, depthStageId, stageProgressText) => dispatch(updateMine({ depth, depthStageId, stageProgressText })),
      onSupplyChange: (supplyValue, supplyMax) => dispatch(updateMine({ supplyValue, supplyMax })),
      onToolChange: (tools, selectedTool) => dispatch(updateMine({ tools, selectedTool })),
      onHarvestChange: (_delta, total) => dispatch(setHarvest(total)),
      getResourceTargetRect: (type) => harvestSlotRef.current[type]?.getBoundingClientRect() ?? null,
      onPreviewChange: (points) => dispatch(setPreviewCells(points)),
      onToast: (message) => dispatch(pushToast(message)),
      onBlocker: (title, content) => dispatch(openModal({ type: ModalType.Blocker, payload: { title, content } })),
      onRunStateChange: (runState) => dispatch(updateMine({ runState })),
      onGameOver: () => { void handleSettle('tools_depleted'); },
    };
    const game = new EndlessMineGame();
    gameRef.current = game;
    getEndlessMineConfig({ runId: mine.runId }).then(async (config) => {
      if (!alive || !canvasHostRef.current) return;
      await game.init(canvasHostRef.current, config, callbacks);
      game.start({ runId: mine.runId ?? 'dev-run', tools: mine.tools, depth: mine.depth, board: mine.board, nextRowPreview: mine.nextRowPreview, supplyValue: mine.supplyValue, supplyMax: mine.supplyMax });
    }).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : '矿井配置加载失败';
      dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: message } }));
    });
    return () => { alive = false; game.destroy(); gameRef.current = null; };
  }, [dispatch, mine.runId]);

  const handleSelectTool = useCallback((tool: ToolType) => {
    gameRef.current?.selectTool(tool);
  }, []);

  const syncServerPatch = useCallback(async (tool: ToolType, row: number, col: number) => {
    const current = mineRef.current;
    if (!current.runId) return;
    clientSeqRef.current += 1;
    try {
      const patch = await submitDigAction({ runId: current.runId, tool, target: { row, col }, clientSeq: clientSeqRef.current });
      // Mock mode is intentionally local-authoritative: EndlessMineGame has already applied the playable result.
      // Only real API mode treats submitDigAction() as an authoritative server correction patch.
      if (!IS_MOCK) {
        gameRef.current?.applyServerPatch(patch);
        dispatch(updateMine({ depth: patch.depth, depthStageId: patch.depthStageId, stageProgressText: patch.stageProgressText, supplyValue: patch.supplyValue, supplyMax: patch.supplyMax, tools: patch.tools, runState: patch.runState }));
        dispatch(setHarvest(patch.harvest));
        dispatch(setBoard({ board: patch.board, nextRowPreview: patch.nextRowPreview }));
        if (patch.toast) dispatch(pushToast(patch.toast));
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : '挖掘上报失败，本地结果已保留';
      dispatch(pushToast(message));
    }
  }, [dispatch]);

  const handleCellClick = useCallback((row: number, col: number) => {
    if (actionLockRef.current) return;
    actionLockRef.current = true;
    const selected = mineRef.current.selectedTool ?? ToolType.Pickaxe;
    const run = async () => {
      if (selected === ToolType.RowBomb || selected === ToolType.AreaBomb) await gameRef.current?.useBomb({ row, col });
      else await gameRef.current?.digCell({ row, col });
      await syncServerPatch(selected, row, col);
    };
    run().finally(() => { actionLockRef.current = false; });
  }, [syncServerPatch]);

  const handleCellHover = useCallback((row: number, col: number) => {
    gameRef.current?.hoverCell({ row, col });
  }, []);

  const handleCellLeave = useCallback(() => {
    gameRef.current?.clearBombPreview();
    dispatch(setPreviewCells([]));
  }, [dispatch]);

  const handleSettle = useCallback(async (reason: 'manual_exit' | 'tools_depleted' | 'return_confirm') => {
    const current = mineRef.current;
    if (!current.runId || settleLockRef.current) return;
    settleLockRef.current = true;
    dispatch(updateMine({ runState: reason === 'tools_depleted' ? RunState.ToolsDepleted : RunState.Settling }));
    try {
      const settlement = await submitSettleMine({ runId: current.runId, reason, clientSnapshot: { depth: current.depth, harvest: current.harvest } });
      dispatch(setSettlement(settlement));
      dispatch(applyMainSettlement(settlement.harvest));
      dispatch(openModal({ type: ModalType.Result }));
    } catch (error) {
      const message = error instanceof Error ? error.message : '结算失败';
      dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: message } }));
    } finally {
      settleLockRef.current = false;
    }
  }, [dispatch]);

  const handleExit = useCallback(() => { dispatch(updateMine({ runState: RunState.ManualExitRequested })); void handleSettle('manual_exit'); }, [dispatch, handleSettle]);
  const handleReturnClick = useCallback(() => { dispatch(updateMine({ runState: RunState.ReturnConfirm })); dispatch(openModal({ type: ModalType.ConfirmReturn })); }, [dispatch]);
  const handleConfirmReturn = useCallback(() => { dispatch(closeModal()); void handleSettle('return_confirm'); }, [dispatch, handleSettle]);
  const handleContinueDig = useCallback(() => { dispatch(closeModal()); dispatch(updateMine({ runState: RunState.Progressing })); }, [dispatch]);
  const handleResultConfirm = useCallback(() => { dispatch(closeModal()); dispatch(resetMine()); dispatch(setRoute(AppPage.MineHome)); }, [dispatch]);
  const handleToastDone = useCallback(() => { dispatch(shiftToast()); }, [dispatch]);
  const handleBackpack = useCallback(() => { dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: '背包满时按主系统规则处理' } })); }, [dispatch]);
  const handleCloseModal = useCallback(() => { dispatch(closeModal()); }, [dispatch]);
  const harvestSlotRefs: Record<ResourceType, (element: HTMLDivElement | null) => void> = {
    coin: (element) => { harvestSlotRef.current.coin = element; },
    ore: (element) => { harvestSlotRef.current.ore = element; },
    material: (element) => { harvestSlotRef.current.material = element; },
  };

  return { app, mine, canvasHostRef, harvestSlotRefs, handleSelectTool, handleCellClick, handleCellHover, handleCellLeave, handleExit, handleReturnClick, handleConfirmReturn, handleContinueDig, handleResultConfirm, handleToastDone, handleBackpack, handleCloseModal };
};
