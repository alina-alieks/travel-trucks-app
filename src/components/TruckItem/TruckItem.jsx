import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import EquipmentList from "../EquipmentList/EquipmentList";
import CamperRatingLocation from "../CamperRatingLocation/CamperRatingLocation";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../redux/favorites/slice";
import clsx from "clsx";
import { selectFavorites } from "../../redux/favorites/selectors";
import { useEffect, useState } from "react";
import css from "./TruckItem.module.css";

export default function TruckItem({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const [isFavorite, setIsFaforite] = useState(false);
  useEffect(() => {
    setIsFaforite(favorites.some((item) => item.id === camper.id));
  }, [favorites, camper.id]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(camper.id));
    } else {
      dispatch(addToFavorite(camper));
    }
  };

  return (
    <>
      <div className={css.wrapImg}>
        <img
          className={css.img}
          src={camper.gallery[0].thumb}
          alt={camper.name}
        ></img>
      </div>
      <div className={css.wrapperItemDiscription}>
        <div className={css.wrapTitle}>
          <h2>{camper.name}</h2>
          <div className={css.wrapPriceIcon}>
            <p>€{parseFloat(camper.price).toFixed(2)}</p>
            <div
              className={clsx(
                css.wrapIconHeart,
                isFavorite ? css.iconHeartChoose : css.wrapIconHeart
              )}
              onClick={handleFavoriteClick}
            >
              <Icon className={css.iconHeart} id="heart" />
            </div>
          </div>
        </div>
        <CamperRatingLocation camper={camper} />
        <p className={css.textDescription}>{camper.description}</p>
        <EquipmentList camper={camper} />
        <Button text="Show more" link="link" path={`/catalog/${camper.id}`} />
      </div>
    </>
  );
}
