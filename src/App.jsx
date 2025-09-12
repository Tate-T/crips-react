import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage.jsx";
import { CartPage } from "./pages/CartPage/CartPage.jsx";
import { CabinetPage } from "./pages/CabinetPage/CabinetPage.jsx";
import { DashboardPage } from "./pages/Cabinet/DashboardPage/DashboardPage.jsx";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage.jsx";

function App() {
  return (
    <>
      <HomePage />
      <CatalogPage />
      <ProductPage />
      <ArticlePage />
      <CabinetPage />
      <CartPage />
      <DashboardPage />
    </>
  );
}

export default App;
