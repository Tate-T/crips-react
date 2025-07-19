import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { CreateOrder } from "./pages/CabinetPage/CreateOrder/CreateOrder.jsx";
import  CatalogSection  from "./pages/CatalogPage/CatalogPage.jsx";

function App() {
  return (
    <>
      <CatalogSection />
      <HomePage />
    </>
  );
}

export default App;
