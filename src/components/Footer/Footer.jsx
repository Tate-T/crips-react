import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.topFooter}>
        <ul className={style.topFooterList}>
          <li className={style.topFooterItem}>
            <svg className={style.topFooterSvg}></svg>
            <p className={style.topFooterText}>Duties and Taxes Guaranteed</p>
          </li>
          <li className={style.topFooterItem}>
            <svg className={style.topFooterSvg}></svg>
            <p className={style.topFooterText}>Free Express Shipping</p>
          </li>
          <li className={style.topFooterItem}>
            <svg className={style.topFooterSvg}></svg>
            <p className={style.topFooterText}>Customer Love</p>
          </li>
          <li className={style.topFooterItem}>
            <svg className={style.topFooterSvg}></svg>
            <p className={style.topFooterText}>Easy Returns</p>
          </li>
          <li className={style.topFooterItem}>
            <svg className={style.topFooterSvg}></svg>
            <p className={style.topFooterText}>Secure Payment</p>
          </li>
        </ul>
      </div>
      <div className={style.mainFooter}>
        <ul className={style.mainFooterList}>
          <li className={style.mainFooterItem}>
            <div className={style.mainFooterLogo}>
              <svg className={style.mainFooterSvg}></svg>
            </div>
          </li>
          <li className={style.mainFooterItem}>
            <h3 className={style.mainFooterItemTitle}>features</h3>
            <ul className={style.footerFeaturesList}>
              <li className={style.footerFeaturesItem}><a href="#">men</a></li>
              <li className={style.footerFeaturesItem}><a href="#">Women</a></li>
              <li className={style.footerFeaturesItem}><a href="#">boys</a></li>
              <li className={style.footerFeaturesItem}><a href="#">girls</a></li>
              <li className={style.footerFeaturesItem}><a href="#">new arrivals</a></li>
              <li className={style.footerFeaturesItem}><a href="#">shoes</a></li>
              <li className={style.footerFeaturesItem}><a href="#">cothes</a></li>
              <li className={style.footerFeaturesItem}><a href="#">accessories</a></li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <h3 className={style.mainFooterItemTitle}>Menu</h3>
            <ul className={style.footerMenuList}>
              <li className={style.footerMenuItem}><a href="#">About us</a></li>
              <li className={style.footerMenuItem}><a href="#">contact us</a></li>
              <li className={style.footerMenuItem}><a href="#">my account</a></li>
              <li className={style.footerMenuItem}><a href="#">orders history</a></li>
              <li className={style.footerMenuItem}><a href="#">MY WISHLIST</a></li>
              <li className={style.footerMenuItem}><a href="#">BLOG</a></li>
              <li className={style.footerMenuItem}><a href="#">LOGIN</a></li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <h3 className={style.mainFooterItemTitle}>contact us</h3>
            <ul className={style.footerContactUsList}>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>Address:</h4>
                <a href="#" className={style.mainFooterItemContacts}>123 STREET NAME, CITY, ENGLAND</a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>Phone:</h4>
                <a href="#" className={style.mainFooterItemContacts}>(123) 456-7890</a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>email:</h4>
                <a href="#" className={style.mainFooterItemContacts}>MAIL@EXAMPLE.COM</a>
              </li>
              <li className={style.footerContactUsItem}>
                <h4 className={style.mainFooterItemSubtitle}>working days/hours</h4>
                <a href="#" className={style.mainFooterItemContacts}>MON - SUN / 9:00AM - 8:00PM</a>
              </li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <h3 className={style.mainFooterItemTitle}>follow us</h3>
            <ul className={style.footerFollowUsList}>
              <li className={style.footerFollowUsItem}>
                <svg className={style.footerFollowUsIcon}>Facebook</svg>
                <a href="#" className={style.footerFollowUsSocialMedia}>FACEBOOK</a>
              </li>
              <li className={style.footerFollowUsItem}>
                <svg className={style.footerFollowUsIcon}>Twitter</svg>
                <a href="#" className={style.footerFollowUsSocialMedia}>TWITTER</a>
              </li>
              <li className={style.footerFollowUsItem}>
                <svg className={style.footerFollowUsIcon}>Instagram</svg>
                <a href="#" className={style.footerFollowUsSocialMedia}>INSTAGRAM</a>
              </li>
            </ul>
          </li>
          <li className={style.mainFooterItem}>
            <div className={style.mainFooterSubscribe}>
              <h3 className={style.mainFooterItemTitle}>join us</h3>
              <p className={style.mainFooterSubscribeText}>Subscribe to our newsletters</p>
              <input type="email" className={style.mainFooterSubscribeInput} placeholder="Email address" />
              <button className={style.mainFooterSubscribeButton}>Subscribe!</button>
            </div>
          </li>
        </ul>
      </div>
      <div className={style.footerBottom}>
        <hr className={style.footerBottomHr} />
        <p className={style.footerBottomText}>© 2019. Crisp theme Developed by Belvg</p>
      </div>
    </footer>
  );
};
