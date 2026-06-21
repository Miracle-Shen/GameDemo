import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { AppPage, ModalType } from '@/constants';
import type { Harvest } from '@/game/types';

type ToastMessage = { id: string; message: string };

export interface AppState {
  route: AppPage;
  loading: boolean;
  homeEnergy: number;
  homeCoin: number;
  premiumCurrency: number;
  mainOreBag: Record<string, number>;
  mainMaterialBag: Record<string, number>;
  activeModal: ModalType | null;
  modalPayload: Record<string, unknown> | null;
  toastQueue: ToastMessage[];
  entryLocked: boolean;
}

const initialState: AppState = {
  route: AppPage.MineHome,
  loading: false,
  homeEnergy: 0,
  homeCoin: 0,
  premiumCurrency: 0,
  mainOreBag: {},
  mainMaterialBag: {},
  activeModal: null,
  modalPayload: null,
  toastQueue: [],
  entryLocked: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateApp: (state, action: PayloadAction<Partial<AppState>>) => ({ ...state, ...action.payload }),
    applyMainSettlement: (state, action: PayloadAction<Harvest>) => {
      state.homeCoin += action.payload.coin;
      Object.entries(action.payload.ores).forEach(([key, value]) => {
        state.mainOreBag[key] = (state.mainOreBag[key] ?? 0) + value;
      });
      Object.entries(action.payload.materials).forEach(([key, value]) => {
        state.mainMaterialBag[key] = (state.mainMaterialBag[key] ?? 0) + value;
      });
    },
    setRoute: (state, action: PayloadAction<AppPage>) => { state.route = action.payload; },
    openModal: (state, action: PayloadAction<{ type: ModalType; payload?: Record<string, unknown> }>) => { state.activeModal = action.payload.type; state.modalPayload = action.payload.payload ?? null; },
    closeModal: (state) => { state.activeModal = null; state.modalPayload = null; },
    pushToast: (state, action: PayloadAction<string>) => { state.toastQueue.push({ id: `${Date.now()}-${state.toastQueue.length}`, message: action.payload }); },
    shiftToast: (state) => { state.toastQueue.shift(); },
  },
});

export const { updateApp, applyMainSettlement, setRoute, openModal, closeModal, pushToast, shiftToast } = appSlice.actions;
export default appSlice.reducer;
