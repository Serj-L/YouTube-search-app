import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { detectMobile } from '../components/utils/utils';

interface IScreenParamsState {
  isMobile: boolean;
  searchScreenYOffset: number;
  favoriteScreenYOffset: number;
  searchResultsViewType: string;
}

const initialState = {
  isMobile: detectMobile(),
  searchScreenYOffset: 0,
  favoriteScreenYOffset: 0,
  searchResultsViewType: 'list',
} as IScreenParamsState;

const screenParams = createSlice({
  name: 'screenParams',
  initialState,
  reducers: {
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
  setSearchScreenYOffset,
  setFavoriteScreenYOffset,
  setSearchResultsViewType,
} = screenParams.actions;
export default screenParams.reducer;
