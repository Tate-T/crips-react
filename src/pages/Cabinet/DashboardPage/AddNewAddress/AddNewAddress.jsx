import { Container } from "../../../../components/Container/Container";
import styles from "./AddNewAddress.module.scss";
import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";
import { Component } from "react";

export class AddNewAddress extends Component {
  state = {
    contact: {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      company: this.props.company,
      phone: this.props.phone,
      fax: this.props.fax,
    },
    address: {
      streetaddress: this.props.streetaddress,
      streetaddress2: this.props.streetaddress2,
      country: this.props.country,
      state: this.props.state,
      code: this.props.code,
    },
  };

  handleContactChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  };

  handleAddressChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      address: {
        ...prevState.address,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <section className={styles.address}>
        <Container>
          <h2 className={styles.address__subtitle}>
            Home / Create New Customer Account
          </h2>
          <h1 className={styles.address__title}>Add New Address</h1>
          <div className={styles.address__wrap}>
            <DashboardSidebar page={3} />
            <form
              onSubmit={this.props.submitForm}
              className={styles.address__form}
            >
              <div>
                <h3 className={styles.address__header}>Contact Information</h3>
                <div className={styles.address__labels}>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      First name <span className={styles.address__red}>*</span>
                    </p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="firstName"
                      id="user-firstname"
                      value={this.state.contact.firstName}
                      onChange={this.handleContactChange}
                      required
                      placeholder="Alex"
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      Last Name <span className={styles.address__red}>*</span>
                    </p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="lastName"
                      id="user-lastname"
                      value={this.state.contact.lastName}
                      onChange={this.handleContactChange}
                      required
                      placeholder="Driver"
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>Company</p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="company"
                      id="user-company"
                      value={this.state.contact.company}
                      onChange={this.handleContactChange}
                      placeholder=""
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      Phone Number{" "}
                      <span className={styles.address__red}>*</span>
                    </p>
                    <input
                      className={styles.address__input}
                      type="tel"
                      name="phone"
                      id="user-phone"
                      required
                      placeholder=""
                      value={this.state.contact.phone}
                      onChange={this.handleContactChange}
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>Fax</p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="fax"
                      id="user-fax"
                      placeholder=""
                      value={this.state.contact.fax}
                      onChange={this.handleContactChange}
                    />
                  </label>
                </div>
              </div>
              <div>
                <h3 className={styles.address__header}>Address</h3>
                <div className={styles.address__labels}>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      Street Address{" "}
                      <span className={styles.address__red}>*</span>
                    </p>
                    <div className={styles.address__inputs}>
                      <input
                        className={styles.address__input}
                        type="text"
                        name="streetaddress"
                        id="user-streetaddress"
                        required
                        placeholder=""
                        value={this.state.address.streetaddress}
                        onChange={this.handleAddressChange}
                      />
                      <input
                        className={styles.address__input}
                        type="text"
                        name="streetaddress2"
                        id="user-streetaddress2"
                        required
                        value={this.state.address.streetaddress2}
                        onChange={this.handleAddressChange}
                        placeholder=""
                      />
                    </div>
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      Country <span className={styles.address__red}>*</span>
                    </p>
                    <select
                      className={styles.address__select}
                      required
                      value={this.state.address.country}
                      onChange={this.handleAddressChange}
                      name="country"
                      id="user-country"
                    >
                      <option value="fr">France</option>
                      <option value="ua">Ukraine</option>
                      <option value="uk">United Kingdom</option>
                      <option value="us">United States</option>
                    </select>
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      State/Province{" "}
                      <span className={styles.address__red}>*</span>
                    </p>
                    <select
                      className={styles.address__select}
                      required
                      value={this.state.address.state}
                      onChange={this.handleAddressChange}
                      name="state"
                      id="user-state"
                    >
                      <option value="Kyiv">Kyiv</option>
                      <option value="Lviv">Lviv</option>
                      <option value="Kharkiv">Kharkiv</option>
                      <option value="Rivne">Rivne</option>
                    </select>
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>
                      Zip/Postal Code{" "}
                      <span className={styles.address__red}>*</span>
                    </p>
                    <input
                      className={styles.address__input}
                      type="num"
                      name="code"
                      id="user-code"
                      required
                      placeholder=""
                      value={this.state.address.code}
                      onChange={this.handleAddressChange}
                    />
                  </label>
                </div>
              </div>
              <button className={styles.address__btn} type="submit">
                Save Adress
              </button>
            </form>
          </div>
        </Container>
      </section>
    );
  }
}

