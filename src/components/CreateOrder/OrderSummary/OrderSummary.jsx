import s from "./OrderSummary.module.scss";
import { Component } from "react";
import arrow from "../../../images/CreateOrder/arrow-bottom.svg";
import dress1 from "../../../images/mini-catalog-04.jpg";
import dress2 from "../../../images/mini-catalog-02.jpg";
import bag from "../../../images/CreateOrder/bag.svg";

export class OrderSummary extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={s.order__wrap}>
          <h2 className={s.order__title}>Order Summary</h2>
          <div className={s.order__wrapper}>
              <div className={`${s.order__ans} ${this.props.stateOfDetails ? s.open : ""}`}>
                <ul className={s.order__list}>
                  <li className={s.order__item}>
                    <p>Cart Subtotal</p>
                    <p>$56.25</p>
                  </li>
                  <li className={s.order__item}>
                    <p>Shipping</p>
                    <p>$5.00</p>
                  </li>
                  <li className={s.order__item}>
                    <p>Flat Rate - Fixed</p>
                  </li>
                </ul>
                <div className={s["order__total-wrap"]}>
                  <p>Order Total</p>
                  <span>120.00 EUR</span>
                </div>
              </div>

            <div
              className={`${s.order__que} ${this.props.stateOfDetails ? s.active : ""}`}
              onClick={this.props.toggleOrderSummary}
            >
              <p className={s.order__info}>1 Item in Cart</p>
              <img className={s.order__icon} src={arrow} alt="arrow icon" />
            </div>
          </div>
          <ul className={s.order__list}>
            <li className={s.order__item}>
              <img className={s.order__img} src={dress1} alt="dress" />
              <div className={s.order__subwrap}>
                <div>
                  <h3 className={s.order__subtitle}>
                    Angels malu zip jeans slim black used
                  </h3>
                  <p className={s.order__quantity}>
                    Qty: <span>1</span>
                  </p>
                  <button className={s.order__viewBtn}>
                    View Details
                    <img
                      className={s.order__icon}
                      src={arrow}
                      alt="arrow icon"
                    />
                  </button>
                </div>
                <p className={s.order__sum}>129,00 EUR</p>
              </div>
            </li>
            <li className={s.order__item}>
              <img className={s.order__img} src={dress2} alt="dress" />
              <div className={s.order__subwrap}>
                <div>
                  <h3 className={s.order__subtitle}>
                    Angels malu zip jeans slim black used
                  </h3>
                  <p className={s.order__quantity}>
                    Qty: <span>1</span>
                  </p>
                  <button className={s.order__viewBtn}>
                    View Details
                    <img
                      className={s.order__icon}
                      src={arrow}
                      alt="arrow icon"
                    />
                  </button>
                </div>
                <p className={s.order__sum}>129,00 EUR</p>
              </div>
            </li>
          </ul>
          <div className={s.order__phone}>
            <h2 className={s.order__total}>
              Order Total: <span>120.00 EUR</span>
            </h2>
            <button className={s.order__details} onClick={this.props.openModal}>
              <img src={bag} alt="bag" />
              See Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// export const OrderSummary = ({ className }) => {
//   return (
//     <div className={className}>
//       <div className={s.order__wrap}>
//         <h2 className={s.order__title}>Order Summary</h2>
//         <div className={s.order__wrapper}>
//           <div className={s.order__ans}>
//             <ul className={s.order__list}>
//               <li className={s.order__item}>
//                 <p>Cart Subtotal</p>
//                 <p>$56.25</p>
//               </li>
//               <li className={s.order__item}>
//                 <p>Shipping</p>
//                 <p>$5.00</p>
//               </li>
//               <li className={s.order__item}>
//                 <p>Flat Rate - Fixed</p>
//               </li>
//             </ul>
//             <div className={s["order__total-wrap"]}>
//               <p>Order Total</p>
//               <span>120.00 EUR</span>
//             </div>
//           </div>
//           <div className={s.order__que}>
//             <p className={s.order__info}>1 Item in Cart</p>
//             <img className={s.order__icon} src={arrow} alt="arrow icon" />
//           </div>
//         </div>
//         <ul className={s.order__list}>
//           <li className={s.order__item}>
//             <img className={s.order__img} src={dress1} alt="dress" />
//             <div className={s.order__subwrap}>
//               <div>
//                 <h3 className={s.order__subtitle}>
//                   Angels malu zip jeans slim black used
//                 </h3>
//                 <p className={s.order__quantity}>
//                   Qty: <span>1</span>
//                 </p>
//                 <button className={s.order__viewBtn}>
//                   View Details
//                   <img className={s.order__icon} src={arrow} alt="arrow icon" />
//                 </button>
//               </div>
//               <p className={s.order__sum}>129,00 EUR</p>
//             </div>
//           </li>
//           <li className={s.order__item}>
//             <img className={s.order__img} src={dress2} alt="dress" />
//             <div className={s.order__subwrap}>
//               <div>
//                 <h3 className={s.order__subtitle}>
//                   Angels malu zip jeans slim black used
//                 </h3>
//                 <p className={s.order__quantity}>
//                   Qty: <span>1</span>
//                 </p>
//                 <button className={s.order__viewBtn}>
//                   View Details
//                   <img className={s.order__icon} src={arrow} alt="arrow icon" />
//                 </button>
//               </div>
//               <p className={s.order__sum}>129,00 EUR</p>
//             </div>
//           </li>
//         </ul>
//         <div className={s.order__phone}>
//           <h2 className={s.order__total}>
//             Order Total: <span>120.00 EUR</span>
//           </h2>
//           <button className={s.order__details}>
//             <img src={bag} alt="bag" />
//             See Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
