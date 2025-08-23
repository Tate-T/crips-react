import { Container } from "../../../../components/Container/Container";
import styles from "./AddNewAddress.module.scss";
import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";
import { Component } from "react";

export class AddNewAddress extends Component {
  state = {
    contact: {
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      fax: "",
    },
    address: {
      streetaddress: "",
      streetaddress2: "",
      country: "",
      state: "",
      code: "",
    },
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      contact: {
        firstName: e.target.userfirstname.value,
        lastName: e.target.userlastname.value,
        company: e.target.usercompany.value,
        phone: e.target.userphone.value,
        fax: e.target.userfax.value,
      },
      address: {
        streetaddress: e.target.userstreetaddress.value,
        streetaddress2: e.target.userstreetaddress2.value,
        country: e.target.usercountry.value,
        state: e.target.userstate.value,
        code: e.target.usercode.value,
      },
    });
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
            <form onSubmit={this.submitForm} className={styles.address__form}>
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
                      name="userfirstname"
                      id="user-firstname"
                      defaultValue={this.state.contact.firstName}
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
                      name="userlastname"
                      id="user-lastname"
                      defaultValue={this.state.contact.lastName}
                      required
                      placeholder="Driver"
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>Company</p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="usercompany"
                      id="user-company"
                      defaultValue={this.state.contact.company}
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
                      name="userphone"
                      id="user-phone"
                      required
                      placeholder=""
                      defaultValue={this.state.contact.phone}
                    />
                  </label>
                  <label className={styles.address__label}>
                    <p className={styles.address__desc}>Fax</p>
                    <input
                      className={styles.address__input}
                      type="text"
                      name="userfax"
                      id="user-fax"
                      placeholder=""
                      defaultValue={this.state.contact.fax}
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
                        name="userstreetaddress"
                        id="user-streetaddress"
                        required
                        placeholder=""
                        defaultValue={this.state.address.streetaddress}
                      />
                      <input
                        className={styles.address__input}
                        type="text"
                        name="userstreetaddress2"
                        id="user-streetaddress2"
                        required
                        defaultValue={this.state.address.streetaddress2}
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
                      name="usercountry"
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
                      name="userstate"
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
                      name="usercode"
                      id="user-code"
                      required
                      placeholder=""
                      defaultValue={this.state.address.code}
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
