import s from "./ShippingDetails.module.scss";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import ccsj from "countrycitystatejson";


export const ShippingDetails = ({ children, onBack, onSubmitInfo }) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const { shippingFormDetails, shippingInfo } = useSelector((state) => state.createOrder);

  const [statesList, setStatesList] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/LoginPage", { replace: true });
  };

  const handleFormInfo = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      email: form.email?.value || "",
      password: form.password?.value || "",
      firstName: form.firstName?.value || "",
      lastName: form.lastName?.value || "",
      company: form.company?.value || "",
      streetAddress: [form.street1?.value || "", form.street2?.value || "", form.street3?.value || ""],
      country: form.country?.value || "",
      stateProvince: form.stateProvince?.value || "",
      shippingMethod: form.shippingMethod?.value || "fixed",
      zip: form.zip?.value || "",
    };

    onSubmitInfo(formData);
  };

  const handleCountryChange = (e) => {
    const value = e.target.value;
    const foundCountry = ccsj.getCountries().find((c) => c.name.toLowerCase() === value.toLowerCase());
    setStatesList(foundCountry ? ccsj.getStatesByShort(foundCountry.shortName) : []);
  };

  return (
    <div className={s.ship__wrap}>
      <div>
        {!auth.isLogin && (
          <>
            <form className={s.ship__form} onSubmit={handleFormSubmit}>
              <h2 className={s.ship__title}>Shipping Address</h2>

              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Email Address <span className={s.ship__required}>*</span>
                </label>
                <input className={s.ship__input} type="email" placeholder="roni_cost@example.com" name="email" defaultValue={shippingFormDetails?.email || ""} required />
              </div>

              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Password <span className={s.ship__required}>*</span>
                </label>
                <input className={s.ship__input} type="password" placeholder="******************" name="password" defaultValue={shippingFormDetails?.password || ""} required />
              </div>

              <p className={s.ship__text}>You already have an account with us. Sign in or continue as guest.</p>

              <div className={s.ship__btns}>
                <button className={s["ship__btn--login"]} type="submit">
                  Login
                </button>
                <button className={s["ship__btn--restore"]}>Forgot Your Password?</button>
              </div>
            </form>

            <div className={s.ship__line}></div>
          </>
        )}

        <form className={s.ship__form} onSubmit={handleFormInfo}>
          <div className={s.ship__row}>
            <label className={s.ship__label}>
              First Name <span className={s.ship__required}>*</span>
            </label>
            <input className={s.ship__input} type="text" name="firstName" defaultValue={shippingInfo?.firstName || ""} required />
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>
              Last Name <span className={s.ship__required}>*</span>
            </label>
            <input className={s.ship__input} type="text" name="lastName" defaultValue={shippingInfo?.lastName || ""} required />
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>Company</label>
            <input className={s.ship__input} type="text" name="company" defaultValue={shippingInfo?.company || ""} />
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>
              Street Address <span className={s.ship__required}>*</span>
            </label>
            <div className={s.ship__wrapper}>
              <input className={s.ship__input} type="text" name="street1" defaultValue={shippingInfo?.streetAddress?.[0] || ""} placeholder="First address" required />
              <input className={s.ship__input} type="text" name="street2" defaultValue={shippingInfo?.streetAddress?.[1] || ""} placeholder="Second Address" />
              <input className={s.ship__input} type="text" name="street3" defaultValue={shippingInfo?.streetAddress?.[2] || ""} placeholder="Third address" />
            </div>
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>
              Country <span className={s.ship__required}>*</span>
            </label>
            <input className={s.ship__input} type="text" name="country" defaultValue={shippingInfo?.country || ""} onChange={handleCountryChange} required />
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>
              State/Province <span className={s.ship__required}>*</span>
            </label>
            <select name="stateProvince" className={s.ship__select} defaultValue={shippingInfo?.stateProvince || ""} required disabled={statesList.length === 0}>
              <option value="" disabled hidden>
                {statesList.length > 0 ? "Please select a region, state or province" : "Enter a valid country first"}
              </option>
              {statesList.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className={s.ship__row}>
            <label className={s.ship__label}>Zip/Postal Code</label>
            <input className={s.ship__input} type="number" name="zip" min={0} defaultValue={shippingInfo?.zip || ""} />
          </div>

          <h2 className={s.ship__title}>Shipping Methods</h2>
          <p className={s["ship__type-text"]}>Flate Rate</p>
          <div className="ship-form__list">
            <label className={s.ship__item}>
              <input className="ship-form__radio" type="radio" name="shippingMethod" value="fixed" defaultChecked={shippingInfo?.shippingMethod === "fixed"} />
              <div className={s.ship__methods}>
                <p className={s.ship__rate}>$5.00</p>
                <p className={s.ship__type}>Fixed</p>
                <p className={s.ship__type}>Flat Rate</p>
              </div>
            </label>

            <label className={s.ship__item}>
              <input className="ship-form__radio" type="radio" name="shippingMethod" value="table" defaultChecked={shippingInfo?.shippingMethod === "table"} />
              <div className={s.ship__methods}>
                <p className={s.ship__rate}>$10.00</p>
                <p className={s.ship__type}>Table Rate</p>
                <p className={s.ship__type}>Best Way</p>
              </div>
            </label>
          </div>

          <div className={s.ship__navigation}>
            <button className={s["ship__btn--next"]} type="submit">
              Next
            </button>

            <button className={s["ship__btn--back"]} type="button" onClick={onBack}>
              Back
            </button>
          </div>
        </form>
      </div>

      {children}
    </div>
  );
};
