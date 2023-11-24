import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookSliceReducer } from "./slices/bookSlice";

const reducers = combineReducers({
    book: bookSliceReducer
})

export const store = configureStore({
    reducer: reducers
})