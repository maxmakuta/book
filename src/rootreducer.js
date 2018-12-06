import { combineReducers } from "redux";
import booksReducer from "./booksreducer";
import curentBookReducer from "./currentbook";

let rootReducer = combineReducers({
	books: booksReducer,
	currentBook: curentBookReducer,
});

export default rootReducer;