import Catalog from "./Catalog.jsx";
import catalogData from "../../../data/catalog-data.js";
import {Sorting} from "../Sorting/Sorting.jsx"

function FullCatalog() {
  return (
    <>
    <Sorting />
      <ul className="catalog__list">
        {catalogData.map((test, index) => (
          <Catalog {...test} key={index} />
        ))}
      </ul>
      <div className="catalog__banner">
        <h2 className="banner__title">shoping without limits.</h2>
        <p className="banner__subtitle">
          You can choose the best option for you, and it does not matter whether
          you are in Prague or San Francisco. We will deliver your purchase
          anywhere!
        </p>
        <button className="banner__button">shop now</button>
      </div>
      <ul className="catalog__list">
        {catalogData.map((test, index) => (
          <Catalog {...test} key={index} />
        ))}
      </ul>
    </>
  );
}

export default FullCatalog;
