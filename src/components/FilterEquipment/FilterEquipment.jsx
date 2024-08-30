import Icon from "../Icon/Icon";
import css from "./FilterEquipment.module.css";

export default function FilterEquipment() {
  return (
    <div>
      <p className={css.text}>Vehicle equipment</p>
      <ul className={css.list}>
        <li className={css.item}>
          <Icon className={css.svg} id="wind" />
          <p>AC</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="diagram" />
          <p>Automatic</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="cupHot" />
          <p>Kitchen</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="tv" />
          <p>TV</p>
        </li>
        <li className={css.item}>
          <Icon className={css.svg} id="droplet" />
          <p>Bathroom</p>
        </li>
      </ul>
    </div>
  );
}
