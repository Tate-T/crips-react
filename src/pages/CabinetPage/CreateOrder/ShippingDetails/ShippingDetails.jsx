import s from "./ShippingDetails.module.scss";
import { AuthContext } from "../../../../contexts/AuthContext";
import { useState, useContext } from "react";
import ccsj from "countrycitystatejson";

export const ShippingDetails = ({ shippingForm, shippingInfo, onSubmitForm, onSubmitInfo, children, onBack }) => {
	const [email, setEmail] = useState(shippingForm?.email || "");
	const [password, setPassword] = useState(shippingForm?.password || "");
	const [zip, setZip] = useState(shippingForm?.zip || "");
	const [firstName, setFirstName] = useState(shippingInfo?.firstName || "");
	const [lastName, setLastName] = useState(shippingInfo?.lastName || "");
	const [company, setCompany] = useState(shippingInfo?.company || "");
	const [street1, setStreet1] = useState(shippingInfo?.streetAddress?.[0] || "");
	const [street2, setStreet2] = useState(shippingInfo?.streetAddress?.[1] || "");
	const [street3, setStreet3] = useState(shippingInfo?.streetAddress?.[2] || "");
	const [country, setCountry] = useState(shippingInfo?.country || "");
	const [stateProvince, setStateProvince] = useState(shippingInfo?.stateProvince || "");
	const [shippingMethod, setShippingMethod] = useState(shippingInfo?.shippingMethod || "fixed");
	const [statesList, setStatesList] = useState([]);

	const auth = useContext(AuthContext);

	const setters = {
		email: setEmail,
		password: setPassword,
		zip: setZip,
		firstName: setFirstName,
		lastName: setLastName,
		company: setCompany,
		street1: setStreet1,
		street2: setStreet2,
		street3: setStreet3,
		country: setCountry,
		stateProvince: setStateProvince,
		shippingMethod: setShippingMethod
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setters[name]?.(value);

		if (name === "country") {
			const foundCountry = ccsj.getCountries().find((country) => country.name.toLowerCase() === value.toLowerCase());

			setStatesList(foundCountry ? ccsj.getStatesByShort(foundCountry.shortName) : []);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmitForm({ email, password, zip });
	};

	const handleFormInfo = (e) => {
		e.preventDefault();
		const data = {
			firstName,
			lastName,
			company,
			streetAddress: [street1, street2, street3],
			country,
			stateProvince,
			shippingMethod
		};

		onSubmitInfo(data);
	};

	return (
		<>
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
									<input className={s.ship__input} type="email" placeholder="roni_cost@example.com" name="email" value={email} onChange={handleChange} required />
								</div>
								<div className={s.ship__row}>
									<label className={s.ship__label}>
										Password <span className={s.ship__required}>*</span>
									</label>
									<input className={s.ship__input} type="password" placeholder="******************" name="password" value={password} onChange={handleChange} required />
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
							<input className={s.ship__input} type="text" name="firstName" value={firstName} onChange={handleChange} required />
						</div>
						<div className={s.ship__row}>
							<label className={s.ship__label}>
								Last Name <span className={s.ship__required}>*</span>
							</label>
							<input className={s.ship__input} type="text" name="lastName" value={lastName} onChange={handleChange} required />
						</div>
						<div className={s.ship__row}>
							<label className={s.ship__label}>Company</label>
							<input className={s.ship__input} type="text" name="company" value={company} onChange={handleChange} />
						</div>
						<div className={s.ship__row}>
							<label className={s.ship__label}>
								Street Address <span className={s.ship__required}>*</span>
							</label>
							<div className={s.ship__wrapper}>
								<input className={s.ship__input} type="text" name="street1" value={street1} onChange={handleChange} placeholder="First address" required />
								<input className={s.ship__input} type="text" name="street2" value={street2} onChange={handleChange} placeholder="Second Address" />
								<input className={s.ship__input} type="text" name="street3" value={street3} onChange={handleChange} placeholder="Third address" />
							</div>
						</div>
						<div className={s.ship__row}>
							<label className={s.ship__label}>
								Country <span className={s.ship__required}>*</span>
							</label>
							<input className={s.ship__input} type="text" name="country" value={country} onChange={handleChange} required />
						</div>
						<div className={s.ship__row}>
							<label className={s.ship__label}>
								State/Province <span className={s.ship__required}>*</span>
							</label>
							<select name="stateProvince" className={s.ship__select} value={stateProvince} onChange={handleChange} required disabled={statesList.length === 0}>
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
							<input className={s.ship__input} type="number" name="zip" min={0} value={zip} onChange={handleChange} />
						</div>

						<h2 className={s.ship__title}>Shipping Methods</h2>
						<p className={s["ship__type-text"]}>Flate Rate</p>
						<div className="ship-form__list">
							<label className={s.ship__item}>
								<input className="ship-form__radio" type="radio" name="shippingMethod" value="fixed" checked={shippingMethod === "fixed"} onChange={handleChange} />
								<div className={s.ship__methods}>
									<p className={s.ship__rate}>$5.00</p>
									<p className={s.ship__type}>Fixed</p>
									<p className={s.ship__type}>Flat Rate</p>
								</div>
							</label>
							<label className={s.ship__item}>
								<input className="ship-form__radio" type="radio" name="shippingMethod" value="table" checked={shippingMethod === "table"} onChange={handleChange} />
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
		</>
	);
};
