import { configureStore } from '@reduxjs/toolkit';

import youtubeSeach from './youtubeSearchSlice';
import user from './userSlice';

export const store = configureStore({
  reducer: {
    youtubeSeach,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
