import { Catalog } from "./Catalog.jsx";
import { Sorting } from "../Sorting/Sorting.jsx";
import Banner from "../Banner/Banner.jsx";
import style from "./Catalog.module.scss";
import catalogBase from "../../../data/catalog-data.js";

export function FullCatalog() {
  catalogBase.map((item, index) => (
    <Catalog {...item} color={item.colors} style={style} key={index} />
  ));
  return (
    <>
      <Sorting />
      <ul className={style.catalog__list}>
        {catalogBase.map((item, index) => (
          <Catalog {...item} color={item.colors} style={style} key={index} />
        ))}
      </ul>
      <Banner />
      <ul className={style.catalog__list}>
        {catalogBase.map((item, index) => (
          <Catalog {...item} style={style} key={index} />
        ))}
      </ul>
    </>
  );
}
