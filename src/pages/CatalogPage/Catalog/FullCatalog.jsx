import { Catalog } from "./Catalog.jsx";
import { Sorting } from "../Sorting/Sorting.jsx";
import {Banner} from "../Banner/Banner.jsx";
import styles from "./Catalog.module.scss";
import { catalogData } from "../../../data/catalog-data.js";
import React from "react";

export class FullCatalog extends React.Component {
  render() {
    const userMedia = window.matchMedia("(min-width: 768px)");
    return (
      <div className={styles.catalog}>
        <Sorting />
        <ul className={styles.catalog__list}>
          {catalogData.map((item, index) => (
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
          {catalogData.map((item, index) => (
            <Catalog
              {...item}
              color={item.colors}
              style={styles}
              key={index}
              media={userMedia}
            />
          ))}
        </ul>
      </div>
    );
  }
}
