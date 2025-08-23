import PropTypes from "prop-types";
import React from "react";



export class Catalog extends React.Component {
  render() {
    return (
      <li className={this.props.style.catalog__item}>
        <img
          className={this.props.style.catalog__img}
          src={this.props.img}
          alt="#"
        />
        <p className={this.props.style.catalog__top}>{this.props.top}</p>
        <h3 className={this.props.style.catalog__title}>{this.props.name}</h3>
        <p className={this.props.style.catalog__price}>{this.props.price}</p>

        <ul className={this.props.style.catalog__colors}>
          {this.props.media.matches
            ? this.props.colors.map((item, index) => (
                <li className={this.props.style.colors__item} key={index}>
                  <button
                    type="button"
                    className={this.props.style.catalog__color}
                  >
                    <div
                      className={this.props.style.color}
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
}

Catalog.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
