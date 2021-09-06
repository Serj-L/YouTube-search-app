import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { getUserId } from '../api/firebaseAuth';
import { IUserLoginInput, IFirebaseLoginResponse } from '../api/types';

export const getUserIdThunk = createAsyncThunk(
  'user/getUserId',
  async (data: IUserLoginInput, { rejectWithValue }) => {
    try {
      const response = await getUserId(data);

      return response;
    } catch(err) {
      return rejectWithValue(err.code);
    }
  },
);

interface IUserState {
  userId: string;
}

const initialState = {
  userId: localStorage.getItem('authToken') || '',
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserIdThunk.fulfilled, (state, action) => {
      const payload = action.payload as IFirebaseLoginResponse;

      state.userId = payload.uid;
      localStorage.setItem('authToken', payload.uid);
    });
    builder.addCase(getUserIdThunk.rejected, (state, action) => {
      state.userId = '';
      message.error(`Ошибка: ${action.payload}`);
    });
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
