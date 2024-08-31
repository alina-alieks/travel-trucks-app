import css from "./TruckItem.module.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

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
            <p>€{camper.price.toFixed(2)}</p>
            <Icon className={css.iconHeart} id="heart" />
          </div>
        </div>
        <div className={css.wrapNotice}>
          <div className={css.wrapReting}>
            {camper.rating ? (
              <img
                src="/src/images/rating-star/rating.png"
                srcSet="/src/images/rating-star/rating@2x.png 2x"
                alt="Rating Star"
                width="16"
                height="16"
              ></img>
            ) : (
              <img
                src="/src/images/rating-star/ratingDis.png"
                srcset="/src/images/rating-star/ratingDis@2x.png 2x,"
                alt="Rating Star"
              ></img>
            )}
            <p className={css.textRew}>
              {camper.rating} ({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.wrapReting}>
            <Icon id="map" className={css.iconMap} />
            <p className={css.textLocation}>{camper.location}</p>
          </div>
        </div>
        <p className={css.textDescription}>{camper.description}</p>
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
        </div>
        <Button text="Show more" link="link" path={`/campers/${camper.id}`} />
      </div>
    </>
  );
}
