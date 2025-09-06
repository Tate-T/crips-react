import React from "react";
import style from "./Mobmenu.module.scss";

export class Mobmenu extends React.Component {
  render() {
    return (
      <div className={`${style.mobmenu}${this.props.open ? ` ${style.open}` : ""}`}>
        <div className={`${style.backdrop}${this.props.open ? ` ${style.open}` : ""}`} onClick={this.props.change}>
          <div className={`${style.mobmenu__content}${this.props.open ? ` ${style.open}` : ""}`}>
            <button className={style.mobmenu__close} onClick={this.props.change}>
              x
            </button>
            <ul className={style.mobmenu__list}>
              <li className={this.props.activePage !== "home" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
                <a href="." className={style.mobmenu__link}>HOME</a>
              </li>
              <li className={this.props.activePage !== "shop" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
                <a href="." className={style.mobmenu__link}>SHOP</a>
              </li>
              <li className={this.props.activePage !== "blog" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
                <a href="." className={style.mobmenu__link}>BLOG</a>
              </li>
              <li className={this.props.activePage !== "sale" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
                <a href="." className={style.mobmenu__link}>SALE</a>
              </li>
              <li className={this.props.activePage !== "contact us" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
                <a href="." className={style.mobmenu__link}>CONTACT US</a>
              </li>
            </ul>
            <p className={style.mobmenu__author}>© 2019. Crisp theme Developed by Belvg</p>
          </div>
        </div>
      </div>
    );
  }
}
