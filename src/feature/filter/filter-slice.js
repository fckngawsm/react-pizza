import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  pageCount: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "@@filter",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSortType: (state, action) => {
      state.sort = action.payload;
    },
    setPagination: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortType, setPagination } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
