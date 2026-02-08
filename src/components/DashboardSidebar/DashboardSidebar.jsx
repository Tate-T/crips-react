import styles from "./DashboardSidebar.module.scss";

export const DashboardSidebar = ({ changePage }) => {
  return (
    <div className={styles.dashbar}>
      <ul onClick={changePage} className={styles.dashbar__list}>
        <li id="dashSide1" className={styles.dashbar__item__active}>
          <a className={styles.dashbar__link__active} href="#">
            Account Dashboard
          </a>
        </li>
        <li id="dashSide2" className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Account Information
          </a>
        </li>
        <li id="dashSide3" className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Address Book
          </a>
        </li>
        <li id="dashSide4" className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            My Orders
          </a>
        </li>
        <li id="dashSide5" className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            My Wishlist
          </a>
        </li>
        <li id="dashSide6" className={styles.dashbar__item}>
          <a className={styles.dashbar__link} href="#">
            Newsletter Subscriptions
          </a>
        </li>
      </ul>
    </div>
  );
};
