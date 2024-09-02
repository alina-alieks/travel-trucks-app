import { configureStore } from "@reduxjs/toolkit";
import campers from "./campers/slice";
import filters from "./filters/slice";
import favorites from "./favorites/slice";

export const store = configureStore({
  reducer: {
    campers,
    filters,
    favorites,
  },
});
