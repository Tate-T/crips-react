// import { Header } from "../../../src/components/Header/Header.jsx";
// import { Footer } from "../../../src/components/Footer/Footer.jsx";

export const hoppingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div>
          <p>Home / Shopping Cart</p>
          <h2>Shopping Cart</h2>
          <div>
            <div>
              <ul>
                <li>Product</li>
                <li>Price</li>
                <li>Size</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
              <ul>
                {/* Make from localhost */}
                <li>
                  <img src="url" alt="smth" />
                  <div>
                    <h4>Title</h4>
                    <div>
                      <div>Color</div>
                    </div>
                  </div>
                  <p>Price</p>
                  <p>Size</p>
                  <div>
                    <div></div>
                    <p>Quantity</p>
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <p>Price</p>
                  <ul>
                    <li>
                      <svg></svg>
                    </li>
                    <li>
                      <svg></svg>
                    </li>
                    <li>
                      <svg></svg>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <button>continue shopping</button>
                <button>clear shopping cart</button>
              </div>
            </div>
            <form action="">
              <div>
                <h6>Apply Discount Code</h6>
                <div>
                  <input type="text" />
                  <button></button>
                </div>
                <div>
                  <h6>Estimate Shipping and Tax</h6>
                  <div>{/*  Minus/plus logic  */}</div>
                </div>
                <p>Enter your destination to get a shipping estimate.</p>
                <div>
                  <p>
                    Country <span>*</span>
                  </p>
                  <select name="countries" id="countries-select">
                    <option value="United States">United States</option>
                  </select>
                </div>
                <div>
                  <p>
                    State/Province <span>*</span>
                  </p>
                  <select name="states" id="states-select">
                    <option value="Alaska">Alaska</option>
                  </select>
                </div>
                <div>
                  <p>Zip/Postal Code</p>
                  <input type="text" />
                </div>

                {/* needs testing!!!!!!!!!!!!!!!!!! */}
                <p>Flat Rate</p>
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    value="flat"
                    id="flat"
                    checked
                  />
                  <label for="flat">Fixed 5.00 EUR</label>
                </div>

                <p>Best Way</p>
                <div>
                  <input
                    type="radio"
                    name="shipping"
                    value="table"
                    id="table"
                  />
                  <label for="table">Table Rate 10.00 EUR</label>
                </div>
              </div>
              <div>
                <div>
                  <p>Subtotal</p>
                  <p>120.00 EUR</p>
                </div>
                <div>
                  <p>Tax</p>
                  <p>0.00 EUR</p>
                </div>
                <div>
                  <p>Order Total</p>
                  <p>120.00 EUR</p>
                </div>
                <div></div>
                <button type="button">Check Out with Multiple Addresses</button>
                <button type="submit">proceed to checkout</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};
