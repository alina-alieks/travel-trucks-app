import Icon from "../Icon/Icon";
import css from "./FilterType.module.css";

export default function FilterType() {
  return (
    <div>
      <p className={css.text}>Vehicle type</p>
      <ul className={css.list}>
        <li className={css.item}>
          <Icon className={css.svg} id="van" />
          <p className={css.filterName}>Van</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="fully" />
          <p className={css.filterName}>Fully Integrated</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="alcove" />
          <p className={css.filterName}>Alcove</p>
        </li>
      </ul>
    </div>
  );
}
