import { Container } from "../Container/Container";

import Logo from "../../images/logo.svg";
import Search from "../../images/search.svg";
import Bag from "../../images/bag.svg";
import Heart from "../../images/heart.svg";
import Menu from "../../images/menu.svg";

import style from "./Header.module.scss";

// activePage може бути "home", "shop", "blog", "sale", "contact us"
export const Header = ({ activePage }) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__wrap}>
          <button className={style.header__menu}>
            <img className={style.menu__icon} src={Menu} alt="Menu SVG" />
          </button>
          <img className={style.header__logo} src={Logo} alt="Logo SVG" />
          <div className={style.header__center}>
            <nav className={style.header__nav}>
              <ul className={style.nav__list}>
                <li className={style.nav__item}><a href="." className={style.nav__link}>HOME</a></li>
                <li className={style.nav__item}><a href="." className={style.nav__link}>SHOP</a></li>
                <li className={style.nav__item}><a href="." className={style.nav__link}>BLOG</a></li>
                <li className={style.nav__item}><a href="." className={style.nav__link}>SALE</a></li>
                <li className={style.nav__item}><a href="." className={style.nav__link}>CONTACT US</a></li>
              </ul>
            </nav>
            <div className={style.header__search}>
              <label htmlFor="search">
                <img className={style.search__icon} src={Search} alt="Search SVG" />
              </label>
              <input className={style.search__input} type="text" placeholder="SEARCH" id="search" />
            </div>
          </div>
          <div className={style.header__right}>
            <div className={style.header__authentication}>
              <a className={style.auth__link} href=".">SIGN IN</a>
              <a className={style.auth__link} href=".">CREATE AN ACCOUNT</a>
            </div>
            <div className={style.header__actions}>
              <button className={style.header__like}>
                <img src={Heart} alt="Heart SVG" className={style.header__like_svg} />
              </button>
              <a href="." className={style.header__cart}>
                <img src={Bag} alt="Bag SVG" className={style.header__bag} />
                <div className={style.header__price}>
                  <p className={style.price__caption}>Shopping Cart</p>
                  <p className={style.price__quantity}>0,00 EUR</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}

