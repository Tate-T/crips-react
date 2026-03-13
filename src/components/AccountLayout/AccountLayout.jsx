import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ContactUsBar } from "./ContactUsBar/ContactUsBar";
import { useStyle } from "../../hooks/useStyle.js";
import baseStyle from "./AccountLayout.module.scss";
import darkStyle from "./dark.module.scss";
import lightStyle from "./light.module.scss";

export const AccountLayout = () => {
  const styles = useStyle(baseStyle, darkStyle, lightStyle);

  return (
    <>
      <Header activePage="cabinet" />
      <ContactUsBar />
      <main>
        <div className={styles.AccountLayout}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
