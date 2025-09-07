import s from "./OrderSummaryModal.module.scss";
import { Component } from "react";
import arrow from "../../../images/CreateOrder/arrow-bottom.svg";
import dress1 from "../../../images/MiniCatalog/mini-catalog-04.jpg";
import dress2 from "../../../images/MiniCatalog/mini-catalog-02.jpg";
import close from "../../../images/CreateOrder/close.svg";

export class OrderSummaryModal extends Component {
  render() {
    return (
      this.props.modalIsOpened && (
        <div className={s.order__backdrop} onClick={this.props.closeModal}>
          <div
            className={s.order__modalWrap}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={s.order__wrap}>
              <h2 className={s.order__title}>Order Summary</h2>
              <img
                className={s.order__close}
                src={close}
                onClick={this.props.closeModal}
                alt="close"
              />
              <div className={s.order__wrapper}>
                <div className={s.order__ans}>
                  <ul className={s.order__list}>
                    <li className={s.order__item}>
                      <p>Cart Subtotal</p>
                      <p className={s.order__subtotal}>246.20 EUR</p>
                    </li>
                    <li className={s.order__item}>
                      <p>Discount</p>
                      <p>-46.20 EUR</p>
                    </li>
                    <li className={s.order__item}>
                      <p>Shipping</p>
                      <p>30.00 EUR</p>
                    </li>
                    <li className={s.order__item}>
                      <p>Flat Rate - Fixed</p>
                    </li>
                    <li className={s.order__item}>
                      <p>Tax</p>
                      <p>15.25 EUR</p>
                    </li>
                  </ul>
                  <div className={s["order__total-wrap"]}>
                    <p>Order Total</p>
                    <span>120.00 EUR</span>
                  </div>
                </div>
                <div className={s.order__que}>
                  <p className={s.order__info}>1 Item in Cart</p>
                  <img className={s.order__icon} src={arrow} alt="arrow icon" />
                </div>
              </div>
              <ul className={s.order__sublist}>
                <li className={s.order__subitem}>
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
                <li className={s.order__subitem}>
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
              {this.props.children}
            </div>
          </div>
        </div>
      )
    );
  }
}

// export const OrderSummaryModal = ({children}) => {
//   return (
//     <div className={s.order__wrap}>
//       <h2 className={s.order__title}>Order Summary</h2>
//       <img className={s.order__close} src={close} alt="close" />
//       <div className={s.order__wrapper}>
//         <div className={s.order__ans}>
//           <ul className={s.order__list}>
//             <li className={s.order__item}>
//               <p>Cart Subtotal</p>
//               <p className={s.order__subtotal}>246.20 EUR</p>
//             </li>
//              <li className={s.order__item}>
//               <p>Discount</p>
//               <p>-46.20 EUR</p>
//             </li>
//             <li className={s.order__item}>
//               <p>Shipping</p>
//               <p>30.00 EUR</p>
//             </li>
//             <li className={s.order__item}>
//               <p>Flat Rate - Fixed</p>
//             </li>
//             <li className={s.order__item}>
//               <p>Tax</p>
//               <p>15.25 EUR</p>
//             </li>
//           </ul>
//           <div className={s["order__total-wrap"]}>
//             <p>Order Total</p>
//             <span>120.00 EUR</span>
//           </div>
//         </div>
//         <div className={s.order__que}>
//           <p className={s.order__info}>1 Item in Cart</p>
//           <img className={s.order__icon} src={arrow} alt="arrow icon" />
//         </div>
//       </div>
//       <ul className={s.order__sublist}>
//         <li className={s.order__subitem}>
//           <img className={s.order__img} src={dress1} alt="dress" />
//           <div className={s.order__subwrap}>
//             <div>
//               <h3 className={s.order__subtitle}>
//                 Angels malu zip jeans slim black used
//               </h3>
//               <p className={s.order__quantity}>
//                 Qty: <span>1</span>
//               </p>
//               <button className={s.order__viewBtn}>
//                 View Details
//                 <img className={s.order__icon} src={arrow} alt="arrow icon" />
//               </button>
//             </div>
//             <p className={s.order__sum}>129,00 EUR</p>
//           </div>
//         </li>
//         <li className={s.order__subitem}>
//           <img className={s.order__img} src={dress2} alt="dress" />
//           <div className={s.order__subwrap}>
//             <div>
//               <h3 className={s.order__subtitle}>
//                 Angels malu zip jeans slim black used
//               </h3>
//               <p className={s.order__quantity}>
//                 Qty: <span>1</span>
//               </p>
//               <button className={s.order__viewBtn}>
//                 View Details
//                 <img className={s.order__icon} src={arrow} alt="arrow icon" />
//               </button>
//             </div>
//             <p className={s.order__sum}>129,00 EUR</p>
//           </div>
//         </li>
//       </ul>
//       {children}
//     </div>
//   );
// };
