import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Banners } from "../../components/Banners/BannersSection.jsx";
// import { MiniCatalog } from "../../components/MiniCatalog/MiniCatalog.jsx";
import SpecialList from "../../components/SpecialList/SpecialList.jsx";
import { Blog } from "../main-page/blog/blog.jsx";
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
        <Blog />
        <SpecialList title="Most Popular" />
        <Whishlist />
      </main>
      <Footer />
    </>
  );
};
