import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: { 
    result: [],
   },
  reducers: {},
});

export const rootSliceAction = rootSlice.actions;
export const rootSliceReducer = rootSlice.reducer;