import { AuthContext } from "../../contexts/AuthContext";

import { Container } from "../Container/Container";
import { Mobmenu } from "./Mobmenu/Mobmenu";
import { useState, useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../../images/logo.svg";
import Search from "../../images/search.svg";
import Bag from "../../images/bag.svg";
import Heart from "../../images/heart.svg";
import Menu from "../../images/menu.svg";

import style from "./Header.module.scss";

// activePage може бути "home", "shop", "blog", "sale", "contact us"
export function Header({ activePage }) {
  const navigate = useNavigate();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const auth = useContext(AuthContext);

	const handleMenuChange = (ev) => {
		if (ev.target === ev.currentTarget || ev.currentTarget.className === `${style.header__menu}`) {
			document.querySelector("body").classList.toggle("mob-open");

			setMenuOpen(!isMenuOpen);
		}
	};

	const handleCreateNewAccClicked = (e) => {
    e.preventDefault();
	//TODO:
    // navigate("/CreateNewAcountPage", { replace: false });
	}

	return (
		<header className={style.header}>
			<Mobmenu open={isMenuOpen} activePage={activePage} change={handleMenuChange} />
			<Container>
				<div className={style.header__wrap}>
					<button className={style.header__menu} onClick={handleMenuChange}>
						<img className={style.menu__icon} src={Menu} alt="Menu SVG" />{" "}
					</button>
					<img className={style.header__logo} src={Logo} alt="Logo SVG" />
					<div className={style.header__center}>
						<nav className={style.header__nav}>
							<ul className={style.nav__list}>
								<li>
									<NavLink to="/" className={({ isActive }) => (isActive ? `${style.nav__link} ${style.active}` : style.nav__link)}>
										HOME
									</NavLink>
								</li>
								<li>
									<NavLink to="/catalogpage" className={({ isActive }) => (isActive ? `${style.nav__link} ${style.active}` : style.nav__link)}>
										SHOP
									</NavLink>
								</li>
								<li>
									<a href="/#blog" className={style.nav__link}>
										BLOG
									</a>
								</li>
								<li>
									<NavLink to="/cartpage" className={({ isActive }) => (isActive ? `${style.nav__link} ${style.active}` : style.nav__link)}>
										CART
									</NavLink>
								</li>
								<li>
									<a href="#footer" className={style.nav__link}>
										CONTACT US
									</a>
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
						{auth.isLogin ? (
							<div className={style.header__authentication}>
								<a className={style.auth__link} href=".">
									{auth.email}
								</a>
							</div>
						) : (
							<div className={style.header__authentication}>
								<a className={style.auth__link} href=".">
									SIGN IN
								</a>
								<a className={style.auth__link} href="." onClick={handleCreateNewAccClicked}>
									CREATE AN ACCOUNT
								</a>
							</div>
						)}
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
	);
}
