// import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import FiltersVehicle from "../FiltersVehicle/FiltersVehicle";
import Location from "../Location/Location";
import css from "./AllFilters.module.css";

export default function AllFilters() {
  // const dispach = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={css.wrapFilters}>
      <Location />
      <FiltersVehicle />
      <Button text="Search" />
    </form>
  );
}
