import arrow from "../../../images/CreateOrder/arrow-bottom.svg";
import dress1 from "../../../images/mini-catalog-04.jpg";
import dress2 from "../../../images/mini-catalog-02.jpg";
export const OrderSummary = () => {
  return (
    <div>
      <h2>Order Summary</h2>
      <div>
        <div>
          <ul>
            <li>
              <p>Cart Subtotal</p>
              <p>$56.25</p>
            </li>
            <li>
              <p>Shipping</p>
              <p>$5.00</p>
            </li>
            <li>
              <p>Flat Rate - Fixed</p>
            </li>
          </ul>
          <div>
            <p>Order Total</p>
            <span>120.00 EUR</span>
          </div>
        </div>
        <div>
          <p>1 Item in Cart</p>
          <img src={arrow} alt="arrow icon" />

        </div>
      </div>
      <ul>
        <li>
          <img src={dress1} alt="dress" />
          <div>
            <div>
              <h3>Angels malu zip jeans slim black used</h3>
              <p>
                Qty: <span>1</span>
              </p>
              <button>
                View Details
                <img src={arrow} alt="arrow icon" />

              </button>
            </div>
            <p>129,00 EUR</p>
          </div>
        </li>
        <li>
          <img src={dress2} alt="dress" />
          <div>
            <div>
              <h3>Angels malu zip jeans slim black used</h3>
              <p>
                Qty: <span>1</span>
              </p>
              <button>
                View Details
                <img src={arrow} alt="arrow icon" />

              </button>
            </div>
            <p>129,00 EUR</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
