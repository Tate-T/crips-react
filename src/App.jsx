import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage.jsx";
import { CartPage } from "./pages/CartPage/CartPage.jsx";
import { CabinetPage } from "./pages/CabinetPage/CabinetPage.jsx";
import { DashboardPage } from "./pages/Cabinet/DashboardPage/DashboardPage.jsx";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage.jsx";

import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/catalogpage" element={<CatalogPage />} />
        <Route path="/catalogpage/:productId" element={<ProductPage />} />

        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/cabinetpage" element={<CabinetPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
