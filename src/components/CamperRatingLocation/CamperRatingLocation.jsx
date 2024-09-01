import Icon from "../Icon/Icon";
import css from "./CamperRatingLocation.module.css";
import star from "../../images/rating-star/rating.png";
import starRetina from "../../images/rating-star/rating@2x.png";
import starDis from "../../images/rating-star/ratingDis.png";
import starRetinaDis from "../../images/rating-star/ratingDis@2x.png";

export default function CamperRatingLocation({ camper }) {
  return (
    <div className={css.wrapNotice}>
      <div className={css.wrapReting}>
        {camper.rating ? (
          <img
            src={star}
            srcSet={`${starRetina} 2x`}
            alt="Rating Star"
            width="16"
            height="16"
          ></img>
        ) : (
          <img
            src={starDis}
            srcset={`${starRetinaDis} 2x`}
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
  );
}
