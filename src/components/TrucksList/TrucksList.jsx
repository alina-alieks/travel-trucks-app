import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/campers/selectors";
import TruckItem from "../TruckItem/TruckItem";

import css from "./TrucksList.module.css";
import { useState } from "react";

export default function TrucksList() {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const campers = useSelector(selectFilteredCampers);
  console.log(campers);

  return (
    <div>
      <ul className={css.list}>
        {campers.slice(0, visibleCount).map((item) => (
          <li className={css.listItem} key={item.id}>
            <TruckItem camper={item} />
          </li>
        ))}
      </ul>
      {visibleCount < campers.length && (
        <button className={css.button} onClick={handleLoadMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
}
