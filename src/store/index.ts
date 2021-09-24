import { configureStore } from '@reduxjs/toolkit';

import youtubeSearch from './youtubeSearchSlice';
import user from './userSlice';
import favorites from './favoritesSlice';
import screenParams from './screenParamsSlice';

export const store = configureStore({
  reducer: {
    youtubeSearch,
    user,
    favorites,
    screenParams,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
