import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'amazing-views',
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
