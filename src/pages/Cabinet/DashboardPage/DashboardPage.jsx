import { Header } from "../../../components/Header/Header.jsx";
import { Dashboard } from "./Dashboard/Dashboard.jsx";
import { AddNewAddress } from "./AddNewAddress/AddNewAddress.jsx";
import { DashboardSidebar } from "../../../components/DashboardSidebar/DashboardSidebar.jsx";
import { Footer } from "../../../components/Footer/Footer.jsx";

export const DashboardPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Dashboard>
          <DashboardSidebar />
        </Dashboard>
        <AddNewAddress>
          <DashboardSidebar />
        </AddNewAddress>
      </main>
      {/* <Footer /> */}
    </>
  );
};
