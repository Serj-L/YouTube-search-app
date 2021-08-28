import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRouteState {
  currentRoute: string;
}

const initialState = {
  currentRoute: '',
} as IRouteState;

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setCurrentRoute(state, action: PayloadAction<string>) {
      state.currentRoute = action.payload;
    },
  },
});

export const { setCurrentRoute } = routeSlice.actions;
export default routeSlice.reducer;
