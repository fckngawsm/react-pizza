import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./feature/filter/filter-slice";

const rootReducer = combineReducers({
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
