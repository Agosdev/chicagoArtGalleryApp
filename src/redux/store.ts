import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './reducers/favorites.reducer';
import {artworkApi} from '../services/getArtwork.services';
import {setupListeners} from '@reduxjs/toolkit/query';
import artworkReducer from './reducers/artwork.reducer';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedReducer,
    artwork: artworkReducer,
    [artworkApi.reducerPath]: artworkApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(artworkApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
