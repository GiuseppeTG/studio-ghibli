import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/films';

const store = configureStore({
  reducer: {
    films: filmsReducer,
  },
});

export default store;
