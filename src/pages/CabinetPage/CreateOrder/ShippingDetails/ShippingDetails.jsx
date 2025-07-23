import s from "./ShippingDetails.module.scss";
export const ShippingDetails = ({ children }) => {
  return (
    <>
      <div>
        <div className="shipping__wrap">
          <form className={s.ship__form}>
            <h2 className={s.ship__title}>Shipping Address</h2>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                Email Address <span className={s.ship__required}>*</span>
              </label>
              <input
                className={s.ship__input}
                type="email"
                placeholder="roni_cost@example.com"
                required
              />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>Password</label>
              <input
                className={s.ship__input}
                type="password"
                placeholder="******************"
              />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>Zip/Postal Code</label>
              <input className={s.ship__input} type="number" min={0}/>
            </div>
            <p className={s.ship__text}>
              You already have an account with us. Sign in or continue as guest.
            </p>
            <div className={s.ship__btns}>
              <button className={s['ship__btn--login']}>Login</button>
              <button className={s['ship__btn--restore']}>
                Forgot Your Password?
              </button>
            </div>
          </form>
          <div className={s.ship__line}></div>
          <form className={s.ship__form}>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                First Name <span className={s.ship__required}>*</span>
              </label>
              <input className={s.ship__input} type="text" required />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                Last Name <span className={s.ship__required}>*</span>
              </label>
              <input className={s.ship__input} type="text" required />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>Company</label>
              <input className={s.ship__input} type="text" />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                Street Address <span className={s.ship__required}>*</span>
              </label>
              <div className={s.ship__wrapper}>
                <input className={s.ship__input} type="text" required />
                <input className={s.ship__input} type="text" required />
                <input className={s.ship__input} type="text" required />
              </div>
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                Country <span className={s.ship__required}>*</span>
              </label>
              <input className={s.ship__input} type="text" required />
            </div>
            <div className={s.ship__row}>
              <label className={s.ship__label}>
                State/Province <span className={s.ship__required}>*</span>
              </label>
              <select name="regions" id="#" className={s.ship__select}>
                <option value="base" disabled selected hidden>
                  Please select a region, state or province
                </option>
                <option value="base" disabled selected hidden>
                  Please select a region, state or province
                </option><option value="base" disabled selected hidden>
                  Please select a region, state or province
                </option>
              </select>
            </div>
          </form>
          <form className={s.ship__form}>
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
        {children}
      </div>
    </>
  );
};
