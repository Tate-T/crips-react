import style from "./Mobmenu.module.scss";
import { useSelector } from "react-redux";

export function Mobmenu({ activePage, change }) {
  const open = useSelector(state => state.header.menuState);

  return (
    <div className={`${style.mobmenu}${open ? ` ${style.open}` : ""}`}>
      <div className={`${style.backdrop}${open ? ` ${style.open}` : ""}`} onClick={change}>
        <div className={`${style.mobmenu__content}${open ? ` ${style.open}` : ""}`}>
          <button className={style.mobmenu__close} onClick={change}>
            x
          </button>
          <ul className={style.mobmenu__list}>
            <li className={activePage !== "home" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
              <a href="." className={style.mobmenu__link}>HOME</a>
            </li>
            <li className={activePage !== "shop" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
              <a href="." className={style.mobmenu__link}>SHOP</a>
            </li>
            <li className={activePage !== "blog" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
              <a href="." className={style.mobmenu__link}>BLOG</a>
            </li>
            <li className={activePage !== "sale" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
              <a href="." className={style.mobmenu__link}>SALE</a>
            </li>
            <li className={activePage !== "contact us" ? style.mobmenu__item : `${style.mobmenu__item} ${style.active}`}>
              <a href="." className={style.mobmenu__link}>CONTACT US</a>
            </li>
          </ul>
          <p className={style.mobmenu__author}>© 2019. Crisp theme Developed by Belvg</p>
        </div>
      </div>
    </div>
  );
}
