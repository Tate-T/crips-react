import s from "./ShippingDetails.module.scss";
import { Component } from "react";
import ccsj from "countrycitystatejson";

export class ShippingDetails extends Component {
  state = {
    email: this.props.shippingForm?.email || "",
    password: this.props.shippingForm?.password || "",
    zip: this.props.shippingForm?.zip || "",
    firstName: this.props.shippingInfo?.firstName || "",
    lastName: this.props.shippingInfo?.lastName || "",
    company: this.props.shippingInfo?.company || "",
    street1: this.props.shippingInfo?.streetAddress?.[0] || "",
    street2: this.props.shippingInfo?.streetAddress?.[1] || "",
    street3: this.props.shippingInfo?.streetAddress?.[2] || "",
    country: this.props.shippingInfo?.country || "",
    stateProvince: this.props.shippingInfo?.stateProvince || "",
    shippingMethod: this.props.shippingInfo?.shippingMethod || "fixed",

    statesList: [],
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "radio" ? (checked ? value : this.state[name]) : value;
    this.setState({ [name]: val }, () => {
      if (name === "country") {
        const foundCountry = ccsj
          .getCountries()
          .find((country) => country.name.toLowerCase() === val.toLowerCase());
        if (foundCountry) {
          const states = ccsj.getStatesByShort(foundCountry.shortName);
          this.setState({ statesList: states });
        }
      }
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, zip } = this.state;
    this.props.onSubmitForm({ email, password, zip });
  };

  handleFormInfo = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      company,
      street1,
      street2,
      street3,
      country,
      stateProvince,
      shippingMethod,
    } = this.state;

    const data = {
      firstName,
      lastName,
      company,
      streetAddress: [street1, street2, street3],
      country,
      stateProvince,
      shippingMethod,
    };

    this.props.onSubmitInfo(data);
  };

  render() {
    const {
      email,
      password,
      zip,
      firstName,
      lastName,
      company,
      street1,
      street2,
      street3,
      country,
      stateProvince,
      shippingMethod,
      statesList,
    } = this.state;
    return (
      <>
        <div className={s.ship__wrap}>
          <div>
            <form className={s.ship__form} onSubmit={this.handleFormSubmit}>
              <h2 className={s.ship__title}>Shipping Address</h2>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Email Address <span className={s.ship__required}>*</span>
                </label>
                <input
                  className={s.ship__input}
                  type="email"
                  placeholder="roni_cost@example.com"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Password <span className={s.ship__required}>*</span>
                </label>
                <input
                  className={s.ship__input}
                  type="password"
                  placeholder="******************"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>Zip/Postal Code</label>
                <input
                  className={s.ship__input}
                  type="number"
                  name="zip"
                  min={0}
                  value={zip}
                  onChange={this.handleChange}
                />
              </div>
              <p className={s.ship__text}>
                You already have an account with us. Sign in or continue as
                guest.
              </p>
              <div className={s.ship__btns}>
                <button className={s["ship__btn--login"]} type="submit">
                  Login
                </button>
                <button className={s["ship__btn--restore"]}>
                  Forgot Your Password?
                </button>
              </div>
            </form>

            <div className={s.ship__line}></div>

            <form className={s.ship__form} onSubmit={this.handleFormInfo}>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  First Name <span className={s.ship__required}>*</span>
                </label>
                <input
                  className={s.ship__input}
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Last Name <span className={s.ship__required}>*</span>
                </label>
                <input
                  className={s.ship__input}
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>Company</label>
                <input
                  className={s.ship__input}
                  type="text"
                  name="company"
                  value={company}
                  onChange={this.handleChange}
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Street Address <span className={s.ship__required}>*</span>
                </label>
                <div className={s.ship__wrapper}>
                  <input
                    className={s.ship__input}
                    type="text"
                    name="street1"
                    value={street1}
                    onChange={this.handleChange}
                    placeholder="First address"
                    required
                  />
                  <input
                    className={s.ship__input}
                    type="text"
                    name="street2"
                    value={street2}
                    onChange={this.handleChange}
                    placeholder="Second Address"
                  />
                  <input
                    className={s.ship__input}
                    type="text"
                    name="street3"
                    value={street3}
                    onChange={this.handleChange}
                    placeholder="Third address"
                  />
                </div>
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  Country <span className={s.ship__required}>*</span>
                </label>
                <input
                  className={s.ship__input}
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className={s.ship__row}>
                <label className={s.ship__label}>
                  State/Province <span className={s.ship__required}>*</span>
                </label>
                <select
                  name="stateProvince"
                  className={s.ship__select}
                  value={stateProvince}
                  onChange={this.handleChange}
                  required
                  disabled={statesList.length === 0}
                >
                  <option value="" disabled hidden>
                    {statesList.length > 0
                      ? "Please select a region, state or province"
                      : "Enter a valid country first"}
                  </option>
                  {statesList.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>

                  ))}
                </select>
              </div>

              <h2 className={s.ship__title}>Shipping Methods</h2>
              <p className={s["ship__type-text"]}>Flate Rate</p>
              <div className="ship-form__list">
                <label className={s.ship__item}>
                  <input
                    className="ship-form__radio"
                    type="radio"
                    name="shippingMethod"
                    value="fixed"
                    checked={shippingMethod === "fixed"}
                    onChange={this.handleChange}
                  />
                  <div className={s.ship__methods}>
                    <p className={s.ship__rate}>$5.00</p>
                    <p className={s.ship__type}>Fixed</p>
                    <p className={s.ship__type}>Flat Rate</p>
                  </div>
                </label>
                <label className={s.ship__item}>
                  <input
                    className="ship-form__radio"
                    type="radio"
                    name="shippingMethod"
                    value="table"
                    checked={shippingMethod === "table"}
                    onChange={this.handleChange}
                  />
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
                <button
                  className={s["ship__btn--back"]}
                  type="button"
                  onClick={this.props.onBack}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
          {this.props.children}
        </div>
      </>
    );
  }
}

