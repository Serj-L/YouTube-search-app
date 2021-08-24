import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  username: string;
  isLoggedIn: boolean;
  userId: string;
}

const initialState = {
  userId: localStorage.getItem('authToken') || '',
  isLoggedIn: !!localStorage.getItem('authToken'),
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUserId, setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
