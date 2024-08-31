import { useEffect } from "react";
import AllFilters from "../../components/AllFilters/AllFilters";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "./CatalogPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.wrapperCatalog}>
      <AllFilters />
      <TrucksList />
    </div>
  );
}
