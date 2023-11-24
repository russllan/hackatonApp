import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const getFilial = createAsyncThunk("filial", async () => {
  const res = await Api.getFilial();
  console.log(res.data);
  return res.data;
});

export const getTypeOperation = createAsyncThunk("operation", async () => {
  const res = await Api.getTypeOperation();
  console.log(res.data);
  return res.data;
});

export const postBook = createAsyncThunk("book", async (data) => {
  const res = await Api.postBook(data);
  console.log(res.data);
  return res.data;
});

const initialState = {
  filial: {
    isLoading: false,
    result: [],
    error: false,
  },
  typeOperation: {
    isLoading: false,
    result: [],
    error: false,
  },
  Book: {
    isLoading: false,
    result: [],
    error: false,
  },
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilial.fulfilled, (state, action) => {
      state.filial.isLoading = false;
      state.filial.error = false;
      state.filial.result = action.payload;
    });
    builder.addCase(getFilial.pending, (state) => {
      state.filial.isLoading = true;
      state.filial.error = false;
    });
    builder.addCase(getFilial.rejected, (state) => {
      state.filial.isLoading = false;
      state.filial.error = true;
    });

    builder.addCase(getTypeOperation.fulfilled, (state, action) => {
      state.typeOperation.isLoading = false;
      state.typeOperation.error = false;
      state.typeOperation.result = action.payload;
    });
    builder.addCase(getTypeOperation.pending, (state) => {
      state.typeOperation.isLoading = true;
      state.typeOperation.error = false;
    });
    builder.addCase(getTypeOperation.rejected, (state) => {
      state.typeOperation.isLoading = false;
      state.typeOperation.error = true;
    });

    builder.addCase(postBook.fulfilled, (state, action) => {
      state.Book.isLoading = false;
      state.Book.error = false;
      state.Book.result = action.payload;
    });
    builder.addCase(postBook.pending, (state) => {
      state.Book.isLoading = true;
      state.Book.error = false;
    });
    builder.addCase(postBook.rejected, (state) => {
      state.Book.isLoading = false;
      state.Book.error = true;
    });
  },
});

export const bookSliceAction = bookSlice.actions;
export const bookSliceReducer = bookSlice.reducer;
