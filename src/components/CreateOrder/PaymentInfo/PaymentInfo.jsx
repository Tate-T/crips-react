import s from "./PaymentInfo.module.scss";
import change from "../../../images/CreateOrder/change.svg";

export const PaymentInfo =({className})=> {
    return (
      <>
        <div className={className}>
          <ul className={s.payment__list}>
            <li className={s.payment__item}>
              <div>
                <h2 className={s.payment__title}>Shipping Address:</h2>
                <a className={s.payment__address} href="#">
                  Alex Driwer <br /> Moskovski prospect 39/1, Apt. 147 Vitebsk,
                  Vitebsk region 210038 Belarus{" "}
                </a>
                <a className={s.payment__num} href="to:+375292169179">
                  +375292169179
                </a>
              </div>
              <button className={s["payment__btn--change"]}>
                <img src={change} alt="change icon" />
              </button>
            </li>
            <li className={s.payment__item}>
              <div>
                <h2 className={s.payment__title}>Shipping Method:</h2>
                <p className={s.payment__rate}>Flat Rate - Fixed</p>
              </div>
              <button className={s["payment__btn--change"]}>
                <img src={change} alt="change icon" />
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  }

