import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Catalog = ({
  id,
  img,
  name,
  category,
  colors,
  price,
  discountPrice,
  media,
  style
}) => {
  return (
    <NavLink to={id} className={style.catalog__item}>
    <img className={style.catalog__img} src={img} alt={name} />

    <p className={style.catalog__top}>{category}</p>
    <h3 className={style.catalog__title}>{name}</h3>

    {discountPrice ? (
        <p className={style["catalog__price--discount"]}>
          {parseFloat(discountPrice || 0).toFixed(2)} EUR{" "}
          <span className={style["catalog__price--old"]}>
            {parseFloat(price || 0).toFixed(2)} EUR
          </span>
        </p>
      ) : (
        <p className={style.catalog__price}>
          {parseFloat(price || 0).toFixed(2)} EUR
        </p>
      )}

      <ul className={style.catalog__colors}>
        {media &&
          colors.map((item, index) => (
            <li className={style.colors__item} key={index}>
              <button type="button" className={style.catalog__color}>
                <div
                  className={style.color}
                style={{ backgroundColor: item }}
                />
              </button>
            </li>
        ))}
      </ul>
    </NavLink>
  );
};

Catalog.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
  media: PropTypes.bool,
  style: PropTypes.object.isRequired
};

export default Catalog;
