import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { userAuth } from '../api/firebase';
import { IUserLoginInput, IFirebaseLoginResponse } from '../api/types';

interface IUserState {
  userId: string;
  isMobile: boolean;
}

const initialState = {
  userId: localStorage.getItem('authToken') || '',
  isMobile: false,
} as IUserState;

export const userAuthThunk = createAsyncThunk(
  'user/userAuthThunk',
  async (data: IUserLoginInput, { rejectWithValue }) => {
    try {
      const response = await userAuth(data);

      return response;
    } catch(err: any) {
      return rejectWithValue(err.code);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload;
    },
    setIsMobile(state, action: PayloadAction<boolean>) {
      state.isMobile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuthThunk.fulfilled, (state, action) => {
      const payload = action.payload as IFirebaseLoginResponse;

      state.userId = payload.uid;
      localStorage.setItem('authToken', payload.uid);
    });
    builder.addCase(userAuthThunk.rejected, (state, action) => {
      state.userId = '';
      message.error(`Ошибка: ${action.payload}`);
    });
  },
});

export const { setUserId, setIsMobile } = userSlice.actions;
export default userSlice.reducer;
