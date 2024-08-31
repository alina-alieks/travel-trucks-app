import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCamperById } from "./operations";

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    totalItems: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalItems = action.payload.total;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.items.find((item) => item.id === action.payload.id);
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default slice.reducer;
