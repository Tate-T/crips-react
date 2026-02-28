import { Filtration } from "./Filtration/Filtration.jsx";
import { Header } from "../../components/Header/Header";
import FullCatalog from "./Catalog/FullCatalog.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import "./Catalog.scss";
import { Container } from "../../components/Container/Container.jsx";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <section className="catalogSection">
        <Container>
          <div>
            <p className="catalog-way">Home / Womens Dress / Best Chose</p>
            <Filtration />
          </div>
          <FullCatalog />
        </Container>
      </section>
      <Footer />
    </>
  );
};
export default CatalogPage;