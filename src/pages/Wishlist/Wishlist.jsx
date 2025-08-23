import styles from "./Whishlist.module.scss";
import firstImgWishlist from "../../images/mini-catalog-02.jpg";
import secondImgWishlist from "../../images/mini-catalog-05.jpg";
import thirdImgWishlist from "../../images/mini-catalog-07.jpg";
import editIcon from "../../images/remark-wishlist.svg";
import removeIcon from "../../images/closeIcon-wishlist.svg";

const wishlistItems = [
  {
    id: 1,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${firstImgWishlist}`,
  },
  {
    id: 2,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${secondImgWishlist}`,
  },
  {
    id: 3,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${thirdImgWishlist}`,
  },
  {
    id: 4,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${secondImgWishlist}`,
  },
  {
    id: 5,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${thirdImgWishlist}`,
  },
  {
    id: 6,
    title: "Angels malu zip jeans slim black used",
    price: "120,00 EUR",
    image: `${firstImgWishlist}`,
  },
];

export const Whishlist = () => {
  return (
    <section className={styles.whishlist}>
      <a className={styles.navigation}>Home / My Dashboard</a>
      <h1 className={styles.whishlistH1}>My Wishlist</h1>
      <div className={styles.mainDiv}>
        <div className={styles.navContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Account Dashboard
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Account Information
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Address Book
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                My Orders
              </a>
            </li>
            <li cclassName={styles.navItem}>
              <a href="#" className={`${styles.navLink} ${styles.active}`}>
                My Wishlist
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                Newsletter Subscriptions
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.wishlistItems}>
          <div className={styles.grid}>
            {wishlistItems.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles.cardImageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.btnPositions}>
                    <button className={styles.removeButton}>
                      <img
                        src={removeIcon}
                        alt="Remove"
                        className={styles.removeIcon}
                      />
                    </button>
                    <button className={styles.editButton}>
                      <img
                        src={editIcon}
                        alt="Edit"
                        className={styles.editIcon}
                      />
                    </button>
                  </div>
                </div>
                <p className={styles.cardTitle}>{item.title}</p>
                <p className={styles.cardPrice}>{item.price}</p>
                <div className={styles.cardControls}>
                  <input
                    min="1"
                    defaultValue="1"
                    className={styles.quantityInput}
                  />
                  <button className={styles.addToCart}>ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bottomButtons}>
            <button className={styles.secondaryButton}>SHARE WISH LIST</button>
            <button className={styles.secondaryButton}>UPDATE WISH LIST</button>
            <button className={styles.secondaryButton}>ADD ALL TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};
