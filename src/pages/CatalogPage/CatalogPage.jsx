import { Filtration } from "./Filtration/Filtration.jsx";
import { Header } from "../../components/Header/Header";
import { FullCatalog } from "./Catalog/FullCatalog.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Filtration />
        <FullCatalog />
      </main>
      <Footer />
    </>
  );
};
