import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import css from "./Location.module.css";
import { selectFiltersLocation } from "../../redux/filters/selectors";
import { changeFilterLocation } from "../../redux/filters/slice";

export default function Location() {
  const dispatch = useDispatch();

  const filtersLocation = useSelector(selectFiltersLocation);

  const handleOnChange = (event) => {
    dispatch(changeFilterLocation(event.target.value));
  };

  return (
    <div>
      <label htmlFor="location" className={css.label}>
        Location
        <div className={css.wrapInput}>
          <Icon className={css.icon} id="map" />
          <input
            id="location"
            className={css.input}
            type="text"
            placeholder="City"
            value={filtersLocation}
            onChange={handleOnChange}
          ></input>
        </div>
      </label>
    </div>
  );
}
