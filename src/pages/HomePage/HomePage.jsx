import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Banners } from "../../components/Banners/BannersSection.jsx";
import { MiniCatalog } from "../../components/MiniCatalog/MiniCatalog.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";
import { Blog } from "./Blog/Blog.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import { Wishlist } from "../../pages/CabinetPage/Wishlist/Wishlist.jsx";
import { AddNewAddress } from "../Cabinet/DashboardPage/AddNewAddress/AddNewAddress.jsx";

export const HomePage = () => {
  return (
    <>
      <Header activePage="home" />
      <main>
        <Hero />
        <Wishlist />
        <Banners />
        <MiniCatalog />
        <Blog />
        <SpecialList title="Most Popular" />
      </main>
      <Footer />
      <AddNewAddress />
    </>
  );
};
