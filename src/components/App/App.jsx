import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<DetailsPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
