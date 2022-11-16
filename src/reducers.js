import { combineReducers } from "redux";
import authorsReducer from "./features/authors/authorsSlice.js";
import booksReducer from "./features/books/booksSlice.js";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;