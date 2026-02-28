import styles from "../../pages/CartPage/CartPage.module.scss";
import deleteIcon from "../../images/cart/Delete.svg";
import editIcon from "../../images/cart/Edit.svg";
export const CartMobileItem = ({ product, onIncrement, onDecrement, onRemove }) => {
  return (
    <li className={styles.cart__phone__item}>
      <div className={styles.cart__phone__content}>
        <img src={product.img} alt={product.name} className={styles.cart__phone__image} />
        <div className={styles.cart__phone__info}>
          <h4 className={styles.cart__phone__title}>{product.name}</h4>
          <p className={styles.cart__phone__number}>
            <span className={styles.cart__phone__desc}>Size: </span>
            {product.size}
          </p>
          <div className={styles.cart__phone__color}>
            Color:
            <div className={styles.cart__phone__square}>
              <div 
                className={styles.cart__phone__color} 
                style={{ backgroundColor: product.colors[0] }}
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.cart__phone__actions}>
          {/* Added onClick here for deletion */}
          <button type="button" className={styles.cart__phone__button} onClick={onRemove}>
            <img className={styles.cart__phone__icon} src={deleteIcon} alt="Delete" />
          </button>
          <button type="button" className={styles.cart__phone__button}>
            <img className={styles.cart__phone__icon} src={editIcon} alt="Edit" />
          </button>
        </div>
      </div>
      <div className={styles.cart__phone__amount}>
        <div className={styles.cart__phone__quantity}>
          <p className={styles.cart__phone__subtitle}>Quantity</p>
          
          <div className={styles.cart__phone__rectangle}>
            <button 
              className={styles.cart__phone__subtract} 
              type="button"
              onClick={onDecrement}
            >
              <div className={styles.cart__phone__minus}></div>
            </button>
            <p>{product.quantity || 1}</p>
            <button 
              type="button" 
              className={styles.cart__phone__add}
              onClick={onIncrement}
            >
              <div className={styles.cart__phone__plus}></div>
              <div className={styles.cart__phone__plus}></div>
            </button>
          </div>
          
        </div>
        <p className={styles.cart__phone__price}>
          <span className={styles.cart__phone__price__light}>Price:</span>
          {product.price.toFixed(2)} EUR
        </p>
      </div>
    </li>
  );
};