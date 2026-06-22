import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRoute } from '@/constants/enum';

export interface AppState {
  route: AppRoute;
  isLoading: boolean;
  toastMessage: string;
  toastSeq: number;
  inputLocked: boolean;
}

const initialState: AppState = {
  route: AppRoute.Title,
  isLoading: false,
  toastMessage: '',
  toastSeq: 0,
  inputLocked: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRoute(state, action: PayloadAction<AppRoute>) {
      state.route = action.payload;
    },
    updateApp(state, action: PayloadAction<Partial<AppState>>) {
      Object.assign(state, action.payload);
    },
    showToast(state, action: PayloadAction<string>) {
      state.toastMessage = action.payload;
      state.toastSeq += 1;
    },
    clearToast(state) {
      state.toastMessage = '';
    },
  },
});

export const { setRoute, updateApp, showToast, clearToast } = appSlice.actions;
export default appSlice.reducer;
