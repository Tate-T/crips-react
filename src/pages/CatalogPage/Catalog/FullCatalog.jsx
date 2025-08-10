import {Catalog} from "./Catalog.jsx";
import catalogData from "../../../data/catalog-data.js";
import { Sorting } from "../Sorting/Sorting.jsx"
import Banner from "../Banner/Banner.jsx";

export function FullCatalog() {
  return (
    <>
      <Sorting />
      <ul className="catalog__list">
        {catalogData.map((test, index) => (
          <Catalog {...test} key={index} />
        ))}
      </ul>
      <Banner />
      <ul className="catalog__list">
        {catalogData.map((test, index) => (
          <Catalog {...test} key={index} />
        ))}
      </ul>
    </>
  );
}
