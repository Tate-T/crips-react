import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { Container } from "../../../components/Container/Container";
import { OrderSummary } from "../../../components/CreateOrder/OrderSummary/OrderSummary";
import s from "./CreateOrder.module.scss";
import checkmark from "../../../images/CreateOrder/ckeckmark.svg";
import { PaymentDetails } from "./PaymentDetails/PaymentDetails";
import { OrderSummaryModal } from "../../../components/CreateOrder/OrderSummaryModal/OrderSummaryModal";
import { PaymentInfo } from "../../../components/CreateOrder/PaymentInfo/PaymentInfo";

export const CreateOrder = ({ children }) => {
  return (
    <>
      {children}
      <section>
        <Container>
          <div className={s.order__mainwrap}>
            <div>
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
                  <div className={s["order__subwrap--active"]}>
                    <div className={s.order__line}></div>
                    <div className={s.order__conf}>
                      <img
                        className={s.order__checkmark}
                        src={checkmark}
                        alt="checkmark"
                      />
                    </div>
                    <div className={s.order__line}></div>
                  </div>
                  <p className={s.order__stage}>Shipping</p>
                </div>
                <div className={s.order__wrapper}>
                  <div className={s.order__subwrap}>
                    <div className={s.order__line}></div>
                    <div className={s.order__conf}>2</div>
                    <div className={s.order__line}></div>
                  </div>
                  <p className={s.order__stage}>Review & Payments</p>
                </div>
              </div>
            </div>
            <div className={s.order__addition}>
              <OrderSummary className={s.order__mobile} />
              <PaymentDetails>
                <OrderSummary className={s.order__tablet} />
                <PaymentInfo className={s.order__tablet}/>
                <OrderSummaryModal>
                  <PaymentInfo />
                </OrderSummaryModal>
              </PaymentDetails>
              <ShippingDetails>
                <OrderSummary className={s.order__tablet} />
                <OrderSummaryModal>
                  <PaymentInfo />
                </OrderSummaryModal>
              </ShippingDetails>
            </div>
          </div>
        </Container>
      </section>
      {children}
    </>
  );
};
