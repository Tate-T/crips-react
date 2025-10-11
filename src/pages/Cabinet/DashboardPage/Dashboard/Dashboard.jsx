import styles from "./Dashboard.module.scss";
import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";
import { Container } from "../../../../components/Container/Container";
import { Component } from "react";

export class Dashboard extends Component {
  render() {
    return (
      <section className={styles.dashboard}>
        <Container>
          <p className={styles.dashboard__way}>Home / My Dashboard</p>
          <h2 className={styles.dashboard__title}>My Dashboard</h2>
          <div className={styles.dashboard__cont}>
            <div className={styles.dashboard__main}>
              <DashboardSidebar
                page={this.props.page}
                changePage={this.props.changePage}
              />
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
                        <button className={styles.dashboard__btn}>Edit</button>
                        <button className={styles.dashboard__btn}>
                          Change Password
                        </button>
                      </div>
                    </li>
                    <li className={styles.dashboard__item}>
                      <h4 className={styles.dashboard__info}>Newsletters</h4>
                      <p className={styles.dashboard__desc}>
                        You don't subscribe to our newsletter.
                      </p>
                      <button className={styles.dashboard__btn}>Edit</button>
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
                      <button className={styles.dashboard__btn}>
                        Edit Address
                      </button>
                    </li>
                    <li className={styles.dashboard__item}>
                      <h4 className={styles.dashboard__info}>
                        Default Shipping Address
                      </h4>
                      <p className={styles.dashboard__desc}>
                        You have not set a default shipping address.
                      </p>
                      <button className={styles.dashboard__btn}>
                        Edit Address
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

// import styles from "./Dashboard.module.scss";
// import { DashboardSidebar } from "../../../../components/DashboardSidebar/DashboardSidebar";
// import { Container } from "../../../../components/Container/Container";

// export const Dashboard = () => {
//   return (
//     <section className={styles.dashboard}>
//       <Container>
//         <p className={styles.dashboard__way}>Home / My Dashboard</p>
//         <h2 className={styles.dashboard__title}>My Dashboard</h2>
//         <div className={styles.dashboard__cont}>
//           <div className={styles.dashboard__main}>
//             <DashboardSidebar />
//             <div className={styles.dashboard__parts}>
//               <div className={styles.dashboard__part}>
//                 <h3 className={styles.dashboard__subtitle}>
//                   Account Information
//                 </h3>
//                 <ul className={styles.dashboard__list}>
//                   <li className={styles.dashboard__item}>
//                     <h4 className={styles.dashboard__info}>
//                       Contact Information
//                     </h4>
//                     <p className={styles.dashboard__desc}>
//                       Alex Driver ExampeAdress@gmail.com
//                     </p>
//                     <div className={styles.dashboard__btns}>
//                       <button className={styles.dashboard__btn}>Edit</button>
//                       <button className={styles.dashboard__btn}>
//                         Change Password
//                       </button>
//                     </div>
//                   </li>
//                   <li className={styles.dashboard__item}>
//                     <h4 className={styles.dashboard__info}>Newsletters</h4>
//                     <p className={styles.dashboard__desc}>
//                       You don't subscribe to our newsletter.
//                     </p>
//                     <button className={styles.dashboard__btn}>Edit</button>
//                   </li>
//                 </ul>
//               </div>
//               <div className={styles.dashboard__part}>
//                 <h3 className={styles.dashboard__subtitle}>Address Book</h3>
//                 <div></div>
//                 <ul className={styles.dashboard__list}>
//                   <li className={styles.dashboard__item}>
//                     <h4 className={styles.dashboard__info}>
//                       Default Billing Address
//                     </h4>
//                     <p className={styles.dashboard__desc}>
//                       You have not set a default billing address.
//                     </p>
//                     <button className={styles.dashboard__btn}>
//                       Edit Address
//                     </button>
//                   </li>
//                   <li className={styles.dashboard__item}>
//                     <h4 className={styles.dashboard__info}>
//                       Default Shipping Address
//                     </h4>
//                     <p className={styles.dashboard__desc}>
//                       You have not set a default shipping address.
//                     </p>
//                     <button className={styles.dashboard__btn}>
//                       Edit Address
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
