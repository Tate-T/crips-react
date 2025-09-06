import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { CreateOrder } from "../CabinetPage/CreateOrder/CreateOrder.jsx";
import { CatalogSection } from "../CatalogPage/CatalogPage.jsx";
import { Banners } from "../../components/Banners/BannersSection.jsx";
// import { MiniCatalog } from "../../components/MiniCatalog/MiniCatalog.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";
import { Blog } from "../main-page/blog/blog.jsx";
import { CardList } from "../../components/card-list/CardList.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { Whishlist } from "../Wishlist/Wishlist.jsx";

export const HomePage = () => {
  return (
    <>
      <Header activePage="home" />
      <main>
        <Hero />
        <Banners />
        {/* <MiniCatalog /> */}
        <CreateOrder />
        <Blog />
        <CatalogSection />
        <SpecialList title="Most Popular" />
        <Whishlist />
      </main>
      {/* <Footer /> */}
    </>
  );
};
