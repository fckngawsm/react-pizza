import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./feature/filter/filter-slice";

const rootReducer = combineReducers({
  categories: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
