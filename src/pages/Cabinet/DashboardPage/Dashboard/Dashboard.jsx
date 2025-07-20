import styles from "./Dashboard.module.scss";
import { Container } from "../../../../components/Container/Container";

export const Dashboard = ({ children }) => {
  return (
    <section className={styles.dashboard}>
      <Container>
        <p>Home / My Dashboard</p>
        <h2>My Dashboard</h2>
        <div>
          {children}
          <div>
            <h3>Account Information</h3>
            <ul>
              <li>
                <h4>Contact Information</h4>
                <p>Alex Driver ExampeAdress@gmail.com</p>
                <button>Edit</button>
                <button>Change Password</button>
              </li>
              <li>
                <h4>Newsletters</h4>
                <p>You don't subscribe to our newsletter.</p>
                <button>Edit</button>
              </li>
            </ul>
            <h3>Address Book</h3>
            <div></div>
            <ul>
              <li>
                <h4>Default Billing Address</h4>
                <p>You have not set a default billing address.</p>
                <button>Edit Address</button>
              </li>
              <li>
                <h4>Default Shipping Address</h4>
                <p>You have not set a default shipping address.</p>
                <button>Edit Address</button>
              </li>
            </ul>
          </div>
        </div>
        <ul>
          <li>
            <p>Duties and Taxes Guaranteed</p>
          </li>
          <li>
            <p>Free Express Shipping</p>
          </li>
          <li>
            <p>Customer Love</p>
          </li>
          <li>
            <p>Easy Returns</p>
          </li>
          <li>
            <p>Secure Payment</p>
          </li>
        </ul>
        <button>Contact us</button>
      </Container>
    </section>
  );
};
