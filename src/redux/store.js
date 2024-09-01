import { configureStore } from "@reduxjs/toolkit";
import campers from "./campers/slice";
import filters from "./filters/slice";

export const store = configureStore({
  reducer: {
    campers,
    filters,
  },
});
