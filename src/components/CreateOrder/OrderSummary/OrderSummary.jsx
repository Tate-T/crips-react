import s from "./OrderSummary.module.scss";
import arrow from "../../../images/CreateOrder/arrow-bottom.svg";
import dress1 from "../../../images/mini-catalog-04.jpg";
import dress2 from "../../../images/mini-catalog-02.jpg";
export const OrderSummary = () => {
  return (
    <div className={s.order__wrap}>
      <h2 className={s.order__title}>Order Summary</h2>
      <div>
        <div className={s.order__ans}>
          <ul className={s.order__list}>
            <li className={s.order__item}>
              <p>Cart Subtotal</p>
              <p>$56.25</p>
            </li>
            <li className={s.order__item}>
              <p>Shipping</p>
              <p>$5.00</p>
            </li>
            <li className={s.order__item}>
              <p>Flat Rate - Fixed</p>
            </li>
          </ul>
          <div className={s['order__total-wrap']}>
            <p>Order Total</p>
            <span>120.00 EUR</span>
          </div>
        </div>
        <div className={s.order__que}>
          <p className={s.order__info}>1 Item in Cart</p>
          <img className={s.order__icon} src={arrow} alt="arrow icon" />
        </div>
      </div>
      <ul className={s.order__list}>
        <li className={s.order__item}>
          <img className={s.order__img} src={dress1} alt="dress" />
          <div className={s.order__subwrap}>
            <div>
              <h3 className={s.order__subtitle}>Angels malu zip jeans slim black used</h3>
              <p className={s.order__quantity}>
                Qty: <span>1</span>
              </p>
              <button className={s.order__viewBtn}>
                View Details
                <img className={s.order__icon} src={arrow} alt="arrow icon" />
              </button>
            </div>
            <p>129,00 EUR</p>
          </div>
        </li>
        <li className={s.order__item}>
          <img className={s.order__img} src={dress2} alt="dress" />
          <div className={s.order__subwrap}>
            <div>
              <h3 className={s.order__subtitle}>Angels malu zip jeans slim black used</h3>
              <p className={s.order__quantity}>
                Qty: <span>1</span>
              </p>
              <button className={s.order__viewBtn}>
                View Details
                <img className={s.order__icon} src={arrow} alt="arrow icon" />
              </button>
            </div>
            <p>129,00 EUR</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
