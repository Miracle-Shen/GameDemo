import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { initViewport } from './utils';
import { AppRoute } from './constants/enum';
import { setRoute } from './store/slices/appSlice';
import { hydrateDevRun, setSettlement } from './store/slices/mineRunSlice';
import App from './App';
import './styles/global.less';

initViewport();

if (import.meta.env.DEV) {
  const devPage = new URL(location.href).searchParams.get('__devPage');
  if (devPage) {
    if (devPage === AppRoute.Title || devPage === 'title') {
      store.dispatch(setRoute(AppRoute.Title));
    }
    if (devPage === AppRoute.Running || devPage === 'run' || devPage === 'running' || devPage === 'endless_run') {
      store.dispatch(hydrateDevRun());
      store.dispatch(setRoute(AppRoute.Running));
    }
    if (devPage === AppRoute.Settlement || devPage === 'settlement') {
      store.dispatch(hydrateDevRun());
      store.dispatch(setSettlement({
        finalDepth: 128,
        finalBiomeName: '浅海',
        runLoot: { gold: 25680, ore: 860, material: 2340, openedChests: 6 },
        reason: 'manual',
      }));
      store.dispatch(setRoute(AppRoute.Settlement));
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
