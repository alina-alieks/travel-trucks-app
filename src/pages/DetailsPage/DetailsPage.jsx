import { Outlet, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCamperById } from "../../redux/campers/operations";
import {
  selectChoosenItem,
  selectLoading,
} from "../../redux/campers/selectors";
import CamperRatingLocation from "../../components/CamperRatingLocation/CamperRatingLocation";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./DetailsPage.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getCamperById(String(id)));
  }, [dispatch]);

  const camper = useSelector(selectChoosenItem);
  console.log(camper);

  return (
    !loading &&
    camper && (
      <div className={css.container}>
        <div className={css.wrapTitle}>
          <h2 className={css.name}>{camper.name}</h2>
          <CamperRatingLocation camper={camper} />
          <p className={css.price}>€{parseFloat(camper.price).toFixed(2)}</p>
        </div>
        <ul className={css.listImage}>
          {camper.gallery.map((item) => (
            <li className={css.listItem} key={item.thumb}>
              <img className={css.img} src={item.thumb} alt="Camper's photo" />
            </li>
          ))}
        </ul>
        <p className={css.textDescription}>{camper.description}</p>
        <ul className={css.addInfoList}>
          <li className={css.textList}>
            <NavLink
              className={({ isActive }) =>
                clsx(css.navLink, isActive && css.navLink)
              }
              to="features"
            >
              Features
            </NavLink>
          </li>
          <li className={css.textList}>
            <NavLink
              className={({ isActive }) => clsx(isActive && css.navLink)}
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    )
  );
}
