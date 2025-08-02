import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.jsx";
import { CreateOrder } from './pages/CabinetPage/CreateOrder/CreateOrder.jsx';

function App() {
  return (
    <>
      <HomePage />
      <CreateOrder></CreateOrder>
      <ProductPage />
    </>
  );
}

export default App;
