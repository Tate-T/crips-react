import { Component } from "react";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { Container } from "../../../components/Container/Container";
import { OrderSummary } from "../../../components/CreateOrder/OrderSummary/OrderSummary";
import s from "./CreateOrder.module.scss";
import checkmark from "../../../images/CreateOrder/ckeckmark.svg";
import { PaymentDetails } from "./PaymentDetails/PaymentDetails";
import { OrderSummaryModal } from "../../../components/CreateOrder/OrderSummaryModal/OrderSummaryModal";
import { PaymentInfo } from "../../../components/CreateOrder/PaymentInfo/PaymentInfo";

export class CreateOrder extends Component {
  state = {
    step: 1,
    modalIsOpened: false,
    orderSummaryIsOpened: false,
    shippingFormDetails: {
      email: "",
      password: "",
      zip: "",
    },
    shippingInfo: {
      firstName: "",
      lastName: "",
      company: "",
      streetAddress: ["", "", ""],
      country: "",
      stateProvince: "",
      shippingMethod: "fixed",
    },
  };

  goToNextStep = () => this.setState({ step: 2 });
  goToPrevStep = () => this.setState({ step: 1 });

  openModal = () => this.setState({ modalIsOpened: true });
  closeModal = () => this.setState({ modalIsOpened: false });

  toggleOrderSummary = () => this.setState((prev) => ({ orderSummaryIsOpened: !prev.orderSummaryIsOpened }));

  handleShippingFormSubmit = (data) => {
    this.setState({ shippingFormDetails: data });
    console.log(data);
  };

  handleShippingInfoSubmit = (data) => {
    this.setState({ shippingInfo: data }, this.goToNextStep);
    console.log(data);
  };

  render() {
    const { step, modalIsOpened, shippingFormDetails, shippingInfo, orderSummaryIsOpened } =
      this.state;
    console.log(this.state.orderSummaryIsOpened)
    console.log(this.state.shippingFormDetails)
    console.log(this.state.shippingInfo)
    return (
      <>
        {this.props.children}
        <section>
          <Container>
            <div className={s.order__mainwrap}>
              <nav className={s.order__breadcrumb} aria-label="breadcrumb">
                <ol className={s.order__list}>
                  <li className={s.order__item}>
                    <a className={s.order__link} href="#">
                      Home
                    </a>
                  </li>
                  <li className={s.order__item}>
                    <a className={s.order__link} href="#">
                      Create Order
                    </a>
                  </li>
                </ol>
              </nav>

              <div className={s.order__wrap}>
                <div className={s.order__wrapper}>
                  <div
                    className={
                      step === 1
                        ? s["order__subwrap--active"]
                        : s.order__subwrap
                    }
                  >
                    <div className={s.order__line}></div>
                    <div className={s.order__conf}>
                      {step > 1 ? (
                        <img
                          src={checkmark}
                          alt="checkmark"
                          className={s.order__checkmark}
                        />
                      ) : (
                        "1"
                      )}
                    </div>
                    <div className={s.order__line}></div>
                  </div>
                  <p className={s.order__stage}>Shipping</p>
                </div>

                <div className={s.order__wrapper}>
                  <div
                    className={
                      step === 2
                        ? s["order__subwrap--active"]
                        : s.order__subwrap
                    }
                  >
                    <div className={s.order__line}></div>
                    <div className={s.order__conf}>2</div>
                    <div className={s.order__line}></div>
                  </div>
                  <p className={s.order__stage}>Review & Payments</p>
                </div>
              </div>

              <div className={s.order__addition}>
                <OrderSummary
                  className={s.order__mobile}
                  openModal={this.openModal}
                />

                {step === 1 ? (
                  <ShippingDetails
                    shippingForm={shippingFormDetails}
                    shippingInfo={shippingInfo}
                    onSubmitForm={this.handleShippingFormSubmit}
                    onSubmitInfo={this.handleShippingInfoSubmit}
                  >
                    <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={this.toggleOrderSummary} />
                    <OrderSummaryModal
                      modalIsOpened={modalIsOpened}
                      closeModal={this.closeModal}
                    >
                      <PaymentInfo />
                    </OrderSummaryModal>
                  </ShippingDetails>
                ) : (
                  <PaymentDetails onBack={this.goToPrevStep}>
                    <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={this.toggleOrderSummary} />
                    <PaymentInfo className={s.order__tablet} />
                    <OrderSummaryModal modalIsOpened={modalIsOpened}>
                      <PaymentInfo />
                    </OrderSummaryModal>
                  </PaymentDetails>
                )}
              </div>
            </div>
          </Container>
        </section>
        {this.props.children}
      </>
    );
  }
}

// export const CreateOrder = ({ children }) => {
//   return (
//     <>
//       {children}
//       <section>
//         <Container>
//           <div className={s.order__mainwrap}>
//             <div>
//               <nav className={s.order__breadcrumb} aria-label="breadcrumb">
//                 <ol className={s.order__list}>
//                   <li className={s.order__item}>
//                     <a className={s.order__link} href="#">
//                       Home
//                     </a>
//                   </li>
//                   <li className={s.order__item}>
//                     <a className={s.order__link} href="#">
//                       Create Order
//                     </a>
//                   </li>
//                 </ol>
//               </nav>
//               <div className={s.order__wrap}>
//                 <div className={s.order__wrapper}>
//                   <div className={s["order__subwrap--active"]}>
//                     <div className={s.order__line}></div>
//                     <div className={s.order__conf}>
//                       <img
//                         className={s.order__checkmark}
//                         src={checkmark}
//                         alt="checkmark"
//                       />
//                     </div>
//                     <div className={s.order__line}></div>
//                   </div>
//                   <p className={s.order__stage}>Shipping</p>
//                 </div>
//                 <div className={s.order__wrapper}>
//                   <div className={s.order__subwrap}>
//                     <div className={s.order__line}></div>
//                     <div className={s.order__conf}>2</div>
//                     <div className={s.order__line}></div>
//                   </div>
//                   <p className={s.order__stage}>Review & Payments</p>
//                 </div>
//               </div>
//             </div>
//             <div className={s.order__addition}>
//               <OrderSummary className={s.order__mobile} />
//               <PaymentDetails>
//                 <OrderSummary className={s.order__tablet} />
//                 <PaymentInfo className={s.order__tablet}/>
//                 <OrderSummaryModal>
//                   <PaymentInfo />
//                 </OrderSummaryModal>
//               </PaymentDetails>
//               <ShippingDetails>
//                 <OrderSummary className={s.order__tablet} />
//                 <OrderSummaryModal>
//                   <PaymentInfo />
//                 </OrderSummaryModal>
//               </ShippingDetails>
//             </div>
//           </div>
//         </Container>
//       </section>
//       {children}
//     </>
//   );
// };
