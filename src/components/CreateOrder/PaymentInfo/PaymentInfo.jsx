import { useState } from "react";
import s from "./PaymentInfo.module.scss";
import change from "../../../images/CreateOrder/change.svg";

export const PaymentInfo = ({ className }) => {
  const [shippingAddress, setShippingAddress] = useState("Alex Driwer, Moskovski prospect 39/1, Apt. 147 Vitebsk, Vitebsk region 210038 Belarus");
  const [phoneNumber, setPhoneNumber] = useState("+375292169179");
  const [shippingMethod, setShippingMethod] = useState("Flat Rate - Fixed");

  const [editAddress, setEditAddress] = useState(false);
  const [editMethod, setEditMethod] = useState(false);

  return (
    <div className={className}>
      <ul className={s.payment__list}>
        <li className={s.payment__item}>
          <div>
            <h2 className={s.payment__title}>Shipping Address:</h2>
            {editAddress ? (
              <>
                <input className={s.payment__input} type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
                <input className={s.payment__input} type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </>
            ) : (
              <>
                <a className={s.payment__address} href="#">
                  {shippingAddress}
                </a>
                <a className={s.payment__num} href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </a>
              </>
            )}
          </div>
          <button className={s["payment__btn--change"]} onClick={() => setEditAddress((prev) => !prev)}>
            <img src={change} alt="change icon" />
          </button>
        </li>

        <li className={s.payment__item}>
          <div>
            <h2 className={s.payment__title}>Shipping Method:</h2>
            {editMethod ? <input className={s.payment__input} value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)} /> : <p className={s.payment__rate}>{shippingMethod}</p>}
          </div>
          <button className={s["payment__btn--change"]} onClick={() => setEditMethod((prev) => !prev)}>
            <img src={change} alt="change icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};
