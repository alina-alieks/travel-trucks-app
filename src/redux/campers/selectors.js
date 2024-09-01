import { createSelector } from "reselect";
import { selectFilters } from "../filters/selectors";

export const selectAllCampers = (state) => state.campers.items;
export const selectChoosenItem = (state) => state.campers.choosenItem;
export const selectLoading = (state) => state.campers.loading;

export const selectFilteredCampers = createSelector(
  [selectAllCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

      const matchesForm = camper.form
        .toLowerCase()
        .includes(filters.form.toLowerCase());

      const matchesAC = filters.ac ? camper.AC === filters.ac : true;
      const matchesAutomatic = filters.automatic
        ? camper.transmission === "automatic"
        : true;
      const matchesKitchen = filters.kitchen
        ? camper.kitchen === filters.kitchen
        : true;
      const matchesTV = filters.tv ? camper.TV === filters.tv : true;
      const matchesBathroom = filters.bathroom
        ? camper.bathroom === filters.bathroom
        : true;

      return (
        matchesLocation &&
        matchesForm &&
        matchesAC &&
        matchesAutomatic &&
        matchesKitchen &&
        matchesTV &&
        matchesBathroom
      );
    });
  }
);
