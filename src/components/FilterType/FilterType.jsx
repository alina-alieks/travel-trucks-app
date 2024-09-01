import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import { changeFilterForm } from "../../redux/filters/slice";
import css from "./FilterType.module.css";
import { selectFilterForm } from "../../redux/filters/selectors";

export default function FilterType() {
  const dispatch = useDispatch();

  const selectedForm = useSelector(selectFilterForm);

  const handleFilterChange = (formType) => {
    dispatch(changeFilterForm(formType));
  };

  return (
    <div>
      <p className={css.text}>Vehicle type</p>
      <ul className={css.list}>
        <li
          className={clsx(
            css.item,
            selectedForm === "panelTruck" ? css.itemMatch : ""
          )}
          onClick={() => handleFilterChange("panelTruck")}
        >
          <Icon className={css.svg} id="van" />
          <p className={css.filterName}>Van</p>
        </li>
        <li
          className={clsx(
            css.item,
            selectedForm === "fullyIntegrated" ? css.itemMatch : ""
          )}
          onClick={() => handleFilterChange("fullyIntegrated")}
        >
          <Icon className={css.svg} id="fully" />
          <p className={css.filterName}>Fully Integrated</p>
        </li>
        <li
          className={clsx(
            css.item,
            selectedForm === "alcove" ? css.itemMatch : ""
          )}
          onClick={() => handleFilterChange("alcove")}
        >
          <Icon className={css.svg} id="alcove" />
          <p className={css.filterName}>Alcove</p>
        </li>
      </ul>
    </div>
  );
}
