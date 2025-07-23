import "./App.css";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { CreateOrder } from "./pages/CabinetPage/CreateOrder/CreateOrder.jsx";
function App() {
  return (
    <>
      <CreateOrder></CreateOrder>
      <HomePage />
    </>
  );
}

export default App;