// export const AddNewAddress = () => {
//   return (
//     <section className={styles.address}>
//       <Container>
//         <h2 className={styles.address__subtitle}>
//           Home / Create New Customer Account
//         </h2>
//         <h1 className={styles.address__title}>Add New Address</h1>
//         <div className={styles.address__wrap}>
//           <DashboardSidebar />
//           <form className={styles.address__form}>
//             <div>
//               <h3 className={styles.address__header}>Contact Information</h3>
//               <div className={styles.address__labels}>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     First name <span className={styles.address__red}>*</span>
//                   </p>
//                   <input
//                     className={styles.address__input}
//                     type="text"
//                     name="userfirstname"
//                     id="user-firstname"
//                     required
//                     placeholder="Alex"
//                   />
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     Last Name <span className={styles.address__red}>*</span>
//                   </p>
//                   <input
//                     className={styles.address__input}
//                     type="text"
//                     name="userlastname"
//                     id="user-lastname"
//                     required
//                     placeholder="Driver"
//                   />
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>Company</p>
//                   <input
//                     className={styles.address__input}
//                     type="text"
//                     name="usercompany"
//                     id="user-company"
//                     placeholder=""
//                   />
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     Phone Number <span className={styles.address__red}>*</span>
//                   </p>
//                   <input
//                     className={styles.address__input}
//                     type="tel"
//                     name="userphone"
//                     id="user-phone"
//                     required
//                     placeholder=""
//                   />
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>Fax</p>
//                   <input
//                     className={styles.address__input}
//                     type="text"
//                     name="userfax"
//                     id="user-fax"
//                     placeholder=""
//                   />
//                 </label>
//               </div>
//             </div>
//             <div>
//               <h3 className={styles.address__header}>Address</h3>
//               <div className={styles.address__labels}>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     Street Address{" "}
//                     <span className={styles.address__red}>*</span>
//                   </p>
//                   <div className={styles.address__inputs}>
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="userstreetaddress"
//                       id="user-streetaddress"
//                       required
//                       placeholder=""
//                     />
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="userstreetaddress"
//                       id="user-streetaddress"
//                       required
//                       placeholder=""
//                     />
//                   </div>
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     Country <span className={styles.address__red}>*</span>
//                   </p>
//                   <select
//                     className={styles.address__select}
//                     required
//                     name="usercountry"
//                     id="user-country"
//                   >
//                     <option value="fr">France</option>
//                     <option value="ua">Ukraine</option>
//                     <option value="uk">United Kingdom</option>
//                     <option value="us">United States</option>
//                   </select>
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     State/Province{" "}
//                     <span className={styles.address__red}>*</span>
//                   </p>
//                   <select
//                     className={styles.address__select}
//                     required
//                     name="userstate"
//                     id="user-state"
//                   >
//                     <option value="Kyiv">Kyiv</option>
//                     <option value="Lviv">Lviv</option>
//                     <option value="Kharkiv">Kharkiv</option>
//                     <option value="Rivne">Rivne</option>
//                   </select>
//                 </label>
//                 <label className={styles.address__label}>
//                   <p className={styles.address__desc}>
//                     Zip/Postal Code{" "}
//                     <span className={styles.address__red}>*</span>
//                   </p>
//                   <input
//                     className={styles.address__input}
//                     type="num"
//                     name="usercode"
//                     id="user-code"
//                     required
//                     placeholder=""
//                   />
//                 </label>
//               </div>
//             </div>
//             <button className={styles.address__btn} type="submit">
//               Save Adress
//             </button>
//           </form>
//         </div>
//       </Container>
//     </section>
//   );
// };
