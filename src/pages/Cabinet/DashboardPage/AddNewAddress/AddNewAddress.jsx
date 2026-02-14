import { Container } from "../../../../components/Container/Container";
import styles from "./AddNewAddress.module.scss";
import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../../../../redux/userData/actions";
import { nanoid } from "nanoid";

export const AddNewAddress = ({ changePage, isInArray }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [company, setCompany] = useState();
  const [phone, setPhone] = useState();
  const [fax, setFax] = useState();
  const [streetaddress, setStreetaddress] = useState();
  const [streetaddress2, setStreetaddress2] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [code, setCode] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAddress(
        nanoid(4),
        firstName,
        lastName,
        company,
        phone,
        fax,
        streetaddress,
        streetaddress2,
        country,
        state,
        code,
      ),
    );
    setTimeout(() => {
      if (!isInArray) {
        setFirstName("");
        setLastName("");
        setCompany("");
        setPhone("");
        setFax("");
        setStreetaddress("");
        setStreetaddress2("");
        setCountry("");
        setState("");
        setCode("");
      }
    });
  };

  return (
    <section className={styles.address}>
      <Container>
        <h2 className={styles.address__subtitle}>
          Home / Create New Customer Account
        </h2>
        <h1 className={styles.address__title}>Add New Address</h1>
        <div className={styles.address__wrap}>
          <DashboardSidebar changePage={changePage} />
          <form onSubmit={handleSubmit} className={styles.address__form}>
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
                    value={firstName || ""}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
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
                    value={lastName || ""}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
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
                    value={company || ""}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    placeholder=""
                  />
                </label>
                <label className={styles.address__label}>
                  <p className={styles.address__desc}>
                    Phone Number <span className={styles.address__red}>*</span>
                  </p>
                  <div className={styles.address__errordiv}>
                    <input
                      className={styles.address__input}
                      type="tel"
                      name="phone"
                      id="user-phone"
                      required
                      placeholder=""
                      value={phone || ""}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                    {isInArray ? (
                      <p className={styles.address__error}>
                        *The same number is already logined. Please, change it
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </label>
                <label className={styles.address__label}>
                  <p className={styles.address__desc}>Fax</p>
                  <input
                    className={styles.address__input}
                    type="text"
                    name="fax"
                    id="user-fax"
                    placeholder=""
                    value={fax || ""}
                    onChange={(e) => {
                      setFax(e.target.value);
                    }}
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
                      value={streetaddress || ""}
                      onChange={(e) => {
                        setStreetaddress(e.target.value);
                      }}
                    />
                    <input
                      className={styles.address__input}
                      type="text"
                      name="streetaddress2"
                      id="user-streetaddress2"
                      required
                      value={streetaddress2 || ""}
                      onChange={(e) => {
                        setStreetaddress2(e.target.value);
                      }}
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
                    value={country || ""}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
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
                    value={state || ""}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
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
                    value={code || ""}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
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
};

// export class AddNewAddress extends Component {
//   state = {
//     contact: {
//       firstName: this.props.firstName,
//       lastName: this.props.lastName,
//       company: this.props.company,
//       phone: this.props.phone,
//       fax: this.props.fax,
//     },
//     address: {
//       streetaddress: this.props.streetaddress,
//       streetaddress2: this.props.streetaddress2,
//       country: this.props.country,
//       state: this.props.state,
//       code: this.props.code,
//     },
//   };

//   handleContactChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       contact: {
//         ...prevState.contact,
//         [name]: value,
//       },
//     }));
//   };

//   handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       address: {
//         ...prevState.address,
//         [name]: value,
//       },
//     }));
//   };

//   handleSubmit = (e) => {
//     this.props.submitForm(e);
//     setTimeout(() => {
//       if (!this.props.isInArray) {
//         this.setState({
//           contact: {
//             firstName: "",
//             lastName: "",
//             company: "",
//             phone: "",
//             fax: "",
//           },
//           address: {
//             streetaddress: "",
//             streetaddress2: "",
//             country: "",
//             state: "",
//             code: "",
//           },
//         });
//       }
//     }, 1000);
//   };

//   render() {
//     return (
//       <section className={styles.address}>
//         <Container>
//           <h2 className={styles.address__subtitle}>
//             Home / Create New Customer Account
//           </h2>
//           <h1 className={styles.address__title}>Add New Address</h1>
//           <div className={styles.address__wrap}>
//             <DashboardSidebar changePage={this.props.changePage} />
//             <form onSubmit={this.handleSubmit} className={styles.address__form}>
//               <div>
//                 <h3 className={styles.address__header}>Contact Information</h3>
//                 <div className={styles.address__labels}>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       First name <span className={styles.address__red}>*</span>
//                     </p>
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="firstName"
//                       id="user-firstname"
//                       value={firstName || ""}
//                       onChange={this.handleContactChange}
//                       required
//                       placeholder="Alex"
//                     />
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       Last Name <span className={styles.address__red}>*</span>
//                     </p>
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="lastName"
//                       id="user-lastname"
//                       value={lastName || ""}
//                       onChange={this.handleContactChange}
//                       required
//                       placeholder="Driver"
//                     />
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>Company</p>
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="company"
//                       id="user-company"
//                       value={company || ""}
//                       onChange={this.handleContactChange}
//                       placeholder=""
//                     />
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       Phone Number{" "}
//                       <span className={styles.address__red}>*</span>
//                     </p>
//                     <div className={styles.address__errordiv}>
//                       <input
//                         className={styles.address__input}
//                         type="tel"
//                         name="phone"
//                         id="user-phone"
//                         required
//                         placeholder=""
//                         value={phone || ""}
//                         onChange={this.handleContactChange}
//                       />
//                       {this.props.isInArray ? (
//                         <p className={styles.address__error}>
//                           *The same number is already logined. Please, change it
//                         </p>
//                       ) : (
//                         <></>
//                       )}
//                     </div>
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>Fax</p>
//                     <input
//                       className={styles.address__input}
//                       type="text"
//                       name="fax"
//                       id="user-fax"
//                       placeholder=""
//                       value={fax || ""}
//                       onChange={this.handleContactChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//               <div>
//                 <h3 className={styles.address__header}>Address</h3>
//                 <div className={styles.address__labels}>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       Street Address{" "}
//                       <span className={styles.address__red}>*</span>
//                     </p>
//                     <div className={styles.address__inputs}>
//                       <input
//                         className={styles.address__input}
//                         type="text"
//                         name="streetaddress"
//                         id="user-streetaddress"
//                         required
//                         placeholder=""
//                         value={streetaddress || ""}
//                         onChange={this.handleAddressChange}
//                       />
//                       <input
//                         className={styles.address__input}
//                         type="text"
//                         name="streetaddress2"
//                         id="user-streetaddress2"
//                         required
//                         value={streetaddress2 || ""}
//                         onChange={this.handleAddressChange}
//                         placeholder=""
//                       />
//                     </div>
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       Country <span className={styles.address__red}>*</span>
//                     </p>
//                     <select
//                       className={styles.address__select}
//                       required
//                       value={country || ""}
//                       onChange={this.handleAddressChange}
//                       name="country"
//                       id="user-country"
//                     >
//                       <option value="fr">France</option>
//                       <option value="ua">Ukraine</option>
//                       <option value="uk">United Kingdom</option>
//                       <option value="us">United States</option>
//                     </select>
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       State/Province{" "}
//                       <span className={styles.address__red}>*</span>
//                     </p>
//                     <select
//                       className={styles.address__select}
//                       required
//                       value={state || ""}
//                       onChange={this.handleAddressChange}
//                       name="state"
//                       id="user-state"
//                     >
//                       <option value="Kyiv">Kyiv</option>
//                       <option value="Lviv">Lviv</option>
//                       <option value="Kharkiv">Kharkiv</option>
//                       <option value="Rivne">Rivne</option>
//                     </select>
//                   </label>
//                   <label className={styles.address__label}>
//                     <p className={styles.address__desc}>
//                       Zip/Postal Code{" "}
//                       <span className={styles.address__red}>*</span>
//                     </p>
//                     <input
//                       className={styles.address__input}
//                       type="num"
//                       name="code"
//                       id="user-code"
//                       required
//                       placeholder=""
//                       value={code || ""}
//                       onChange={this.handleAddressChange}
//                     />
//                   </label>
//                 </div>
//               </div>
//               <button className={styles.address__btn} type="submit">
//                 Save Adress
//               </button>
//             </form>
//           </div>
//         </Container>
//       </section>
//     );
//   }
// }

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
// };);
//  });
//;};);
// };);
// };);
// };);
// };);
// };);
// };
