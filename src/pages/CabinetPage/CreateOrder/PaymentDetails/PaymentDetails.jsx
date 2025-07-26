export const PaymentDetails = ({ children }) => {
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
        {children}
        <ul>
          <li>
            <div>
              <h2>Payment Method:</h2>
              <a href="#">
                Vyacheslav Kulbitskii Moskovski prospect 39/1, Apt. 147 Vitebsk,
                Vitebsk region 210038 Belarus{" "}
              </a>
              <a href="to:+375292169179">+375292169179 </a>
            </div>
            <button>
              <img src={arrow} alt="arrow icon" />
            </button>
          </li>
          <li>
            <div>
              <h2>Shipping Method:</h2>
              <p>Flat Rate - Fixed</p>
            </div>
            <button>
              <img src={arrow} alt="arrow icon" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
