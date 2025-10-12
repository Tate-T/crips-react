import s from "./Login.module.scss";
import { Container } from "../../../components/Container/Container";
// import { Component } from "react";
import { useState } from "react";

export function Login() {
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

		setEmail(form.elements.email.value);
		setPassword(form.elements.password.value);

		// this.setState({ firstName: "" });
		// this.setState({ lastName: "" });
		// this.setState({ email: "" });
		// this.setState({ password: "" });
		// this.setState({ confirmPassword: "" });

		console.log(firstName, lastName, email, password, confirmPassword);

		form.reset();
	};

	// render() {
	//   console.log(this.firstName)
	//   console.log(this.state.lastName)
	//   console.log(this.state.email)
	//   console.log(this.state.password)
	//   console.log(this.state.confirmPassword)

	return (
		<>
			<section className={s["login-section"]}>
				<Container>
					<p className={s.createMainText}>Home / Login</p>
					<h2 className={s.createMainTitle}>Login</h2>
					<div className={s.createMainBox}>
						<form className={s.form} onSubmit={handleSubmit}>
							<h2 className={s.createPersonalText}>Personal Information</h2>
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
							<div className={s.btnWrap}>
								<button className={s.createBtn} type="submit">
									login	
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
