import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../reducers/itemReducer';
import themeReducer from '../reducers/themeReducer';

const store = configureStore({
  reducer: {
    items: itemReducer,
    theme: themeReducer,
  },
});

export default store;