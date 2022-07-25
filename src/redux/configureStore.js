import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/films';
import charactersReducer from './characters/characters';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    characters: charactersReducer,
  },
});

export default store;
