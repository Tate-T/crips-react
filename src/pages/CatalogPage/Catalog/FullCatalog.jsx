import { Catalog } from "./Catalog.jsx";
import { catalogData } from "../../../data/catalog-data.js";
import stule from "./Catalog.module.scss";

export const FullCatalog = () => {
  return (
    <div className={stule.catalog__container}>
      <ul className={stule.catalog__list}>
        {catalogData.map((item, index) => (
          <Catalog {...item} styles={stule} key={index} />
        ))}
      </ul>
      
      <ul className={stule.catalog__list}>
        {catalogData.map((item, index) => (
          <Catalog {...item} styles={stule} key={index} />
        ))}
      </ul>
    </div>
  );
};
