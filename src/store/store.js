import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import matchesReducer from './matchesSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    matches: matchesReducer,
  },
});

export default store;
