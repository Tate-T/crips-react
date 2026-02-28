import styles from "../../pages/CartPage/CartPage.module.scss";
import likeIcon from "../../images/cart/Like.svg";
import deleteIcon from "../../images/cart/Delete.svg";
import editIcon from "../../images/cart/Edit.svg";

export const CartDesktopItem = ({ product, onIncrement, onDecrement, onRemove }) => {
  const total = product.price * (product.quantity || 1);

  return (
    <li className={styles.cart__item}>
      <img src={product.img} alt={product.name} className={styles.cart__item__image} />
      <div className={styles.cart__item__wrapper}>
        <h4 className={styles.cart__item__title}>{product.name}</h4>
        <div className={styles.cart__item__square}>
          <div 
            className={styles.cart__item__color}
            style={{ backgroundColor: product.colors[0] }}
          ></div>
        </div>
      </div>
      <p className={styles.cart__item__price}>{product.price.toFixed(2)} EUR</p>
      <p className={styles.cart__item__size}>{product.size}</p>
      
      <div className={styles.cart__item__quantity__rectangle}>
        <button 
          className={styles.cart__item__quantity__subtract} 
          type="button"
          onClick={onDecrement}
        >
          <div className={styles.cart__item__quantity__minus}></div>
        </button>
        <p>{product.quantity || 1}</p>
        <button 
          type="button" 
          className={styles.cart__item__quantity__add}
          onClick={onIncrement}
        >
          <div className={styles.cart__item__quantity__plus}></div>
          <div className={styles.cart__item__quantity__plus}></div>
        </button>
      </div>
      
      <p className={styles.cart__item__total}>{total.toFixed(2)} EUR</p>
      
      <ul className={styles.cart__item__buttons}>
        <li className={styles.cart__item__button}>
          <img className={styles.cart__item__icon} src={likeIcon} alt="Like" />
        </li>
        <li className={styles.cart__item__button}>
          <img className={styles.cart__item__icon} src={editIcon} alt="Edit" />
        </li>
        <li className={styles.cart__item__button} onClick={onRemove}>
          <img className={styles.cart__item__icon} src={deleteIcon} alt="Delete" />
        </li>
      </ul>
    </li>
  );
};
