import { Filtration } from "./Filtration/Filtration.jsx";
import {Header} from '../../components/Header/Header'
import {FullCatalog} from "./Catalog/FullCatalog.jsx";

export const CatalogSection = () => {
  return (
    <>
      <Header />
      <main className="container">
        <FullCatalog />
        <Filtration />
      </main>
      {/* <Footer /> */}
    </>
  );
};
