import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { CreateOrder } from "../CabinetPage/CreateOrder/CreateOrder.jsx";
import { CatalogSection } from "../CatalogPage/CatalogPage.jsx";
import { Banners } from "../../components/Banners/BannersSection.jsx";
import { MiniCatalog } from "../../components/MiniCatalog/MiniCatalog.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";
import { Blog } from "../main-page/blog/blog.jsx"
import { CardList } from "../../components/card-list/CardList.jsx"

export const HomePage = () => {
  return (
    <>
      <Header activePage="home" />
      <main>
        {/*<Banners />*/}
        {/*<MiniCatalog />*/}
        {/*<CatalogSection />*/}
        {/*<CreateOrder />*/}
        <SpecialList title="Most Popular" />
        {/* <CatalogSection /> */}
        {/* <CreateOrder /> */}
        <Blog />
        <CardList />
      </main>
      <Footer />
    </>
  );
};
