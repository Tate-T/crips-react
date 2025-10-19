import { Container } from "../Container/Container";
import { Mobmenu } from "./Mobmenu/Mobmenu";
import { useState } from "react";

import Logo from "../../images/logo.svg";
import Search from "../../images/search.svg";
import Bag from "../../images/bag.svg";
import Heart from "../../images/heart.svg";
import Menu from "../../images/menu.svg";

import style from "./Header.module.scss";

// activePage може бути "home", "shop", "blog", "sale", "contact us"
export function Header({ activePage }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuChange = (ev) => {
    if (ev.target === ev.currentTarget || ev.currentTarget.className === `${style.header__menu}`) {
      document.querySelector("body").classList.toggle("mob-open");

      setMenuOpen(!isMenuOpen);
    }
  }

  return (
    <header className={style.header}>
      <Mobmenu open={isMenuOpen} activePage={activePage} change={handleMenuChange} />
      <Container>
        <div className={style.header__wrap}>
          <button className={style.header__menu} onClick={handleMenuChange}>
            <img className={style.menu__icon} src={Menu} alt="Menu SVG" /> </button>
          <img className={style.header__logo} src={Logo} alt="Logo SVG" />
          <div className={style.header__center}>
            <nav className={style.header__nav}>
              <ul className={style.nav__list}>
                <li className={activePage !== "home" ? style.nav__item : `${style.nav__item} ${style.active}`}>
                  <a href="." className={style.nav__link}>HOME</a>
                </li>
                <li className={activePage !== "shop" ? style.nav__item : `${style.nav__item} ${style.active}`}>
                  <a href="." className={style.nav__link}>SHOP</a>
                </li>
                <li className={activePage !== "blog" ? style.nav__item : `${style.nav__item} ${style.active}`}>
                  <a href="." className={style.nav__link}>BLOG</a>
                </li>
                <li className={activePage !== "sale" ? style.nav__item : `${style.nav__item} ${style.active}`}>
                  <a href="." className={style.nav__link}>SALE</a>
                </li>
                <li className={activePage !== "contact us" ? style.nav__item : `${style.nav__item} ${style.active}`}>
                  <a href="." className={style.nav__link}>CONTACT US</a>
                </li>
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

