import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/films';

const store = configureStore({
  reducer: filmsReducer,
});

export default store;
