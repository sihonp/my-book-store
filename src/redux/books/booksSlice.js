import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: localStorage.getItem("books")
    ? JSON.parse(localStorage.getItem("books"))
    : [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks(state, action) {
      state.books.push(action.payload);
      localStorage.setItem("books", JSON.stringify(state.books));
    },
    removeBook(state, action) {
      state.books.map((book) => {
        if (book.id === action.payload) {
          const nextBook = state.books.filter(
            (book) => book.id !== action.payload
          );
          state.books = nextBook;
        }
        localStorage.setItem("books", JSON.stringify(state.books));
        return state;
      });
    },
    updateBook(state, action) {
      let objIndex = state.books.findIndex((book => book.id === action.payload.id));
      state.books[objIndex] = action.payload
      localStorage.setItem("books", JSON.stringify(state.books));
    },

    getBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBooks, getBooks, removeBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;