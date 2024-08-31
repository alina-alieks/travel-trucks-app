import { useSelector } from "react-redux";
import { selectAllCampers } from "../../redux/campers/selectors";
import TruckItem from "../TruckItem/TruckItem";

import css from "./TrucksList.module.css";

export default function TrucksList() {
  const campers = useSelector(selectAllCampers);
  return (
    <ul className={css.list}>
      {campers.map((item) => (
        <li className={css.listItem} key={item.id}>
          <TruckItem camper={item} />
        </li>
      ))}
    </ul>
  );
}
