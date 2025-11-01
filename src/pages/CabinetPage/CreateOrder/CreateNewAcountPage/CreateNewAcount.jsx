import s from "./CreateNewAcount.module.scss";
import { Container } from "../../../../components/Container/Container";
// import { Component } from "react";
import { useState } from "react";

export function CreateNewAcount() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setconfirmPassword] = useState("");

	// state = {
	//   firstName: "",
	//   lastName: "",
	//   email: "",
	//   password: "",
	//   confirmPassword: "",
	// };

	// function handleChange(e){
	//   const { name, value } = e.target;
	//   setState({ [name]: value });
	// };

	 const handleSubmit = (e) => {
		e.preventDefault();

		console.log(e);

		const form = e.currentTarget;

		setFirstName(form.elements.firstName.value);
		setlastName(form.elements.lastName.value);
		setEmail(form.elements.email.value);
		setPassword(form.elements.password.value);
		setconfirmPassword(form.elements.confirmPassword.value);

		// this.setState({ firstName: "" });
		// this.setState({ lastName: "" });
		// this.setState({ email: "" });
		// this.setState({ password: "" });
		// this.setState({ confirmPassword: "" });
		
		console.log(firstName, lastName, email, password, confirmPassword)

		form.reset();
	}

	// render() {
	//   console.log(this.firstName)
	//   console.log(this.state.lastName)
	//   console.log(this.state.email)
	//   console.log(this.state.password)
	//   console.log(this.state.confirmPassword)

	return (
		<>
			<section className={s.createAcountSecti}>
				<Container>
					<p className={s.createMainText}>Home / Create New Customer Account</p>
					<h2 className={s.createMainTitle}>Create New Customer Account</h2>
					<div className={s.createMainBox}>
						<form className={s.form} onSubmit={handleSubmit}>
							<h2 className={s.createPersonalText}>Personal Information</h2>
							<div className={s.createWrap}>
								<label className={s.create__label}>
									First name <span className={s.create__required}>*</span>
								</label>
								<input
									className={s.createInput}
									required
									type="text"
									name="firstName"
									// value={firstName}
									// onChange={(e)=>setFirstName(e.target.value)}
									placeholder="firstName"
								/>
							</div>
							<div className={s.createWrap}>
								<label className={s.create__label}>
									Last Name <span className={s.create__required}>*</span>
								</label>
								<input
									className={s.createInput}
									name="lastName"
									type="text"
									placeholder="lastName"
									required
									// onChange={(e)=>setlastName(e.target.value)}
									// value={lastName}
								/>
							</div>
							<label className={s.create__labelSign}>
								<input type="checkbox" name="payment" value="card" />
								Sign Up for Newsletter
							</label>

							<h2 className={s.createPersonalTextSec}>Sign Up for Newsletter</h2>
							<div className={s.createWrap}>
								<label className={s.create__label}>
									Email <span className={s.create__required}>*</span>
								</label>
								<input
									className={s.createInput}
									type="email"
									name="email"
									placeholder="daisy.watson@example.com"
									required
									// onChange={(e)=>setEmail(e.target.value)}
									// value={email}
								/>
							</div>
							<div className={s.createWrap}>
								<label className={s.create__label}>
									Password <span className={s.create__required}>*</span>
								</label>
								<input
									className={s.createInput}
									type="password"
									name="password"
									placeholder="Password"
									required
									// onChange={(e)=>setPassword(e.target.value)}
									// value={password}
								/>
							</div>
							<div className={s.createWrap}>
								<label className={s.create__label}>
									Confirm Password <span className={s.create__required}>*</span>
								</label>
								<input
									className={s.createInput}
									type="password"
									name="confirmPassword"
									placeholder=""
									required
									// onChange={(e)=>setconfirmPassword(e.target.value)}
									// value={confirmPassword}
								/>
							</div>
							<div className={s.btnWrap}>
								<button className={s.createBtn} type="submit">
									create an account
								</button>
								<button className={s.backBtn}>Back</button>
							</div>
						</form>
					</div>
				</Container>
			</section>
		</>
	);
}
// }
