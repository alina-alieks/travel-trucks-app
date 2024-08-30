import AllFilters from "../../components/AllFilters/AllFilters";
import TrucksList from "../../components/TrucksList/TrucksList";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={css.wrapperCatalog}>
      <AllFilters />
      <TrucksList />
    </div>
  );
}
