import { ShoppingDetails } from "./ShoppingDetails/ShoppingDetails";

export const CreateOrder = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Create Order</a>
          </li>
        </ol>
      </nav>
      <div className="step__wrap">
        <div className="step__shopping">
          <div className="step__subwrap">
            <div className="step__line"></div>
            <div className="step__conf">1{/* <svg></svg> */}</div>
            <div className="step__line"></div>
          </div>
          <p className="step__stage">Shopping</p>
        </div>
        <div className="step__rp">
          <div className="step__subwrap">
            <div className="step__line"></div>
            <div className="step__conf">2{/* <svg></svg> */}</div>
            <div className="step__line"></div>
          </div>
          <p className="step__stage">Review & Payments</p>
        </div>
      </div>
      <ShoppingDetails />
      </>
  );
};
