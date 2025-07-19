import PropTypes from "prop-types";
const Catalog = (props, index) => {
  return (
    <li className="catalog__item" key={index}>
      <img className="catalog__img" src={props.img} alt="" width="345px" height="450px"/>
      <p className="catalog__tag">{props.top}</p>
      <h3 className="catalog__name">{props.name}</h3>
      <h4 className="catalog__price">{props.price}</h4>
      <ul className="catalog__colors">
        {props.colors.map((item, index) => (
          <li
            className="catalog__color"
            key={index}
            style={{ backgroundColor: item }}
          ></li>
        ))}
      </ul>
    </li>
  );
};

Catalog.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
};

export default Catalog;
