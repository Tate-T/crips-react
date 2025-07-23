import { Container } from "../../../../components/Container/Container";
import styles from "./AddNewAddress.module.scss";
import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";

export const AddNewAddress = () => {
  return (
    <section className={styles.address}>
      <Container>
        <h2 className={styles.address__subtitle}>
          Home / Create New Customer Account
        </h2>
        <h1 className={styles.address__title}>Add New Address</h1>
        <div className={styles.address__wrap}>
          <DashboardSidebar />
          <form className={styles.address__form}>
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
                    name="user-firstname"
                    id="user-firstname"
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
                    name="user-lastname"
                    id="user-lastname"
                    required
                    placeholder="Driver"
                  />
                </label>
                <label className={styles.address__label}>
                  <p className={styles.address__desc}>Company</p>
                  <input
                    className={styles.address__input}
                    type="text"
                    name="user-company"
                    id="user-company"
                    placeholder=""
                  />
                </label>
                <label className={styles.address__label}>
                  <p className={styles.address__desc}>
                    Phone Number <span className={styles.address__red}>*</span>
                  </p>
                  <input
                    className={styles.address__input}
                    type="tel"
                    name="user-phone"
                    id="user-phone"
                    required
                    placeholder=""
                  />
                </label>
                <label className={styles.address__label}>
                  <p className={styles.address__desc}>Fax</p>
                  <input
                    className={styles.address__input}
                    type="text"
                    name="user-fax"
                    id="user-fax"
                    placeholder=""
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
                      name="user-streetaddress"
                      id="user-streetaddress"
                      required
                      placeholder=""
                    />
                    <input
                      className={styles.address__input}
                      type="text"
                      name="user-streetaddress"
                      id="user-streetaddress"
                      required
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
                    name="user-country"
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
                    name="user-state"
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
                    name="user-code"
                    id="user-code"
                    required
                    placeholder=""
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
