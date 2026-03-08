import styles from "../../pages/CartPage/CartPage.module.scss";

export const CartSummaryForm = ({ subtotal, handleSubmit }) => {
  return (
    <form className={styles.cart__form} onSubmit={handleSubmit}>
      <div className={styles.cart__details}>
        <h6>Apply Discount Code</h6>
        <div className={styles.cart__details__wrapper}>
          <input
            className={styles.cart__details__input}
            type="text"
            placeholder="Enter discount code"
          />
          <button type="button" className={styles.cart__details__btn}>
            Apply
          </button>
        </div>
        <div>
          <h6>Estimate Shipping and Tax</h6>
          <div></div>
        </div>
        <p className={styles.cart__details__subtitle}>
          Enter your destination to get a shipping estimate.
        </p>
        <div className={styles.cart__details__shipping}>
          <div className={styles.cart__details__information}>
            <p className={styles.cart__details__info}>
              Country<span className={styles.cart__details__info__red}>*</span>
            </p>
            <select name="countries" id="countries-select" className={styles.cart__details__select}>
              <option value="United States">United States</option>
            </select>
          </div>
          <div className={styles.cart__details__information}>
            <p className={styles.cart__details__info}>
              State/Province<span className={styles.cart__details__info__red}>*</span>
            </p>
            <select name="states" id="states-select" className={styles.cart__details__select}>
              <option value="Alaska">Alaska</option>
            </select>
          </div>
          <div className={styles.cart__details__information}>
            <p className={styles.cart__details__info}>Zip/Postal Code</p>
            <input name="postCode" type="text" className={styles.cart__details__postcode} />
          </div>
        </div>
        <p className={styles.cart__details__tax}>Flat Rate</p>
        <div>
          <input type="radio" name="shipping" value="flat" id="flat" />
          <label htmlFor="flat" className={styles.cart__details__taxchoice}>
            Fixed 5.00 EUR
          </label>
        </div>
        <p className={styles.cart__details__tax}>Best Way</p>
        <div>
          <input type="radio" name="shipping" value="table" id="table" />
          <label htmlFor="table" className={styles.cart__details__taxchoice}>
            Table Rate 10.00 EUR
          </label>
        </div>
      </div>
      <div className={styles.cart__total}>
        <div className={styles.cart__total__subtitle}>
          <p>Subtotal</p>
          <p>{subtotal.toFixed(2)} EUR</p>
        </div>
        <div className={styles.cart__total__tax}>
          <p>Tax</p>
          <p>0.00 EUR</p>
        </div>
        <div className={styles.cart__total__title}>
          <p>Order Total</p>
          <p>{subtotal.toFixed(2)} EUR</p>
        </div>
        <div className={styles.cart__total__line}></div>
        <button type="button" className={styles.cart__total__checkout__multiple}>
          Check Out with Multiple Addresses
        </button>
        <button type="submit" className={styles.cart__total__checkout}>
          proceed to checkout
        </button>
      </div>
    </form>
  );
};