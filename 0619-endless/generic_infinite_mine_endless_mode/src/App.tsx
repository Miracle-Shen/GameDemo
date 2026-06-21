import React from 'react';
import { AppPage } from '@/constants';
import { useAppSelector } from '@/store';
import MineHomePage from '@/pages/MineHomePage';
import EndlessMinePage from '@/pages/EndlessMinePage';

const App: React.FC = () => {
  const route = useAppSelector((state) => state.app.route);
  if (route === AppPage.EndlessMine) return <EndlessMinePage />;
  return <MineHomePage />;
};

export default App;
