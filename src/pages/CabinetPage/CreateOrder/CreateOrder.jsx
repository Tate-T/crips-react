import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { Container } from "../../../components/Container/Container";
import { OrderSummary } from "../../../components/CreateOrder/OrderSummary/OrderSummary";
import s from "./CreateOrder.module.scss";
import checkmark from "../../../images/CreateOrder/ckeckmark.svg";
import { PaymentDetails } from "./PaymentDetails/PaymentDetails";
import { OrderSummaryModal } from "../../../components/CreateOrder/OrderSummaryModal/OrderSummaryModal";
import { PaymentInfo } from "../../../components/CreateOrder/PaymentInfo/PaymentInfo";

import { useSelector, useDispatch } from "react-redux";
import { goToNextStep, goToPrevStep, openModal, closeModal, toggleOrderSummary, setShippingFormDetails, setShippingInfo, setPaymentDetails } from "../../../redux/createOrder/actions";

const BASE_URL = import.meta.env.VITE_USERS_API;

export const CreateOrder = () => {
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();

  const { step, modalIsOpened, orderSummaryIsOpened, shippingFormDetails, shippingInfo, paymentDetails } = useSelector((state) => state.createOrder);

  const handleNextStep = () => dispatch(goToNextStep());
  const handlePrevStep = () => dispatch(goToPrevStep());

  const handleOpenModal = () => dispatch(openModal());
  const handleCloseModal = () => dispatch(closeModal());

  const handleToggleSummary = () => dispatch(toggleOrderSummary());

  const handleShippingFormSubmit = async (formData) => {
    try {
      const r = await fetch(`${BASE_URL}users`);
      const data = await r.json();

      dispatch(setShippingFormDetails(formData));

      auth.setIsLogin(true);
      auth.setEmail(formData.email);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShippingInfoSubmit = (data) => {
    dispatch(setShippingInfo(data));
    handleNextStep();
  };

  const handlePaymentSubmit = (data) => {
    dispatch(setPaymentDetails(data));
  };

  return (
    <>
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
                <div className={step === 1 ? s["order__subwrap--active"] : s.order__subwrap}>
                  <div className={s.order__line}></div>
                  <div className={s.order__conf}>{step > 1 ? <img src={checkmark} alt="checkmark" className={s.order__checkmark} /> : "1"}</div>
                  <div className={s.order__line}></div>
                </div>
                <p className={s.order__stage}>Shipping</p>
              </div>

              <div className={s.order__wrapper}>
                <div className={step === 2 ? s["order__subwrap--active"] : s.order__subwrap}>
                  <div className={s.order__line}></div>
                  <div className={s.order__conf}>2</div>
                  <div className={s.order__line}></div>
                </div>
                <p className={s.order__stage}>Review & Payments</p>
              </div>
            </div>

            <div className={s.order__addition}>
              <OrderSummary className={s.order__mobile} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={handleToggleSummary} openModal={handleOpenModal} />

              {step === 1 ? (
                <ShippingDetails shippingForm={shippingFormDetails} shippingInfo={shippingInfo} onSubmitForm={handleShippingFormSubmit} onSubmitInfo={handleShippingInfoSubmit}>
                  <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={handleToggleSummary} />

                  <OrderSummaryModal modalIsOpened={modalIsOpened} closeModal={handleCloseModal}>
                    <PaymentInfo />
                  </OrderSummaryModal>
                </ShippingDetails>
              ) : (
                <PaymentDetails onBack={handlePrevStep} onSubmitPayment={handlePaymentSubmit}>
                  <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={handleToggleSummary} />

                  <PaymentInfo className={s.order__tablet} />

                  <OrderSummaryModal modalIsOpened={modalIsOpened} closeModal={handleCloseModal}>
                    <PaymentInfo />
                  </OrderSummaryModal>
                </PaymentDetails>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
