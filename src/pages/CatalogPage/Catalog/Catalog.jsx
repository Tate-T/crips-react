import PropTypes from "prop-types";
export const Catalog = ({ img, top, name, price, colors, styles }) => {
  return (
    <li className={styles.catalog__item}>
      <img
        className={styles.catalog__img}
        src={img}
        alt=""
        // width="345px"
        // height="450px"
      />
      <p className={styles.catalog__top}>{top}</p>
      <h3 className={styles.catalog__name}>{name}</h3>
      <h4 className={styles.catalog__price}>{price}</h4>
      <ul className={styles.catalog__colors}>
        {colors.map((item, index) => (
          <li className={styles.colors__item} key={index}>
            <button type="button" className={styles.catalog__color}>
              <div
                className={styles.color}
                style={{ backgroundColor: item }}
              ></div>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

Catalog.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  styles: PropTypes.object.isRequired,
};
