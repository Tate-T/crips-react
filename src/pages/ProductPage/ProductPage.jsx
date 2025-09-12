// import { Header } from "../../components/Header/Header.jsx";
import { CardInfo } from "./CardInfo.jsx";
import { FaqsList } from "./FaqsList.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";

export const ProductPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <CardInfo />
        <FaqsList />
        <SpecialList title="You May Also Like" />
      </main>
      {/* <Footer /> */}
    </>
  );
};
