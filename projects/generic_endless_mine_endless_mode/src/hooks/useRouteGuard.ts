import { RunStatus } from '@/constants/enum';
import { useAppSelector } from '@/store';

export const useRouteGuard = () => {
  const inputLocked = useAppSelector((state) => state.app.inputLocked);
  const runStatus = useAppSelector((state) => state.mineRun.runStatus);
  return { canInteract: !inputLocked && runStatus === RunStatus.Running };
};
