import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroom: false,
    form: "",
  },
  reducers: {
    changeFilterLocation(state, action) {
      state.location = action.payload;
    },
    changeFilterAC(state, action) {
      state.ac = action.payload;
    },
    changeFilterAutomatic(state, action) {
      state.automatic = action.payload;
    },
    changeFilterKitchen(state, action) {
      state.kitchen = action.payload;
    },
    changeFilterTV(state, action) {
      state.tv = action.payload;
    },
    changeFilterBathroom(state, action) {
      state.bathroom = action.payload;
    },
    changeFilterForm(state, action) {
      state.form = action.payload;
    },
  },
});

export const {
  changeFilterLocation,
  changeFilterAC,
  changeFilterAutomatic,
  changeFilterKitchen,
  changeFilterTV,
  changeFilterBathroom,
  changeFilterForm,
} = slice.actions;

export default slice.reducer;
