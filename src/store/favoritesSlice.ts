import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';

import { getFavoritesFromDb, saveFavoritesToDb } from '../api/firebase';

import { IFavoritesInput, IFavoritesFirebase } from '../api/types';

interface IFavoritesSlice {
  favorites: IFavoritesInput[];
  updateDb: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState = {
  favorites: [],
  updateDb: false,
  isLoading: false,
  isError: false,
} as IFavoritesSlice;

export const saveFavoritesToDbThunk = createAsyncThunk(
  'user/saveFavoritesToDbThunk',
  async (favorites: IFavoritesFirebase, { rejectWithValue }) => {
    try {
      const response = await saveFavoritesToDb(favorites);

      return response;
    } catch(err: any) {
      return rejectWithValue(err.code);
    }
  },
);

export const getFavoritesFromDbThunk = createAsyncThunk(
  'user/getFavoritesFromDbThunk',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await getFavoritesFromDb(userId);

      return response;
    } catch(err: any) {
      return rejectWithValue(err.code);
    }
  },
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<IFavoritesInput>) {
      const { query, title, id, order, resultsPerPage } = action.payload;
      const favorite: IFavoritesInput = {
        query,
        title,
        id,
        order,
        resultsPerPage,
      };

      state.favorites.push(favorite);
      state.updateDb = true;
    },
    deleteFavoriteItem(state, action: PayloadAction<{ id: string }>) {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
      state.updateDb = true;
    },
    editFavoriteItem(state, action: PayloadAction<IFavoritesInput>) {
      const { query, title, id, order, resultsPerPage } = action.payload;
      const favorite: IFavoritesInput = {
        query,
        title,
        id,
        order,
        resultsPerPage,
      };

      state.favorites = state.favorites.map(item => {
        return item.id === favorite.id ? favorite : item;
      });
      state.updateDb = true;
    },
    setFavoritesToInitialState(state) {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(saveFavoritesToDbThunk.pending, (state) => {
      state.isLoading = true;
      if (state.isError) state.isError = false;
    });
    builder.addCase(saveFavoritesToDbThunk.fulfilled, (state) => {
      message.success('Раздел "Избранное" успешно обновлен.');
      state.isLoading = false;
      if (state.updateDb) state.updateDb = false;
    });
    builder.addCase(saveFavoritesToDbThunk.rejected, (state, action) => {
      message.error(`Ошибка: ${action.payload}`);
      state.isLoading = false;
      state.isError = true;
      if (state.updateDb) state.updateDb = false;
    });
    builder.addCase(getFavoritesFromDbThunk.pending, (state) => {
      state.isLoading = true;
      if (state.isError) state.isError = false;
    });
    builder.addCase(getFavoritesFromDbThunk.fulfilled, (state, action) => {
      const payload = action.payload as IFavoritesSlice;

      if (payload) state.favorites = payload.favorites;
      state.isLoading = false;
    });
    builder.addCase(getFavoritesFromDbThunk.rejected, (state, action) => {
      message.error(`Ошибка: ${action.payload}`);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setFavorites, deleteFavoriteItem, editFavoriteItem, setFavoritesToInitialState } = favoritesSlice.actions;
export default favoritesSlice.reducer;
