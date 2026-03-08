import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "../../components/Container/Container";
import { Header } from "../../../src/components/Header/Header.jsx";
import { Footer } from "../../../src/components/Footer/Footer.jsx";

import { CartMobileItem } from "../../components/Cart/CartMobileItem.jsx";
import { CartDesktopItem } from "../../components/Cart/CartDesktopItem.jsx";
import { CartSummaryForm } from "../../components/Cart/CartSummaryForm.jsx";
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeItem, 
  clearCart, 
  getCartItems 
} from "../../redux/cart/cartSlice.js"; 
import { setShippingInfo } from "../../redux/createOrder/actions.js";

import styles from "./CartPage.module.scss";

export const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const products = useSelector(getCartItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form=e.target;
    const formData = {
      email:   "",
      password:  "",
      firstName:   "",
      lastName:  "",
      company:  "",
      streetAddress: ["","",""],
      country: form.countries?.value || "",
      stateProvince: form.states?.value || "",
      shippingMethod: form.shipping?.value || "fixed",
      zip: form.postCode?.value || "",
    };

    console.log(formData);

    dispatch(setShippingInfo(formData));
    navigate("/CabinetPage", { replace: false });
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: false });

  }

  const subtotal = products.reduce(
    (acc, curr) => acc + curr.price * (curr.quantity || 1),
    0
  );

  return (
    <>
      <Header />
      <main>
        <section className={styles.cart}>
          <Container>
            <p className={styles.cart__subtitle}>Home / Shopping Cart</p>
            <h2 className={styles.cart__title}>Shopping Cart</h2>

            <div className={styles.cart__everything}>
              {/* Mobile View */}
              <div className={styles.cart__phone__products}>
                <ul className={styles.cart__phone__list}>
                  {products.map((product) => (
                    <CartMobileItem
                      key={product.id}
                      product={product}
                      onIncrement={() => dispatch(incrementQuantity(product.id))}
                      onDecrement={() => dispatch(decrementQuantity(product.id))}
                      onRemove={() => dispatch(removeItem(product.id))}
                    />
                  ))}
                </ul>
              </div>

              {/* Desktop View */}
              <div className={styles.cart__products}>
                <ul className={styles.cart__categories}>
                  <li className={styles.cart__categorie}>Product</li>
                  <li className={styles.cart__categorie}>Price</li>
                  <li className={styles.cart__categorie}>Size</li>
                  <li className={styles.cart__categorie}>Quantity</li>
                  <li className={styles.cart__categorie}>Total</li>
                </ul>
                <ul className={styles.cart__list}>
                  {products.map((product) => (
                    <CartDesktopItem
                      key={product.id}
                      product={product}
                      onIncrement={() => dispatch(incrementQuantity(product.id))}
                      onDecrement={() => dispatch(decrementQuantity(product.id))}
                      onRemove={() => dispatch(removeItem(product.id))}
                    />
                  ))}
                </ul>
                <div className={styles.cart__wrapper}>
                  <button onClick={handleClick} type="button" className={styles.cart__button}>
                    continue shopping
                  </button>
                  <button 
                    type="button" 
                    className={styles.cart__button}
                    onClick={() => dispatch(clearCart())}
                  >
                    clear shopping cart
                  </button>
                </div>
              </div>

              {/* Checkout & Summary Form */}
              <CartSummaryForm subtotal={subtotal} handleSubmit={handleSubmit} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};