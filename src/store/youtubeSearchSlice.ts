import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IYoutubeSearchState {
  title: string;
}

const initialState = {
  title: '',
} as IYoutubeSearchState;

const youtubeSearchSlice = createSlice({
  name: 'youtubeSearch',
  initialState,
  reducers: {
    changeTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { changeTitle } = youtubeSearchSlice.actions;
export default youtubeSearchSlice.reducer;
