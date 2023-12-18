import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IArtwork} from '../../interfaces/interfaces';

export interface FavoritesState {
  count: number;
  artworks: IArtwork[];
}

const initialState: FavoritesState = {
  count: 0,
  artworks: [],
};

export const FavoritesSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    cleanAllArtworks: state => {
      state.count = 0;
      state.artworks = [];
    },
    setArtworks: (state, action: PayloadAction<IArtwork>) => {
      const has = state.artworks.find(
        (a: IArtwork) => a.id === action.payload.id,
      );
      if (has) {
        const filteredArtwork = state.artworks.filter(
          (a: IArtwork) => a.id !== action.payload.id,
        );
        state.artworks = filteredArtwork;
        state.count = filteredArtwork.length;
      } else {
        state.artworks.push(action.payload);
        state.count = state.artworks.length;
      }
    },
  },
});

export const {cleanAllArtworks, setArtworks} = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
