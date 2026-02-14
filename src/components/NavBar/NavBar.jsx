import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <>
      <ul className={styles.NavBar}>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            Account Dashboard
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            Account Information
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            Address Book
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            My Wishlist
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.NavBar_item}>
            Newsletter Subscriptions
          </Link>
        </li>
      </ul>
    </>
  );
}
