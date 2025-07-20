export const footer = () => {
  return (
    <footer className="footer container">
      <div className="top-footer">
        <ul className="top-footer-list">
          <li className="top-footer-tiem">
            <svg className="top-footer-svg"></svg>
            <p className="top-footer-text">Duties and Taxes Guaranteed</p>
          </li>
          <li className="top-footer-tiem">
            <svg className="top-footer-svg"></svg>
            <p className="top-footer-text">Free Express Shipping</p>
          </li>
          <li className="top-footer-tiem">
            <svg className="top-footer-svg"></svg>
            <p className="top-footer-text">Customer Love</p>
          </li>
          <li className="top-footer-tiem">
            <svg className="top-footer-svg"></svg>
            <p className="top-footer-text">Easy Returns</p>
          </li>
          <li className="top-footer-tiem">
            <svg className="top-footer-svg"></svg>
            <p className="top-footer-text">Secure Payment</p>
          </li>
        </ul>
      </div>
      <div className="main-footer">
        <ul className="main-footer-list">
          <li className="main-footer-item">
            <div className="main-footer-logo">
              <svg className="main-footer-svg"></svg>
            </div>
          </li>
          <li className="main-footer-item">
            <h3 className="main-footer-item-title">features</h3>
            <ul className="footer-features-list">
              <li className="footer-features-item">
                <a href="#">men</a>
              </li>
              <li className="footer-features-item">
                <a href="#">Women</a>
              </li>
              <li className="footer-features-item">
                <a href="#">boys</a>
              </li>
              <li className="footer-features-item">
                <a href="#">girls</a>
              </li>
              <li className="footer-features-item">
                <a href="#">new arrivals</a>
              </li>
              <li className="footer-features-item">
                <a href="#">shoes</a>
              </li>
              <li className="footer-features-item">
                <a href="#">cothes</a>
              </li>
              <li className="footer-features-item">
                <a href="#">accessories</a>
              </li>
            </ul>
          </li>
          <li className="main-footer-item">
            <h3 className="main-footer-item-title">Menu</h3>
            <ul className="footer-menu-list">
              <li className="footer-menu-item">
                <a href="#">About us</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">contact us</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">my account</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">orders history</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">MY WISHLIST</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">BLOG</a>
              </li>
              <li className="footer-menu-item">
                <a href="#">LOGIN</a>
              </li>
            </ul>
          </li>
          <li className="main-footer-item">
            <h3 className="main-footer-item-title">contact us</h3>
            <ul className="footer-contactUs-list">
              <li className="footer-contactUs-item">
                <h4 className="mian-footer-item-subtitle">Address:</h4>
                <a href="#" className="mian-footer-item-contacts">
                  123 STREET NAME, CITY, ENGLAND
                </a>
              </li>
              <li className="footer-contactUs-item">
                <h4 className="mian-footer-item-subtitle">Phone:</h4>
                <a href="#" className="mian-footer-item-contacts">
                  (123) 456-7890
                </a>
              </li>
              <li className="footer-contactUs-item">
                <h4 className="mian-footer-item-subtitle">email:</h4>
                <a href="#" className="mian-footer-item-contacts">
                  MAIL@EXAMPLE.COM
                </a>
              </li>
              <li className="footer-contactUs-item">
                <h4 className="mian-footer-item-subtitle">
                  working days/hours
                </h4>
                <a href="#" className="mian-footer-item-contacts">
                  MON - SUN / 9:00AM - 8:00PM
                </a>
              </li>
            </ul>
          </li>
          <li className="main-footer-item">
            <h3 className="main-footer-item-title">follow us</h3>
            <ul className="footer-followUs-list">
              <li className="footer-followUs-item">
                <svg className="footer-followUs-icon">Facebook</svg>
                <a href="#" className="footer-followUs-socialMedia ">
                  FACEBOOK
                </a>
              </li>
              <li className="footer-followUs-item">
                <svg className="footer-followUs-icon">Twitter</svg>
                <a href="#" className="footer-followUs-socialMedia ">
                  TWITTER
                </a>
              </li>
              <li className="footer-followUs-item">
                <svg className="footer-followUs-icon">Instagram</svg>
                <a href="#" className="footer-followUs-socialMedia ">
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </li>
          <li className="main-footer-item">
            <div className="main-footer-subscribe">
              <h3 className="main-footer-item-title">join us</h3>
              <p className="main-footer-subscribe-text">
                Subscribe to our newsletters
              </p>
              <input
                type="email"
                className="main-footer-subscribe-input"
                placeholder="Email address"
              />
              <button className="main-footer-subscribe-button">Subscribe!</button>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
