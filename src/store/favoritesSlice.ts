import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IFavoritesInput } from '../api/types';

interface IFavoritesSlice {
  favorites: IFavoritesInput[];
}

interface IFavoritesPayload extends IFavoritesInput {
  userId: string;
}

const initialState = {
  favorites: [],
} as IFavoritesSlice;

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites(state, action: PayloadAction<IFavoritesPayload>) {
      const { query, title, id, order, resultsPerPage } = action.payload;
      const favorite: IFavoritesInput = {
        query,
        title,
        id,
        order,
        resultsPerPage,
      };

      state.favorites.push(favorite);
      localStorage.setItem(action.payload.userId, JSON.stringify(state.favorites));
    },
    setSavedFavorites(state, action: PayloadAction<IFavoritesInput[]>) {
      state.favorites = action.payload;
    },
    deleteFavoriteItem(state, action: PayloadAction<{ id: string, userId: string }>) {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
      localStorage.setItem(action.payload.userId, JSON.stringify(state.favorites));
    },
    editFavoriteItem(state, action: PayloadAction<IFavoritesPayload>) {
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

      localStorage.setItem(action.payload.userId, JSON.stringify(state.favorites));
    },
  },
});

export const { setFavorites, setSavedFavorites, deleteFavoriteItem, editFavoriteItem } = favoritesSlice.actions;
export default favoritesSlice.reducer;
