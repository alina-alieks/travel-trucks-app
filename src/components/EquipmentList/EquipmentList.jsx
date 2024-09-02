import Icon from "../Icon/Icon";
import css from "./EquipmentList.module.css";

export default function EquipmentList({ camper }) {
  return (
    <>
      <div className={css.listCard}>
        <div className={css.wrapCard}>
          <Icon id="diagram" className={css.icon} />
          <p>{camper.transmission}</p>
        </div>
        <div className={css.wrapCard}>
          <Icon id="petrol" className={css.icon} />
          <p>{camper.engine}</p>
        </div>
        {camper.kitchen && (
          <div className={css.wrapCard}>
            <Icon id="cupHot" className={css.icon} />
            <p>kitchen</p>
          </div>
        )}
        {camper.AC && (
          <div className={css.wrapCard}>
            <Icon id="wind" className={css.icon} />
            <p>AC</p>
          </div>
        )}
        {camper.TV && (
          <div className={css.wrapCard}>
            <Icon id="tv" className={css.icon} />
            <p>TV</p>
          </div>
        )}
        {camper.radio && (
          <div className={css.wrapCard}>
            <Icon id="radio" className={css.icon} />
            <p>radio</p>
          </div>
        )}
        {camper.bathroom && (
          <div className={css.wrapCard}>
            <Icon id="droplet" className={css.icon} />
            <p>bathroom</p>
          </div>
        )}
        {camper.refrigerator && (
          <div className={css.wrapCard}>
            <p>refrigerator</p>
          </div>
        )}
        {camper.microwave && (
          <div className={css.wrapCard}>
            <p>microwave</p>
          </div>
        )}
        {camper.gas && (
          <div className={css.wrapCard}>
            <p>gas</p>
          </div>
        )}
        {camper.water && (
          <div className={css.wrapCard}>
            <p>water</p>
          </div>
        )}
      </div>
    </>
  );
}
