import Button from "../Button/Button";
import FiltersVehicle from "../FiltersVehicle/FiltersVehicle";
import Location from "../Location/Location";
import css from "./AllFilters.module.css";

export default function AllFilters() {
  return (
    <div className={css.wrapFilters}>
      <Location />
      <FiltersVehicle />
      <Button text="Search" />
    </div>
  );
}
