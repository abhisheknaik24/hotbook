import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../slices/category/categorySlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
