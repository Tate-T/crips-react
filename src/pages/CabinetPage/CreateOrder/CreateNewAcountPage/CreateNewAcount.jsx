import s from "./CreateNewAcount.module.scss";
import { Container } from "../../../../components/Container/Container";
import { Component } from "react";

export class CreateNewAcount extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
    this.setState({ confirmPassword: "" });
  };

  render() {
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.email)
    console.log(this.state.password)
    console.log(this.state.confirmPassword)

    return (
      <>
        <section className={s.createAcountSecti}>
          <Container>
            <p className={s.createMainText}>
              Home / Create New Customer Account
            </p>
            <h2 className={s.createMainTitle}>Create New Customer Account</h2>
            <div className={s.createMainBox}>
              <form action="" className={s.form} onSubmit={this.handleSubmit}>
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
                    value={this.state.firstName}
                    onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
                <label className={s.create__labelSign}>
                  <input type="checkbox" name="payment" value="card" />
                  Sign Up for Newsletter
                </label>

                <h2 className={s.createPersonalTextSec}>
                  Sign Up for Newsletter
                </h2>
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
                    onChange={this.handleChange}
                    value={this.state.email}
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
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </div>
                <div className={s.createWrap}>
                  <label className={s.create__label}>
                    Confirm Password{" "}
                    <span className={s.create__required}>*</span>
                  </label>
                  <input
                    className={s.createInput}
                    type="password"
                    name="confirmPassword"
                    placeholder=""
                    required
                    onChange={this.handleChange}
                    value={this.state.confirmPassword}
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
}
