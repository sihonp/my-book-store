import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    removeCategory(state, action) {
      state.categories.map((category) => {
        if (category.id === action.payload) {
          const nextCategory = state.categories.filter(
            (category) => category.id !== action.payload
          );
          state.categories = nextCategory;
        }
        localStorage.setItem("categories", JSON.stringify(state.categories));
        return state;
      });
    },
    updateCategory(state, action) {
      let objIndex = state.categories.findIndex((obj => obj.id === action.payload.id));
      state.categories[objIndex] = action.payload
      localStorage.setItem("categories", JSON.stringify(state.categories));
      return state
    },
  },
})

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions

export default categoriesSlice.reducer