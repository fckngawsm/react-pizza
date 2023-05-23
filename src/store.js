import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./feature/filter/filter-slice";
import { pizzaReducer } from "./feature/pizza/pizza-slice";
import axios from "axios";
import * as api from "./config";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    filter: filterReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
