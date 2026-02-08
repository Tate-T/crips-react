import { useNavigate } from "react-router-dom";
import { useState } from "react";
import s from "./PaymentDetails.module.scss";

export const PaymentDetails = ({ children, onBack, onSubmitPayment }) => {
  const navigate = useNavigate();

  const [isSameAddress, setIsSameAddress] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsSameAddress(checked);
  };

  const handleDiscountChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = (e) => {
    e.preventDefault();
    if (discountCode.trim() === "") {
      console.log("No discount code entered");
      return;
    }
    console.log("Discount code applied:", discountCode);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const paymentData = {
      isSameAddress,
      discountCode,
    };

    onSubmitPayment(paymentData);

      navigate("/", { replace: true });
  };

  return (
    <div className={s["payment__wrap--main"]}>
      <div className={s.payment__wrap}>
        <form onSubmit={handlePlaceOrder}>
          <h2 className={s.payment__title}>Shipping Address</h2>
          <p className={s.payment__text}>Check / Money order</p>

          <label className={s.payment__label}>
            <input type="checkbox" checked={isSameAddress} onChange={handleCheckboxChange} />
            My billing and shipping address are the same
          </label>

          <div className={s.payment__subwrap}>
            <a href="#" className={s.payment__address}>
              Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk, Vitebsk region 210038 Belarus
            </a>
            <a className={s.payment__num} href="tel:+375292169179">
              +375292169179
            </a>
          </div>

          <div className={s.payment__btns}>
            <button type="submit" className={s["payment__btn--place"]}>
              Place Order
            </button>
            <button type="button" className={s["payment__btn--next"]} onClick={onBack}>
              Back
            </button>
          </div>
        </form>

        <form onSubmit={handleApplyDiscount}>
          <h2 className={s.payment__title}>Apply Discount Code</h2>
          <label className={s["payment__label--discount"]}>
            <input type="text" placeholder="Enter discount code" value={discountCode} onChange={handleDiscountChange} />
            <button type="submit" className={s["payment__btn--tablet"]}>
              Apply Discount
            </button>
            <button type="submit" className={s["payment__btn--mobile"]}>
              Apply
            </button>
          </label>
        </form>
      </div>

      <div>{children}</div>
    </div>
  );
};
