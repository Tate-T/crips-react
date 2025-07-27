import change from "../../../../images/CreateOrder/change.svg";
import arrow from "../../../../images/CreateOrder/arrow-bottom.svg";
import s from "./PaymentDetails.module.scss";
export const PaymentDetails = ({ children }) => {
  return (
    <>
      <div className={s['payment__wrap--main']}>
        <div className={s.payment__wrap}>
          <form>
            <h2 className={s.payment__title}>Payment Method:</h2>
            <p className={s.payment__text}>Check / Money order</p>
            <label className={s.payment__label}>
              <input type="checkbox" />
              My billing and shipping address are the same
            </label>
            <div className={s.payment__subwrap}>
              <a href="#" className={s.payment__address}>
                Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk,
                Vitebsk region 210038 Belarus
              </a>
              <a className={s.payment__num} href="to:+375292169179">
                +375292169179
              </a>
            </div>
            <div className={s.payment__btns}>
              <button className={s["payment__btn--place"]}>Place Order</button>
              <button className={s["payment__btn--next"]}>Next</button>
            </div>
          </form>
          <form>
            <h2 className={s.payment__title}>Apply Discount Code</h2>
            <label className={s['payment__label--discount']}>
              <input type="text" placeholder="Enter discount code" />
              <button>Apply Discount</button>
            </label>
          </form>
        </div>
        <div>
          {children}
          <ul className={s.payment__list}>
            <li className={s.payment__item}>
              <div>
                <h2 className={s.payment__title}>Payment Method:</h2>
                <a className={s.payment__address} href="#">
                  Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147
                  Vitebsk, Vitebsk region 210038 Belarus{" "}
                </a>
                <a className={s.payment__num}  href="to:+375292169179">+375292169179 </a>
              </div>
              <button className={s['payment__btn--change']}>
                <img src={change} alt="arrow icon" />
              </button>
            </li>
            <li className={s.payment__item}>
              <div>
                <h2 className={s.payment__title}>Shipping Method:</h2>
                <p className={s.payment__rate}>Flat Rate - Fixed</p>
              </div>
              <button className={s['payment__btn--change']}>
                <img src={change} alt="arrow icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
