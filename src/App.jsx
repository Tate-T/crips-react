import { HomePage } from "./pages/HomePage/HomePage.jsx";
// import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { CartPage } from "./pages/CartPage/CartPage.jsx";
import { CreateOrder } from "./pages/CabinetPage/CreateOrder/CreateOrder.jsx";

function App() {
  return (
    <>
    <CreateOrder></CreateOrder>
      <CartPage />
      {/* <ProductPage/> */}
      {/* <CreateNewAcount></CreateNewAcount> */}
    </>
  );
}

export default App;
