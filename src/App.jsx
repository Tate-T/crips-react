import { HomePage } from "./pages/HomePage/HomePage.jsx";
// import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage.jsx"
import { CartPage } from "./pages/CartPage/CartPage.jsx";
import { CreateOrder } from "./pages/CabinetPage/CreateOrder/CreateOrder.jsx";

function App() {
  return (
    <>
      <HomePage />
      {/* <ProductPage/> */}
      {/* <CreateNewAcount></CreateNewAcount> */}
      {/* <ArticlePage /> */}
      <ProductPage />
      <CreateOrder></CreateOrder>
      <CartPage />
    </>
  );
}

export default App;
