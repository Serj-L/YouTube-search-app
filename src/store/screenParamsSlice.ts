import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IScreenParamsState {
  isMobile: boolean;
  searchScreenYOffset: number;
  favoriteScreenYOffset: number;
}

const initialState = {
  isMobile: false,
  searchScreenYOffset: 0,
  favoriteScreenYOffset: 0,
} as IScreenParamsState;

const screenParams = createSlice({
  name: 'screenParams',
  initialState,
  reducers: {
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
    setSearchScreenYOffset(state, action: PayloadAction<number>) {
      state.searchScreenYOffset = action.payload;
    },
    setFavoriteScreenYOffset(state, action: PayloadAction<number>) {
      state.favoriteScreenYOffset = action.payload;
    },
  },
});

export const { setIsMobile, setSearchScreenYOffset, setFavoriteScreenYOffset } = screenParams.actions;
export default screenParams.reducer;
