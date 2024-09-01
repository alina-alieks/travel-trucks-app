import { useSelector } from "react-redux";
import BookForm from "../BookForm/BookForm";
import { selectChoosenItem } from "../../redux/campers/selectors";
import RatingStars from "../RatingStars/RatingStars";
import css from "./CamperReviews.module.css";

export default function CamperReviews() {
  const camper = useSelector(selectChoosenItem);
  return (
    <div className={css.wrapper}>
      <div className={css.wrapReviews}>
        <ul className={css.list}>
          {camper.reviews.map((item, i) => (
            <li className={css.listItem} key={i}>
              <div className={css.wrapName}>
                <div className={css.avatar}>
                  <p className={css.letterAva}>{item.reviewer_name[0]}</p>
                </div>
                <div>
                  <p>{item.reviewer_name}</p>
                  <div className={css.stars}>
                    <RatingStars rating={item.reviewer_rating} />
                  </div>
                </div>
              </div>
              <p className={css.comment}>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
