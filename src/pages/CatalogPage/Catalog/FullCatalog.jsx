import { connect } from "react-redux";
import Catalog from "./Catalog.jsx";
import Sorting from "../Sorting/Sorting.jsx";
import Banner from "../Banner/Banner.jsx";
import styles from "./Catalog.module.scss";

const FullCatalog = ({ products }) => {
  const userMedia = window.matchMedia("(min-width: 768px)").matches;

  if (!products || products.length === 0) {
    return <p>Products not found</p>;
  }

  return (
    <div className={styles.catalog}>
      <Sorting />

      <ul className={styles.catalog__list}>
       {products.map((item, index) => (
  <Catalog
    key={item.id || index}
    {...item}
    style={styles}
    media={userMedia}
  />
))}

      </ul>

      <Banner />

      <ul className={styles.catalog__list}>
        {products.map((item) => (
          <Catalog
            key={item.id}
            {...item}
            style={styles}
            media={userMedia}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(FullCatalog);
