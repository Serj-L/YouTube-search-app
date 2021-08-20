import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  username: string;
  isLoggedIn: boolean;
}

const initialState = {
  username: '',
  isLoggedIn: !!localStorage.getItem('authToken'),
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
