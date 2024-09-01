import star from "../../images/rating-star/rating.png";
import starRetina from "../../images/rating-star/rating@2x.png";
import starDis from "../../images/rating-star/ratingDis.png";
import starRetinaDis from "../../images/rating-star/ratingDis@2x.png";
import css from "./RatingStars.module.css";

export default function RatingStars({ rating }) {
  const totalStars = 5;

  const stars = [...Array(totalStars)].map((_, index) => (
    <img
      key={index}
      src={index < rating ? star : starDis}
      srcSet={index < rating ? `${starRetina} 2x` : `${starRetinaDis} 2x`}
      alt="Rating Star"
      width="16"
      height="16"
    />
  ));

  return <div className={css.stars}>{stars}</div>;
}
