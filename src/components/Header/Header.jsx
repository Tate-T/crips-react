import Logo from "../../images/logo.svg";
import Search from "../../images/search.svg";
import Bag from "../../images/bag.svg";
import Heart from "../../images/heart.svg";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Logo SVG" />
      <div>
        <nav>
          <ul>
            <li><a href=".">HOME</a></li>
            <li><a href=".">SHOP</a></li>
            <li><a href=".">BLOG</a></li>
            <li><a href=".">SALE</a></li>
            <li><a href=".">CONTACT US</a></li>
          </ul>
        </nav>
        <div>
          <img src={Search} alt="Search SVG" />
          <input type="text" placeholder="SEARCH" />
        </div>
      </div>
      <div>
        <div>
          <a href=".">SIGN IN</a>
          <a href=".">CREATE AN ACCOUNT</a>
        </div>
        <button>
          <img src={Heart} alt="Heart SVG" />
        </button>
        <a href=".">
          <img src={Bag} alt="Bag SVG" />
          <div>
            <p>Shopping Cart</p>
            <p>0,00 EUR</p>
          </div>
        </a>
      </div>
    </header>
  )
}

