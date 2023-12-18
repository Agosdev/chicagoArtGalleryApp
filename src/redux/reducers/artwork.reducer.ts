import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IArtwork} from '../../interfaces/interfaces';

export interface ArtworkState {
  artwork: IArtwork;
}

const initialState: ArtworkState = {
  artwork: {
    id: 0,
    api_model: '',
    api_link: '',
    is_boosted: false,
    title: '',
    alt_titles: null,
    artist_title: '',
    thumbnail: {
      lqip: '',
      width: 0,
      height: 0,
      alt_text: '',
      place_of_origin: '',
      description: '',
      dimensions: '',
    },
    credit_line: '',
    description: '',
    publication_history: '',
    exhibition_history: '',
    gallery_title: '',
    artwork_type_title: '',
    department_title: '',
    artist_id: 0,
    timestamp: '',
  },
};

export const ArtworkSlice = createSlice({
  name: 'Artwork',
  initialState,
  reducers: {
    setArtworkDetail: (state, action: PayloadAction<IArtwork>) => {
      state.artwork = action.payload;
    },
  },
});

export const {setArtworkDetail} = ArtworkSlice.actions;

export default ArtworkSlice.reducer;
