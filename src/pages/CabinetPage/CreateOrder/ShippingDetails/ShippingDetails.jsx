export const ShippingDetails = () => {
  return (
    <>
      <div>
        <div className="shipping__wrap">
          <form className="ship-form">
            <h2 className="ship-form__title">Shipping Address</h2>
            <div className="ship-form__row">
              <label htmlFor="#">
                Email Address <span className="ship-form__reqired">*</span>
              </label>
              <input
                className="ship-form__input"
                type="email"
                placeholder="roni_cost@example.com"
                required
              />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">Password</label>
              <input
                className="ship-form__input"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">Zip/Postal Code</label>
              <input className="ship-form__input" type="number" />
            </div>
            <p className="ship-form__text">
              You already have an account with us. Sign in or continue as guest.
            </p>
            <div className="ship-form__btns">
              <button className="ship-form__btn--login">Login</button>
              <button className="ship-form__btn--restore">
                Forgot Your Password?
              </button>
            </div>
          </form>
          <div className="shipping__line"></div>
          <form className="ship-form">
            <div className="ship-form__row">
              <label htmlFor="#">
                First Name <span className="ship-form__reqired">*</span>
              </label>
              <input className="ship-form__input" type="text" required />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">
                Last Name <span className="ship-form__reqired">*</span>
              </label>
              <input className="ship-form__input" type="text" required />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">Company</label>
              <input className="ship-form__input" type="text" />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">
                Street Address <span className="ship-form__reqired">*</span>
              </label>
              <input className="ship-form__input" type="text" required />
              <input className="ship-form__input" type="text" required />
              <input className="ship-form__input" type="text" required />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">
                Country <span className="ship-form__reqired">*</span>
              </label>
              <input className="ship-form__input" type="text" required />
            </div>
            <div className="ship-form__row">
              <label htmlFor="#">
                State/Province <span className="ship-form__reqired">*</span>
              </label>
              <select name="regiond" id="#">
                <option value="base" disabled selected hidden>
                  Please select a region, state or province
                </option>
              </select>
            </div>
          </form>
          <form className="ship-form">
            <h2 className="ship-form__title">Shipping Methods</h2>
            <div className="ship-form__list">
              <label className="ship-form__item">
                <input
                  className="ship-form__radio"
                  type="radio"
                  name="shipping"
                  value="fixed"
                  defaultChecked
                />
                <div className="ship-form__methods">
                  <p className="ship-form__rate">$5.00</p>
                  <p className="ship-form__type">Fixed</p>
                  <p className="ship-form__type">Flat Rate</p>
                </div>
              </label>
              <label className="ship-form__item ship-form__item--disabled">
                <input
                  className="ship-form__radio"
                  type="radio"
                  name="shipping"
                  value="table"
                />
                <div className="ship-form__methods">
                  <p className="ship-form__rate">$10.00</p>
                  <p className="ship-form__type">Table Rate</p>
                  <p className="ship-form__type">Best Way</p>
                </div>
              </label>
            </div>
            <div className="ship-form__navigation">
              <button className="ship-form__btn--next">Next</button>
              <button className="ship-form__btn--back">Back</button>
            </div>
          </form>
        </div>
        <div>
          <h2>Order Summary</h2>
          <div>
            <div>
              <ul>
                <li>
                  <p>Cart Subtotal</p>
                  <p>$56.25</p>
                </li>
                <li>
                  <p>Shipping</p>
                  <p>$5.00</p>
                </li>
                <li>
                  <p>Flat Rate - Fixed</p>
                </li>
              </ul>
              <div>
                <p>Order Total</p>
                <span>120.00 EUR</span>
              </div>
            </div>
            <div>
              <p>1 Item in Cart</p>
              {/* <svg>
              <use href="#"></use>
            </svg> */}
            </div>
          </div>
          <ul>
            <li>
              <img src="#" alt="dress" />
              <div>
                <div>
                  <h3>Angels malu zip jeans slim black used</h3>
                  <p>
                    Qty: <span>1</span>
                  </p>
                  <button>
                    View Details
                    {/* <svg><use></use></svg> */}
                  </button>
                </div>
                <p>129,00 EUR</p>
              </div>
            </li>
            <li>
              <img src="#" alt="dress" />
              <div>
                <div>
                  <h3>Angels malu zip jeans slim black used</h3>
                  <p>
                    Qty: <span>1</span>
                  </p>
                  <button>
                    View Details
                    {/* <svg><use></use></svg> */}
                  </button>
                </div>
                <p>129,00 EUR</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
