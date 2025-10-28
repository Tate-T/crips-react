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

const BASE_URL = import.meta.env.VITE_USERS_API;

export const CreateOrder = () => {
  const auth = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [orderSummaryIsOpened, setOrderSummaryIsOpened] = useState(false);
  const [shippingFormDetails, setShippingFormDetails] = useState({
    email: "",
    password: "",
  });
  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: ["", "", ""],
    country: "",
    stateProvince: "",
    shippingMethod: "fixed",
    zip: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    isSameAddress: false,
    discountCode: "",
  });

  const goToNextStep = () => setStep(2);
  const goToPrevStep = () => setStep(1);

  const openModal = () => setModalIsOpened(true);
  const closeModal = () => setModalIsOpened(false);

  const toggleOrderSummary = () => setOrderSummaryIsOpened(!orderSummaryIsOpened);

  const handleShippingFormSubmit = async (data) => {
    try {
      const r = await fetch(`${BASE_URL}users`);
      const data = await r.json();
    } catch (error) {
      console.error(error);
    }

    setShippingFormDetails(data);
    auth.setIsLogin(true);
    auth.setEmail(data.email);
    console.log("ShippingFormDetails", data);
  };

  const handleShippingInfoSubmit = (data) => {
    setShippingInfo(data);
    goToNextStep();
    console.log("ShippingInfo", data);
  };
  const handlePaymentSubmit = (data) => {
    setPaymentDetails(data);
    console.log("PaymentDetails", data);
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
              <OrderSummary className={s.order__mobile} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={toggleOrderSummary} openModal={openModal} />

              {step === 1 ? (
                <ShippingDetails shippingForm={shippingFormDetails} shippingInfo={shippingInfo} onSubmitForm={handleShippingFormSubmit} onSubmitInfo={handleShippingInfoSubmit}>
                  <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={toggleOrderSummary} />
                  <OrderSummaryModal modalIsOpened={modalIsOpened} closeModal={closeModal}>
                    <PaymentInfo />
                  </OrderSummaryModal>
                </ShippingDetails>
              ) : (
                <PaymentDetails onBack={goToPrevStep} onSubmitPayment={handlePaymentSubmit}>
                  <OrderSummary className={s.order__tablet} stateOfDetails={orderSummaryIsOpened} toggleOrderSummary={toggleOrderSummary} />
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
    </>
  );
};
