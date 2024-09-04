import { useDispatch, useSelector } from "react-redux";
import FiltersVehicle from "../FiltersVehicle/FiltersVehicle";
import Location from "../Location/Location";
import { resetAllFilters } from "../../redux/filters/slice";
import css from "./AllFilters.module.css";

export default function AllFilters() {
  const dispach = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispach(resetAllFilters());
  };

  return (
    <div className={css.wrapFilters}>
      <Location />
      <FiltersVehicle />
      <button className={css.button} onClick={handleSubmit}>
        Reset filters
      </button>
    </div>
  );
}
