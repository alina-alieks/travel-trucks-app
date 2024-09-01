import css from "./TruckItem.module.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import EquipmentList from "../EquipmentList/EquipmentList";
import CamperRatingLocation from "../CamperRatingLocation/CamperRatingLocation";

export default function TruckItem({ camper }) {
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
            <Icon className={css.iconHeart} id="heart" />
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
