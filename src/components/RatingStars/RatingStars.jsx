import css from "./RatingStars.module.css";

export default function RatingStars({ rating }) {
  const totalStars = 5;

  const stars = [...Array(totalStars)].map((_, index) => (
    <img
      key={index}
      src={
        index < rating
          ? "/src/images/rating-star/rating.png"
          : "/src/images/rating-star/ratingDis.png"
      }
      srcSet={
        index < rating
          ? "/src/images/rating-star/rating@2x.png 2x"
          : "/src/images/rating-star/ratingDis@2x.png 2x,"
      }
      alt="Rating Star"
      width="16"
      height="16"
    />
  ));

  return <div className={css.stars}>{stars}</div>;
}
