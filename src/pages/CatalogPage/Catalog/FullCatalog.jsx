import { Catalog } from "./Catalog.jsx";
import { Sorting } from "../Sorting/Sorting.jsx";
import Banner from "../Banner/Banner.jsx";
import styles from "./Catalog.module.scss";
import catalogBase from "../../../data/catalog-data.js";

export function FullCatalog () {
    const userMedia = window.matchMedia("(min-width: 768px)");
    return (
      <>
        <Sorting />
        <ul className={styles.catalog__list}>
          {catalogBase.map((item, index) => (
            <Catalog
              {...item}
              color={item.colors}
              style={styles}
              key={index}
              media={userMedia}
            />
          ))}
        </ul>
        <Banner />
        <ul className={styles.catalog__list}>
          {catalogBase.map((item, index) => (
            <Catalog
              {...item}
              color={item.colors}
              style={styles}
              key={index}
              media={userMedia}
            />
          ))}
        </ul>
      </>
    );
}
