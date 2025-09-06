import s from "./PaymentDetails.module.scss";
import { Component } from "react";
export class PaymentDetails extends Component {
  render() {
    return (
      <>
        <div className={s["payment__wrap--main"]}>
          <div className={s.payment__wrap}>
            <form>
              <h2 className={s.payment__title}>Shipping Address</h2>
              <p className={s.payment__text}>Check / Money order</p>
              <label className={s.payment__label}>
                <input type="checkbox" />
                My billing and shipping address are the same
              </label>
              <div className={s.payment__subwrap}>
                <a href="#" className={s.payment__address}>
                  Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147
                  Vitebsk, Vitebsk region 210038 Belarus
                </a>
                <a className={s.payment__num} href="to:+375292169179">
                  +375292169179
                </a>
              </div>
              <div className={s.payment__btns}>
                <button className={s["payment__btn--place"]}>
                  Place Order
                </button>
                <button className={s["payment__btn--next"]} onClick={this.props.onBack}>Back</button>
              </div>
            </form>
            <form>
              <h2 className={s.payment__title}>Apply Discount Code</h2>
              <label className={s["payment__label--discount"]}>
                <input type="text" placeholder="Enter discount code" />
                <button className={s["payment__btn--tablet"]}>
                  Apply Discount
                </button>
                <button className={s["payment__btn--mobile"]}>Apply</button>
              </label>
            </form>
          </div>
          <div>{this.props.children}</div>
        </div>
      </>
    );
  }
}
// export const PaymentDetails = ({ children }) => {
//   return (
//     <>
//       <div className={s['payment__wrap--main']}>
//         <div className={s.payment__wrap}>
//           <form>
//             <h2 className={s.payment__title}>Shipping Address</h2>
//             <p className={s.payment__text}>Check / Money order</p>
//             <label className={s.payment__label}>
//               <input type="checkbox" />
//               My billing and shipping address are the same
//             </label>
//             <div className={s.payment__subwrap}>
//               <a href="#" className={s.payment__address}>
//                 Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk,
//                 Vitebsk region 210038 Belarus
//               </a>
//               <a className={s.payment__num} href="to:+375292169179">
//                 +375292169179
//               </a>
//             </div>
//             <div className={s.payment__btns}>
//               <button className={s["payment__btn--place"]}>Place Order</button>
//               <button className={s["payment__btn--next"]}>Next</button>
//             </div>
//           </form>
//           <form>
//             <h2 className={s.payment__title}>Apply Discount Code</h2>
//             <label className={s['payment__label--discount']}>
//               <input type="text" placeholder="Enter discount code" />
//               <button className={s['payment__btn--tablet']}>Apply Discount</button>
//               <button className={s['payment__btn--mobile']}>Apply</button>
//             </label>
//           </form>
//         </div>
//         <div>
//           {children}

//         </div>
//       </div>
//     </>
//   );
// };
