import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './films/films';
import peopleReducer from './people/people';

const store = configureStore({
  reducer: {
    films: filmsReducer,
    people: peopleReducer,
  },
});

export default store;
