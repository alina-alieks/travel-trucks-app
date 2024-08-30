import Icon from "../Icon/Icon";
import css from "./Location.module.css";

export default function Location() {
  return (
    <div>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.wrapInput}>
        <Icon className={css.icon} id="map" />
        <input
          id="location"
          className={css.input}
          type="text"
          placeholder="Kyiv, Ukraine"
        ></input>
      </div>
    </div>
  );
}
