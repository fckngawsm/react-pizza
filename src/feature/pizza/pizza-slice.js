import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  error: null,
  status: "idle",
};

export const loadPizza = createAsyncThunk(
  "@@pizza-loading",
  (data, { extra: { client, api } }) => {
    const {categories, currentPage, sortItem, searchValue} = data;
    return client.get(
      api.BASE_URL +
        `/items?page=${currentPage}&limit=4&${
          categories > 0 ? `category=${categories}` : ""
        }&sortBy=${sortItem}&order=desc${searchValue}`
    );
  }
);

const pizzaSlice = createSlice({
  name: "@@pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPizza.fulfilled, (state, action) => {
      state.list = action.payload.data;
    });
  },
});

export const pizzaReducer = pizzaSlice.reducer;
// selectors
export const selectPizza = (state) => state.pizza.list;
