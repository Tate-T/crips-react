export const ShoppingDetails = () => {
  return (
    <>
      <div className="shopping__wrap">
        <form className="shop-form">
          <h2 className="shop-form__title">Shipping Address</h2>
          <div className="shop-form__row">
            <label htmlFor="#">
              Email Address <span className="shop-form__reqired">*</span>
            </label>
            <input
              className="shop-form__input"
              type="email"
              placeholder="roni_cost@example.com"
              required
            />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">Password</label>
            <input
              className="shop-form__input"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">Zip/Postal Code</label>
            <input className="shop-form__input" type="number" />
          </div>
          <p className="shop-form__text">
            You already have an account with us. Sign in or continue as guest.
          </p>
          <div className="shop-form__btns">
            <button className="shop-form__btn--login">Login</button>
            <button className="shop-form__btn--restore">
              Forgot Your Password?
            </button>
          </div>
        </form>
        <div className="shopping__line"></div>
        <form className="shop-form">
          <div className="shop-form__row">
            <label htmlFor="#">
              First Name <span className="shop-form__reqired">*</span>
            </label>
            <input className="shop-form__input" type="text" required />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">
              Last Name <span className="shop-form__reqired">*</span>
            </label>
            <input className="shop-form__input" type="text" required />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">Company</label>
            <input className="shop-form__input" type="text" />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">
              Street Address <span className="shop-form__reqired">*</span>
            </label>
            <input className="shop-form__input" type="text" required />
            <input className="shop-form__input" type="text" required />
            <input className="shop-form__input" type="text" required />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">
              Country <span className="shop-form__reqired">*</span>
            </label>
            <input className="shop-form__input" type="text" required />
          </div>
          <div className="shop-form__row">
            <label htmlFor="#">
              State/Province <span className="shop-form__reqired">*</span>
            </label>
            <select name="regiond" id="#">
              <option value="base" disabled selected hidden>
                Please select a region, state or province
              </option>
            </select>
          </div>
        </form>
        <form className="shop-form">
          <h2 className="shop-form__title">Shipping Methods</h2>
          <fieldset className="shop-form__list">
            <label className="shop-form__item">
              <input
                className="shop-form__radio"
                type="radio"
                name="shipping"
                value="fixed"
                defaultChecked
              />
              <div className="shop-form__methods">
                <p className="shop-form__rate">$5.00</p>
                <p className="shop-form__type">Fixed</p>
                <p className="shop-form__type">Flat Rate</p>
              </div>
            </label>
            <label className="shop-form__item shop-form__item--disabled">
              <input
                className="shop-form__radio"
                type="radio"
                name="shipping"
                value="table"
              />
              <div className="shop-form__methods">
                <p className="shop-form__rate">$10.00</p>
                <p className="shop-form__type">Table Rate</p>
                <p className="shop-form__type">Best Way</p>
              </div>
            </label>
          </fieldset>
          <div className="shop-form__navigation">
            <button className="shop-form__btn--next">Next</button>
            <button className="shop-form__btn--back">Back</button>
          </div>
        </form>
      </div>
    </>
  );
};
