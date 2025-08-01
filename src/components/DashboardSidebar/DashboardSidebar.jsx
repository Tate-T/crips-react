import styles from "./DashboardSidebar.module.scss";

export const DashboardSidebar = () => {
  return (
    <div className={styles.dashbar}>
      <ul className={styles.dashbar__list}>
        <li className={styles.dashbar__item__active}>
          <a className={styles.dashbar__link__active} href="#">
            Account Dashboard
          </a>
        </li>
        <li className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Account Information
          </a>
        </li>
        <li className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Address Book
          </a>
        </li>
        <li className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            My Orders
          </a>
        </li>
        <li className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            My Wishlist
          </a>
        </li>
        <li className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Newsletter Subscriptions
          </a>
        </li>
      </ul>
    </div>
  );
};
