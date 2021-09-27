import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IScreenParamsState {
  isMobile: boolean;
  searchScreenYOffset: number;
  favoriteScreenYOffset: number;
  searchResultsViewType: string;
}

const initialState = {
  isMobile: false,
  searchScreenYOffset: 0,
  favoriteScreenYOffset: 0,
  searchResultsViewType: 'list',
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
    setSearchResultsViewType(state, action: PayloadAction<string>) {
      state.searchResultsViewType = action.payload;
    },
  },
});

export const {
  setIsMobile,
  setSearchScreenYOffset,
  setFavoriteScreenYOffset,
  setSearchResultsViewType,
} = screenParams.actions;
export default screenParams.reducer;
