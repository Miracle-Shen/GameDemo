import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { initViewport } from './utils';
import { AppPage, ModalType, ToolType } from './constants';
import { openModal, setRoute, updateApp } from './store/slices/appSlice';
import { initRun, setSettlement } from './store/slices/mineSlice';
import { BoardGenerator } from './game/BoardGenerator';
import { depthStages } from './data/depthStages';
import App from './App';
import './styles/global.less';

// 移动端固定画布适配：首屏渲染前注入 --scene-scale / --scene-vh（见 src/styles/page-common.less）
initViewport();

// ────────────────────────────────────────────────────────────────────────────
// 开发态页面强切：?__devPage=xxx
// ────────────────────────────────────────────────────────────────────────────
// 配合 {pluginRoot}/scripts/runtime-check.mjs 逐页面巡检运行时错误。
// 只在 Vite DEV 模式生效，生产构建会被 Vite 摇树掉，不会进入 dist。
//
// ⚠️ Developer 在 Step 3 搭建基础层时，必须按该项目的 appPage 枚举和 store 结构
//    填充下面的分支逻辑，覆盖所有 PRD 页面：
//      1. 对需要前置数据才能渲染的页面（如 GamePage 需要 currentLevelId），
//         dispatch 默认 mock 数据
//      2. 最后统一 dispatch(setAppPage(devPage as AppPage))
//
// 示例（按实际项目的 slice / action 替换）:
//   if (devPage === 'game') {
//     store.dispatch(levelSlice.actions.setCurrentLevelId(1));
//   }
//   if (devPage === 'equipment') {
//     store.dispatch(equipSlice.actions.setSelectedSlot('weapon'));
//   }
//   store.dispatch(appSlice.actions.setAppPage(devPage as AppPage));
//
// 未覆盖的 devPage 值会被忽略（stays on default page），巡检会发现白屏，属预期。
if (import.meta.env.DEV) {
  const devPage = new URL(location.href).searchParams.get('__devPage');
  if (devPage) {
    if (devPage === AppPage.MineHome || devPage === 'mine_home') {
      store.dispatch(updateApp({ route: AppPage.MineHome, homeEnergy: 30, homeCoin: 128, premiumCurrency: 6 }));
      store.dispatch(setRoute(AppPage.MineHome));
    }
    if (devPage === AppPage.EndlessMine || devPage === 'endless_mine' || devPage === 'modal_confirm_return' || devPage === 'modal_result' || devPage === 'modal_blocker') {
      const generator = new BoardGenerator({ depthStages });
      const board = generator.generateInitialBoard(1);
      store.dispatch(updateApp({ route: AppPage.EndlessMine, homeEnergy: 29, homeCoin: 128, premiumCurrency: 6 }));
      store.dispatch(initRun({
        runId: 'dev-run',
        tools: { [ToolType.Pickaxe]: 20, [ToolType.RowBomb]: 8, [ToolType.AreaBomb]: 3 },
        depth: 128,
        board,
        nextRowPreview: generator.generateNextRow(134, board),
        supplyValue: 60,
        supplyMax: 100,
      }));
      if (devPage === 'modal_confirm_return') store.dispatch(openModal({ type: ModalType.ConfirmReturn }));
      if (devPage === 'modal_blocker') store.dispatch(openModal({ type: ModalType.Blocker, payload: { title: '提示', content: '体力不足，无法继续操作' } }));
      if (devPage === 'modal_result') {
        store.dispatch(setSettlement({ runId: 'dev-run', depth: 128, reason: 'manual_exit', harvest: { coin: 128, ores: { ore_lapis: 6 }, materials: { stone: 3 } } }));
        store.dispatch(openModal({ type: ModalType.Result }));
      }
      store.dispatch(setRoute(AppPage.EndlessMine));
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
