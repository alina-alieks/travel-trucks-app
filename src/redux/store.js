import { configureStore } from "@reduxjs/toolkit";
import campers from "./campers/slice";

export const store = configureStore({
  reducer: {
    campers,
    // filters: filters,
  },
});
