import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from '../redux/categories/categoriesSlice'
import booksSlice from '../redux/books/booksSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    books: booksSlice,
  },
});