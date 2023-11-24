import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootSliceReducer } from "./rootSlice";

const reducers = combineReducers({
    root: rootSliceReducer
})

export const store = configureStore({
    reducer: reducers
})