import styles from "./DashboardSidebar.module.scss";
import { NavLink } from "react-router-dom";

export const DashboardSidebar = ({ changePage }) => {
  return (
    <div className={styles.dashbar}>
      <ul onClick={changePage} className={styles.dashbar__list}>
        <li className={styles.dashbar__item__active}>
          <NavLink className={styles.dashbar__link} to="/account/dashboard">
            Account Dashboard
          </NavLink>
        </li>
        <li id="dashSide2" className={styles.dashbar__item}>
          <NavLink className={styles.dashbar__link} href="#">
            Account Information
          </NavLink>
        </li>
        <li id="dashSide3" className={styles.dashbar__item}>
          <NavLink className={styles.dashbar__link} to="/account/address-book">
            Address Book
          </NavLink>
        </li>
        <li id="dashSide4" className={styles.dashbar__item}>
          <NavLink className={styles.dashbar__link} href="#">
            My Orders
          </NavLink>
        </li>
        <li id="dashSide5" className={styles.dashbar__item}>
          <NavLink className={styles.dashbar__link} href="/account/wishlist">
            My Wishlist
          </NavLink>
        </li>
        <li id="dashSide6" className={styles.dashbar__item}>
          <NavLink className={styles.dashbar__link} href="#">
            Newsletter Subscriptions
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
