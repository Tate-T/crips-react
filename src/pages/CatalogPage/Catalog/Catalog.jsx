import PropTypes from "prop-types";

export function Catalog(
  style,
  img,
  name,
  category,
  colors,
  price,
  media,
  discount
) {
  return (
    <li className={style.catalog__item}>
      <img className={style.catalog__img} src={img} alt="#" />
      {discount ? (
        <p className={`${style.catalog__discount}--discount`}>{discount}</p>
      ) : undefined}

      <p className={style.catalog__top}>{category}</p>
      <h3 className={style.catalog__title}>{name}</h3>
      {discount ? (
        <p className={`${style.catalog__price}--discount`}>
          {price}
          <span className={style.catalog__discount}>{discount}</span>
        </p>
      ) : (
        <p className={style.catalog__price}>{price}</p>
      )}

      <p className={style.catalog__price}>{price}</p>

      <ul className={style.catalog__colors}>
        {media
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
}

Catalog.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
