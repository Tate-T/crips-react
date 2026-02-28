import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ContactUsBar } from "./ContactUsBar/ContactUsBar";

export const AccountLayout = () => {
  return (
    <>
      <Header activePage="cabinet" />
      <ContactUsBar />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
