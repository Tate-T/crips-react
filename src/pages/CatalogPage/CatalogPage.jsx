import { Filtration } from "./Filtration/Filtration.jsx";
import { Header } from "../../components/Header/Header";
import { FullCatalog } from "./Catalog/FullCatalog.jsx";
import { Banner } from "./Banner/Banner.jsx";

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Filtration />
        <Banner />
        {/* <FullCatalog /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
