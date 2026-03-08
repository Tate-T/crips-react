import styles from "./Dashboard.module.scss";
import { Container } from "../../../../components/Container/Container";
import NavBar from "../../../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <Container>
        <p className={styles.dashboard__way}>Home / My Dashboard</p>
        <h2 className={styles.dashboard__title}>My Dashboard</h2>
        <div className={styles.dashboard__cont}>
          <div className={styles.dashboard__main}>
            <NavBar />
            <div className={styles.dashboard__parts}>
              <div className={styles.dashboard__part}>
                <h3 className={styles.dashboard__subtitle}>
                  Account Information
                </h3>
                <ul className={styles.dashboard__list}>
                  <li className={styles.dashboard__item}>
                    <h4 className={styles.dashboard__info}>
                      Contact Information
                    </h4>
                    <p className={styles.dashboard__desc}>
                      Alex Driver ExampeAdress@gmail.com
                    </p>
                    <div className={styles.dashboard__btns}>
                      <Link
                        className={styles.dashboard__btn}
                        to="/account/accountinformation"
                      >
                        Edit
                      </Link>
                      <Link
                        className={styles.dashboard__btn}
                        to="/account/accountinformation"
                      >
                        Change Password
                      </Link>
                    </div>
                  </li>
                  <li className={styles.dashboard__item}>
                    <h4 className={styles.dashboard__info}>Newsletters</h4>
                    <p className={styles.dashboard__desc}>
                      You don't subscribe to our newsletter.
                    </p>
                    <Link
                      className={styles.dashboard__btn}
                      to="/account/newsletter"
                    >
                      Edit
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.dashboard__part}>
                <h3 className={styles.dashboard__subtitle}>Address Book</h3>
                <div></div>
                <ul className={styles.dashboard__list}>
                  <li className={styles.dashboard__item}>
                    <h4 className={styles.dashboard__info}>
                      Default Billing Address
                    </h4>
                    <p className={styles.dashboard__desc}>
                      You have not set a default billing address.
                    </p>
                    <Link
                      className={styles.dashboard__btn}
                      to="/account/address-book"
                    >
                      Edit Address
                    </Link>
                  </li>
                  <li className={styles.dashboard__item}>
                    <h4 className={styles.dashboard__info}>
                      Default Shipping Address
                    </h4>
                    <p className={styles.dashboard__desc}>
                      You have not set a default shipping address.
                    </p>
                    <Link className={styles.dashboard__btn} to="/CabinetPage">
                      Edit Address
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