// export const ShippingDetails = ({ children }) => {
//   return (
//     <>
//       <div className={s.ship__wrap}>
//         <div>
//           <form className={s.ship__form}>
//             <h2 className={s.ship__title}>Shipping Address</h2>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 Email Address <span className={s.ship__required}>*</span>
//               </label>
//               <input
//                 className={s.ship__input}
//                 type="email"
//                 placeholder="roni_cost@example.com"
//                 required
//               />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>Password</label>
//               <input
//                 className={s.ship__input}
//                 type="password"
//                 placeholder="******************"
//               />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>Zip/Postal Code</label>
//               <input className={s.ship__input} type="number" min={0}/>
//             </div>
//             <p className={s.ship__text}>
//               You already have an account with us. Sign in or continue as guest.
//             </p>
//             <div className={s.ship__btns}>
//               <button className={s['ship__btn--login']}>Login</button>
//               <button className={s['ship__btn--restore']}>
//                 Forgot Your Password?
//               </button>
//             </div>
//           </form>
//           <div className={s.ship__line}></div>
//           <form className={s.ship__form}>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 First Name <span className={s.ship__required}>*</span>
//               </label>
//               <input className={s.ship__input} type="text" required />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 Last Name <span className={s.ship__required}>*</span>
//               </label>
//               <input className={s.ship__input} type="text" required />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>Company</label>
//               <input className={s.ship__input} type="text" />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 Street Address <span className={s.ship__required}>*</span>
//               </label>
//               <div className={s.ship__wrapper}>
//                 <input className={s.ship__input} type="text" required />
//                 <input className={s.ship__input} type="text" required />
//                 <input className={s.ship__input} type="text" required />
//               </div>
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 Country <span className={s.ship__required}>*</span>
//               </label>
//               <input className={s.ship__input} type="text" required />
//             </div>
//             <div className={s.ship__row}>
//               <label className={s.ship__label}>
//                 State/Province <span className={s.ship__required}>*</span>
//               </label>
//               <select name="regions" id="#" className={s.ship__select}>
//                 <option value="base" disabled selected hidden>
//                   Please select a region, state or province
//                 </option>
//                 <option value="first" >
//                   Please select a region, state or province
//                 </option><option value="second">
//                   Please select a region, state or province
//                 </option>
//               </select>
//             </div>
//           </form>
//           <form className={s.ship__form}>
//             <h2 className={s.ship__title}>Shipping Methods</h2>
//             <p className={s['ship__type-text']}>Flate Rate</p>
//             <div className="ship-form__list">
//               <label className={s.ship__item}>
//                 <input
//                   className="ship-form__radio"
//                   type="radio"
//                   name="shipping"
//                   value="fixed"
//                   defaultChecked
//                 />
//                 <div className={s.ship__methods}>
//                   <p className={s.ship__rate}>$5.00</p>
//                   <p className={s.ship__type}>Fixed</p>
//                   <p className={s.ship__type}>Flat Rate</p>
//                 </div>
//               </label>
//               <label className={s.ship__item}>
//                 <input
//                   className="ship-form__radio"
//                   type="radio"
//                   name="shipping"
//                   value="table"
//                 />
//                 <div className={s.ship__methods}>
//                   <p className={s.ship__rate}>$10.00</p>
//                   <p className={s.ship__type}>Table Rate</p>
//                   <p className={s.ship__type}>Best Way</p>
//                 </div>
//               </label>
//             </div>
//             <div className={s.ship__navigation}>
//               <button className={s['ship__btn--next']}>Next</button>
//               <button className={s['ship__btn--back']}>Back</button>
//             </div>
//           </form>
//         </div>
//         {children}
//       </div>
//     </>
//   );
// };
