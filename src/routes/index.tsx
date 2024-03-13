import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import MainLayout from "../layoutes/MainLayout";
import DetailPage from "../pages/detailPage";
import SearchPage from "../pages/searchPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<MainLayout />}>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/" element={<SearchPage />} />
      </Route>
    </Route>
  )
);
