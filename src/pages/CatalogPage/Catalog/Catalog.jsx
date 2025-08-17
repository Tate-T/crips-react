import PropTypes from "prop-types";

const userMedia = window.matchMedia("(min-width: 768px)");

export const Catalog = ({ img, top, name, price, colors, style }) => {
  return (
    <li className={style.catalog__item}>
      <img className={style.catalog__img} src={img} alt="#" />
      <p className={style.catalog__top}>{top}</p>
      <h3 className={style.catalog__title}>{name}</h3>
      <p className={style.catalog__price}>{price}</p>

      <ul className={style.catalog__colors}>
        {userMedia.matches
          ? colors.map((item, index) => (
              <li className={style.colors__item} key={index}>
                <button type="button" className={style.catalog__color}>
                  <div
                    className={style.color}
                    style={{ backgroundColor: item }}
                  ></div>
                </button>
              </li>
            ))
          : undefined}
      </ul>
    </li>
  );
};

Catalog.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
