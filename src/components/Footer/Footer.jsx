import { Container } from "../Container/Container";
import style from "./Footer.module.scss";
import check from "../../images/check.svg";
import logo from "../../images/logo.svg";
import insta from "../../images/instagram.svg";
import fb from "../../images/facebook.svg";
import twitt from "../../images/twitter.svg";
import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";
export const Footer = () => {
  const mainFooterOpen = (e) => {
    const list = e.currentTarget
      .closest(`.${style.mainFooterItem}`)
      .querySelector(`.${style.footerList}`);
    if (list) list.style.display = "flex";
  };
  const mainFooterClose = (e) => {
    const list = e.currentTarget
      .closest(`.${style.mainFooterItem}`)
      .querySelector(`.${style.footerList}`);
    if (list) list.style.display = "none";
  };

  return (
    <footer className={`${style.footer} `}>
     
      <div className={style.topFooter}>
       <Container>
        <ul className={style.topFooterList}>
          <li className={style.topFooterItem}>
            <img className={style.topFooterSvg} src={check} />
            <p className={style.topFooterText}>Duties and Taxes Guaranteed</p>
          </li>
          <li className={style.topFooterItem}>
            <img className={style.topFooterSvg} src={check} />
            <p className={style.topFooterText}>Free Express Shipping</p>
          </li>
          <li className={style.topFooterItem}>
            <img className={style.topFooterSvg} src={check} />
            <p className={style.topFooterText}>Customer Love</p>
          </li>
          <li className={style.topFooterItem}>
            <img className={style.topFooterSvg} src={check} />
            <p className={style.topFooterText}>Easy Returns</p>
          </li>
          <li className={style.topFooterItem}>
            <img className={style.topFooterSvg} src={check} />
            <p className={style.topFooterText}>Secure Payment</p>
          </li>
        </ul>
       </Container>
      </div>
      <div className={style.mainFooter}>
        <Container>
        <ul className={style.mainFooterList}>
          <li className={style.mainFooterItem}>
            <div className={style.mainFooterLogo}>
              <img src={logo} className={style.mainFooterSvg} />
            </div>
          </li>
          <li className={style.mainFooterItem}>
            <div className={style.footerTitleCenter}>
              <h3 className={style.mainFooterItemTitle}>features</h3>
              <button
                className={`${style.mainFooterOpenButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterOpen}
              >
                <img src={plus} alt="" className={style.footerFunctunalSvg} />
              </button>
              <button
                className={`${style.mainFooterCloseButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterClose}
              >
                <img src={minus} alt="" className={style.footerFunctunalSvg} />
              </button>
            </div>
            <ul className={`${style.footerFeaturesList} ${style.footerList}`}>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  men
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  Women
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  boys
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  girls
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  new arrivals
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  shoes
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  cothes
                </a>
              </li>
              <li className={style.footerFeaturesItem}>
                <a href="#" className={style.footerFeaturesItemLink}>
                  accessories
                </a>
              </li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <div className={style.footerTitleCenter}>
              <h3 className={style.mainFooterItemTitle}>Menu</h3>
              <button
                className={`${style.mainFooterOpenButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterOpen}
              >
                <img src={plus} alt="" className={style.footerFunctunalSvg} />
              </button>
              <button
                className={`${style.mainFooterCloseButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterClose}
              >
                <img src={minus} alt="" className={style.footerFunctunalSvg} />
              </button>
            </div>
            <ul className={`${style.footerMenuList} ${style.footerList}`}>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  About us
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  contact us
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  my account
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  orders history
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  MY WISHLIST
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  BLOG
                </a>
              </li>
              <li className={style.footerMenuItem}>
                <a href="#" className={style.footerMenuItemLink}>
                  LOGIN
                </a>
              </li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <div className={style.footerTitleCenter}>
              <h3 className={style.mainFooterItemTitle}>contact us</h3>
              <button
                className={`${style.mainFooterOpenButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterOpen}
              >
                <img src={plus} alt="" className={style.footerFunctunalSvg} />
              </button>
              <button
                className={`${style.mainFooterCloseButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterClose}
              >
                <img src={minus} alt="" className={style.footerFunctunalSvg} />
              </button>
            </div>
            <ul className={`${style.footerContactUsList} ${style.footerList}`}>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>Address:</h4>
                <a href="#" className={style.mainFooterItemContacts}>
                  123 STREET NAME, CITY, ENGLAND
                </a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>Phone:</h4>
                <a href="#" className={style.mainFooterItemContacts}>
                  (123) 456-7890
                </a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>email:</h4>
                <a href="#" className={style.mainFooterItemContacts}>
                  MAIL@EXAMPLE.COM
                </a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>
                  working days/hours
                </h4>
                <a href="#" className={style.mainFooterItemContacts}>
                  MON - SUN / 9:00AM - 8:00PM
                </a>
              </li>
            </ul>
          </li>

          <li className={style.mainFooterItem}>
            <div className={style.footerTitleCenter}>
              <h3 className={style.mainFooterItemTitle}>follow us</h3>
              <button
                className={`${style.mainFooterOpenButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterOpen}
              >
                <img src={plus} alt="" className={style.footerFunctunalSvg} />
              </button>
              <button
                className={`${style.mainFooterCloseButton} ${style.footerFunctunalButton}`}
                onClick={mainFooterClose}
              >
                <img src={minus} alt="" className={style.footerFunctunalSvg} />
              </button>
            </div>
            <ul className={`${style.footerContactUsList} ${style.footerList}`}>
              <li className={style.footerFollowUsItem}>
                <img className={style.footerFollowUsIcon} src={fb} />
                <a href="#" className={style.footerFollowUsSocialMedia}>
                  FACEBOOK
                </a>
              </li>
              <li className={style.footerFollowUsItem}>
                <img className={style.footerFollowUsIcon} src={twitt} />
                <a href="#" className={style.footerFollowUsSocialMedia}>
                  TWITTER
                </a>
              </li>
              <li className={style.footerFollowUsItem}>
                <img className={style.footerFollowUsIcon} src={insta} />
                <a href="#" className={style.footerFollowUsSocialMedia}>
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <div className={style.mainFooterSubscribe}>
              <h3 className={style.mainFooterItemTitle}>join us</h3>
              <a href="#" className={style.mainFooterSubscribeText}>
                Subscribe to our newsletters
              </a>
              <input
                name="mainFooterSubscribeInput"
                type="email"
                className={style.mainFooterSubscribeInput}
                placeholder="Email address"
              />
              <button className={style.mainFooterSubscribeButton}>
                Subscribe!
              </button>
            </div>
          </li>
        </ul>
     
      <div className={style.footerBottom}>
        <hr className={style.footerBottomHr} />
        <p className={style.footerBottomText}>
          © 2019. Crisp theme Developed by Belvg
        </p>
      </div>
       </Container>
       </div>
    </footer>
  );
};
