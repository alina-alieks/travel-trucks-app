import FilterEquipment from "../FilterEquipment/FilterEquipment";
import FilterType from "../FilterType/FilterType";
import css from "./FiltersVehicle.module.css";

export default function FiltersVehicle() {
  return (
    <div className={css.wrapper}>
      <p className={css.filters}>Filters</p>
      <FilterEquipment />
      <FilterType />
    </div>
  );
}
