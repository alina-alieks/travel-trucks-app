import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import clsx from "clsx";
import css from "./FilterEquipment.module.css";
import {
  changeFilterAC,
  changeFilterAutomatic,
  changeFilterKitchen,
  changeFilterTV,
  changeFilterBathroom,
} from "../../redux/filters/slice";
import {
  selectFilterAC,
  selectFilterAutomatic,
  selectFilterBathroom,
  selectFilterKitchen,
  selectFilterTV,
} from "../../redux/filters/selectors";

export default function FilterEquipment() {
  const dispatch = useDispatch();
  const ac = useSelector(selectFilterAC);
  const automatic = useSelector(selectFilterAutomatic);
  const kitchen = useSelector(selectFilterKitchen);
  const tv = useSelector(selectFilterTV);
  const bathroom = useSelector(selectFilterBathroom);

  const handleACChange = () => {
    dispatch(changeFilterAC(!ac));
  };

  const handleAutomaticChange = () => {
    dispatch(changeFilterAutomatic(!automatic));
  };

  const handleKitchenChange = () => {
    dispatch(changeFilterKitchen(!kitchen));
  };

  const handleTVChange = () => {
    dispatch(changeFilterTV(!tv));
  };

  const handleBathroomChange = () => {
    dispatch(changeFilterBathroom(!bathroom));
  };

  return (
    <div>
      <p className={css.text}>Vehicle equipment</p>
      <ul className={css.list}>
        <li
          className={clsx(css.item, ac && css.itemMatch)}
          onClick={handleACChange}
        >
          <Icon className={css.svg} id="wind" />
          <p>AC </p>
        </li>
        <li
          className={clsx(css.item, automatic && css.itemMatch)}
          onClick={handleAutomaticChange}
        >
          <Icon className={css.svg} id="diagram" />
          <p>Automatic </p>
        </li>
        <li
          className={clsx(css.item, kitchen && css.itemMatch)}
          onClick={handleKitchenChange}
        >
          <Icon className={css.svg} id="cupHot" />
          <p>Kitchen </p>
        </li>
        <li
          className={clsx(css.item, tv && css.itemMatch)}
          onClick={handleTVChange}
        >
          <Icon className={css.svg} id="tv" />
          <p>TV </p>
        </li>
        <li
          className={clsx(css.item, bathroom && css.itemMatch)}
          onClick={handleBathroomChange}
        >
          <Icon className={css.svg} id="droplet" />
          <p>Bathroom </p>
        </li>
      </ul>
    </div>
  );
}
