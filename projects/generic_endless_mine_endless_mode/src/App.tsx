import React, { useEffect } from 'react';
import { AppRoute } from '@/constants/enum';
import { useAppActions } from '@/hooks/useAppActions';
import { useAppSelector } from '@/store';
import TitlePage from '@/pages/TitlePage';
import RunPage from '@/pages/RunPage';
import SettlementPage from '@/pages/SettlementPage';

const App: React.FC = () => {
  const route = useAppSelector((state) => state.app.route);
  const { loadHome } = useAppActions();

  useEffect(() => {
    void loadHome();
  }, [loadHome]);

  return (
    <div className="app">
      {route === AppRoute.Title && <TitlePage />}
      {route === AppRoute.Running && <RunPage />}
      {route === AppRoute.Settlement && <SettlementPage />}
    </div>
  );
};

export default App;
