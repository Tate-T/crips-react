import { Container } from "../../components/Container/Container";
import { Header } from "../../../src/components/Header/Header.jsx";
// import { Footer } from "../../../src/components/Footer/Footer.jsx";
import styles from "./CartPage.module.scss";
import likeIcon from "../../images/cart/Like.svg";
import deleteIcon from "../../images/cart/Delete.svg";
import editIcon from "../../images/cart/Edit.svg";

export const CartPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <section className={styles.cart}>
              <div className={styles.container}>
                <p className={styles.cart__subtitle}>Home / Shopping Cart</p>
                <h2 className={styles.cart__title}>Shopping Cart</h2>
                <div className={styles.cart__everything}>
                  <div className={styles.cart__phone__products}>
                    <ul className={styles.cart__phone__list}>
                      <li className={styles.cart__phone__item}>
                        <div className={styles.cart__phone__content}>
                          <img
                            src=""
                            alt="Dress"
                            className={styles.cart__phone__image}
                          />
                          <div className={styles.cart__phone__info}>
                            <h4 className={styles.cart__phone__title}>
                              Angels malu zip jeans slim black used
                            </h4>
                            <p className={styles.cart__phone__number}>
                              <span className={styles.cart__phone__desc}>
                                Size:{" "}
                              </span>
                              W31/L34
                            </p>
                            <p className={styles.cart__phone__number}>
                              <span className={styles.cart__phone__desc}>
                                Art.No.:{" "}
                              </span>
                              434536465
                            </p>
                            <p className={styles.cart__phone__color}>
                              Color:
                              <div className={styles.cart__phone__square}>
                                <div
                                  className={styles.cart__phone__color}
                                ></div>
                              </div>
                            </p>
                          </div>
                          <div className={styles.cart__phone__actions}>
                            <button
                              type="button"
                              className={styles.cart__phone__button}
                            >
                              <img
                              className={styles.cart__phone__icon}
                              src={deleteIcon}
                              alt="Delete"
                            />
                            </button>
                            <button
                              type="button"
                              className={styles.cart__phone__button}
                            >
                              <img
                              className={styles.cart__phone__icon}
                              src={editIcon}
                              alt="Edit"
                            />
                            </button>
                          </div>
                        </div>
                        <div className={styles.cart__phone__amount}>
                          <div className={styles.cart__phone__quantity}>
                            <p className={styles.cart__phone__subtitle}>
                              Quantity
                            </p>
                            <div className={styles.cart__phone__rectangle}>
                              <button
                                className={styles.cart__phone__subtract}
                                type="button"
                              >
                                <div
                                  className={styles.cart__phone__minus}
                                ></div>
                              </button>
                              <p>1</p>
                              <button
                                type="button"
                                className={styles.cart__phone__add}
                              >
                                <div className={styles.cart__phone__plus}></div>
                                <div className={styles.cart__phone__plus}></div>
                              </button>
                            </div>
                          </div>
                          <p className={styles.cart__phone__price}>
                            <span className={styles.cart__phone__price__light}>
                              Price:
                            </span>
                            90,00 EUR
                          </p>
                        </div>
                      </li>
                       <li className={styles.cart__phone__item}>
                        <div className={styles.cart__phone__content}>
                          <img
                            src=""
                            alt="Dress"
                            className={styles.cart__phone__image}
                          />
                          <div className={styles.cart__phone__info}>
                            <h4 className={styles.cart__phone__title}>
                              Angels malu zip jeans slim black used
                            </h4>
                            <p className={styles.cart__phone__number}>
                              <span className={styles.cart__phone__desc}>
                                Size:{" "}
                              </span>
                              W31/L34
                            </p>
                            <p className={styles.cart__phone__number}>
                              <span className={styles.cart__phone__desc}>
                                Art.No.:{" "}
                              </span>
                              434536465
                            </p>
                            <p className={styles.cart__phone__color}>
                              Color:
                              <div className={styles.cart__phone__square}>
                                <div
                                  className={styles.cart__phone__color}
                                ></div>
                              </div>
                            </p>
                          </div>
                          <div className={styles.cart__phone__actions}>
                            <button
                              type="button"
                              className={styles.cart__phone__button}
                            >
                              <img
                              className={styles.cart__phone__icon}
                              src={deleteIcon}
                              alt="Delete"
                            />
                            </button>
                            <button
                              type="button"
                              className={styles.cart__phone__button}
                            >
                              <img
                              className={styles.cart__phone__icon}
                              src={editIcon}
                              alt="Edit"
                            />
                            </button>
                          </div>
                        </div>
                        <div className={styles.cart__phone__amount}>
                          <div className={styles.cart__phone__quantity}>
                            <p className={styles.cart__phone__subtitle}>
                              Quantity
                            </p>
                            <div className={styles.cart__phone__rectangle}>
                              <button
                                className={styles.cart__phone__subtract}
                                type="button"
                              >
                                <div
                                  className={styles.cart__phone__minus}
                                ></div>
                              </button>
                              <p>1</p>
                              <button
                                type="button"
                                className={styles.cart__phone__add}
                              >
                                <div className={styles.cart__phone__plus}></div>
                                <div className={styles.cart__phone__plus}></div>
                              </button>
                            </div>
                          </div>
                          <p className={styles.cart__phone__price}>
                            <span className={styles.cart__phone__price__light}>
                              Price:
                            </span>
                            90,00 EUR
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.cart__products}>
                    <ul className={styles.cart__categories}>
                      <li className={styles.cart__categorie}>Product</li>
                      <li className={styles.cart__categorie}>Price</li>
                      <li className={styles.cart__categorie}>Size</li>
                      <li className={styles.cart__categorie}>Quantity</li>
                      <li className={styles.cart__categorie}>Total</li>
                    </ul>
                    <ul className={styles.cart__list}>
                      <li className={styles.cart__item}>
                        <img
                          src="url"
                          alt="Dress"
                          className={styles.cart__item__image}
                        />
                        <div className={styles.cart__item__wrapper}>
                          <h4 className={styles.cart__item__title}>Title</h4>
                          <div className={styles.cart__item__square}>
                            <div className={styles.cart__item__color}></div>
                          </div>
                        </div>
                        <p className={styles.cart__item__price}>Price</p>
                        <p className={styles.cart__item__size}>W32</p>
                        <div className={styles.cart__item__quantity__rectangle}>
                          <button
                            className={styles.cart__item__quantity__subtract}
                            type="button"
                          >
                            <div
                              className={styles.cart__item__quantity__minus}
                            ></div>
                          </button>
                          <p>1</p>
                          <button
                            type="button"
                            className={styles.cart__item__quantity__add}
                          >
                            <div
                              className={styles.cart__item__quantity__plus}
                            ></div>
                            <div
                              className={styles.cart__item__quantity__plus}
                            ></div>
                          </button>
                        </div>
                        <p className={styles.cart__item__total}>Total</p>
                        <ul className={styles.cart__item__buttons}>
                          <li className={styles.cart__item__button}>
                            <img
                              className={styles.cart__item__icon}
                              src={likeIcon}
                              alt="Like"
                            />
                          </li>
                          <li className={styles.cart__item__button}>
                            <img
                              className={styles.cart__item__icon}
                              src={editIcon}
                              alt="Edit"
                            />
                          </li>
                          <li className={styles.cart__item__button}>
                            <img
                              className={styles.cart__item__icon}
                              src={deleteIcon}
                              alt="Delete"
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className={styles.cart__wrapper}>
                      <button type="button" className={styles.cart__button}>
                        continue shopping
                      </button>
                      <button type="button" className={styles.cart__button}>
                        clear shopping cart
                      </button>
                    </div>
                  </div>
                  <form action="" className={styles.cart__form}>
                    <div className={styles.cart__details}>
                      <h6>Apply Discount Code</h6>
                      <div className={styles.cart__details__wrapper}>
                        <input
                          className={styles.cart__details__input}
                          type="text"
                          placeholder="Enter discount code"
                        />
                        <button
                          type="button"
                          className={styles.cart__details__btn}
                        >
                          Apply
                        </button>
                      </div>
                      <div>
                        <h6>Estimate Shipping and Tax</h6>
                        <div></div>
                      </div>
                      <p className={styles.cart__details__subtitle}>
                        Enter your destination to get a shipping estimate.
                      </p>
                      <div className={styles.cart__details__shipping}>
                        <div className={styles.cart__details__information}>
                          <p className={styles.cart__details__info}>
                            Country
                            <span className={styles.cart__details__info__red}>
                              *
                            </span>
                          </p>
                          <select
                            name="countries"
                            id="countries-select"
                            className={styles.cart__details__select}
                          >
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div className={styles.cart__details__information}>
                          <p className={styles.cart__details__info}>
                            State/Province
                            <span className={styles.cart__details__info__red}>
                              *
                            </span>
                          </p>
                          <select
                            name="states"
                            id="states-select"
                            className={styles.cart__details__select}
                          >
                            <option value="Alaska">Alaska</option>
                          </select>
                        </div>
                        <div className={styles.cart__details__information}>
                          <p className={styles.cart__details__info}>
                            Zip/Postal Code
                          </p>
                          <input
                            type="text"
                            className={styles.cart__details__postcode}
                          />
                        </div>
                      </div>
                      <p className={styles.cart__details__tax}>Flat Rate</p>
                      <div>
                        <input
                          type="radio"
                          name="shipping"
                          value="flat"
                          id="table"
                        />
                        <label for="flat" className={styles.cart__details__taxchoice}>Fixed 5.00 EUR</label>
                      </div>

                      <p className={styles.cart__details__tax}>Best Way</p>
                      <div>
                        <input
                          type="radio"
                          name="shipping"
                          value="table"
                          id="table"
                        />
                        <label for="table" className={styles.cart__details__taxchoice}>Table Rate 10.00 EUR</label>
                      </div>
                    </div>
                    <div className={styles.cart__total}>
                      <div className={styles.cart__total__subtitle}>
                        <p>Subtotal</p>
                        <p>120.00 EUR</p>
                      </div>
                      <div className={styles.cart__total__tax}>
                        <p>Tax</p>
                        <p>0.00 EUR</p>
                      </div>
                      <div className={styles.cart__total__title}>
                        <p>Order Total</p>
                        <p>120.00 EUR</p>
                      </div>
                      <div className={styles.cart__total__line}></div>
                      <button type="button" className={styles.cart__total__checkout__multiple}>
                        Check Out with Multiple Addresses
                      </button>
                      <button type="submit" className={styles.cart__total__checkout}>proceed to checkout</button>
                    </div>
                  </form>
                </div>
              </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};
