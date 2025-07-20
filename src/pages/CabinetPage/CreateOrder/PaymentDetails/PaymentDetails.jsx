export const PaymentDetails = () => {
  return (
    <>
      <div>
        <form>
          <h2>Payment Method:</h2>
          <p>Check / Money order</p>
          <label>
            <input type="ckeckbox" />
            My billing and shipping address are the same
          </label>
          <div>
            <a href="#">
              Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk,
              Vitebsk region 210038 Belarus
            </a>
            <a href="to:+375292169179">+375292169179</a>
          </div>
          <div>
            <button>Place Order</button>
            <button>Next</button>
          </div>
        </form>
        <form>
          <h2>Apply Discount Code</h2>
          <label>
            <input type="text" placeholder="Enter discount code" />
            <button>Apply Discount</button>
          </label>
        </form>
      </div>
      <div>
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
              {/* <svg>
              <use href="#"></use>
            </svg> */}
            </div>
          </div>
          <ul>
            <li>
              <img src="#" alt="dress" />
              <div>
                <div>
                  <h3>Angels malu zip jeans slim black used</h3>
                  <p>
                    Qty: <span>1</span>
                  </p>
                  <button>
                    View Details
                    {/* <svg><use></use></svg> */}
                  </button>
                </div>
                <p>129,00 EUR</p>
              </div>
            </li>
            <li>
              <img src="#" alt="dress" />
              <div>
                <div>
                  <h3>Angels malu zip jeans slim black used</h3>
                  <p>
                    Qty: <span>1</span>
                  </p>
                  <button>
                    View Details
                    {/* <svg><use></use></svg> */}
                  </button>
                </div>
                <p>129,00 EUR</p>
              </div>
            </li>
          </ul>
        </div>
        <ul>
            <li>
                <div>
                    <h2>Payment Method:</h2>
                    <a href="#">Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk, Vitebsk region 210038 Belarus </a>
                    <a href="to:+375292169179">+375292169179 </a>
                </div>
                <button>
                    <svg>
                        <use href="#"></use>
                    </svg>
                </button>
            </li>
            <li>
                <div>
                    <h2>Shipping Method:</h2>
                    <p>Flat Rate - Fixed</p>
                </div>
                <button>
                    <svg>
                        <use href="#"></use>
                    </svg>
                </button>
            </li>
        </ul>
      </div>
    </>
  );
};
