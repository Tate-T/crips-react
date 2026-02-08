import axios from "axios";
import { useState } from "react";
import { Catalog } from "./Catalog.jsx";
import { Sorting } from "../Sorting/Sorting.jsx";
import { Banner } from "../Banner/Banner.jsx";
import styles from "./Catalog.module.scss";
import { catalogData } from "../../../data/catalog-data.js";
import { useEffect } from "react";

const productsAPI = import.meta.env.VITE_PRODUCTS_API;
axios.defaults.baseURL = productsAPI;

// {
//   catalogData.then((item, index) => (
//     <Catalog
//       {...item}
//       color={item.colors}
//       style={styles}
//       key={index}
//       media={userMedia}
//     />
//   ));
// }

export function FullCatalog() {
  const userMedia = window.matchMedia("(min-width: 768px)");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const r = await axios.get("/");

        setProducts(r.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);



  return (
    <div className={styles.catalog}>
      <Sorting />
      <ul className={styles.catalog__list}>
        {products.map((item, index) => (
          <Catalog {...item} color={item.colors} style={styles} key={index} media={userMedia} />
        ))}
      </ul>
      <Banner />
      <ul className={styles.catalog__list}>
        {products.map((item, index) => (
          <Catalog {...item} color={item.colors} style={styles} key={index} media={userMedia} />
        ))}
      </ul>
    </div>
  );
}
