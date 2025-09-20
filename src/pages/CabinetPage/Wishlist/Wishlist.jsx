import React, { Component } from "react";
import styles from "./Whishlist.module.scss";
import { catalogData } from "../../../data/catalog-data";
import editIcon from "../../../images/remark-wishlist.svg";
import removeIcon from "../../../images/closeIcon-wishlist.svg";

// const initialWishlist = [
//   {
//     id: 1,
//     title: "Jeans Black Used",
//     price: "120,00 EUR",
//     // image: firstImgWishlist,
//   },
//   {
//     id: 2,
//     title: "Jeans Blue Slim",
//     price: "140,00 EUR",
//     // image: secondImgWishlist,
//   },
//   {
//     id: 3,
//     title: "Jeans White Fit",
//     price: "110,00 EUR",
//     // image: thirdImgWishlist,
//   },
//   {
//     id: 4,
//     title: "Jeans Blue Slim",
//     price: "140,00 EUR",
//     // image: secondImgWishlist,
//   },
//   {
//     id: 5,
//     title: "Jeans White Fit",
//     price: "110,00 EUR",
//     // image: thirdImgWishlist,
//   },
//   {
//     id: 6,
//     title: "Jeans Black Used",
//     price: "120,00 EUR",
//     // image: firstImgWishlist,
//   },
// ];

export class Whishlist extends Component {
  state = {
    items: catalogData,
    currentPage: 1,
    perPage: 6,
    activeSection: "My Wishlist",
  };

  handleRemove = (id) => {
    this.setState((prev) => ({
      items: prev.items.filter((it) => it.id !== id),
    }));
  };

  handleDuplicate = (item) => {
    this.setState((prev) => {
      const newItem = { ...item, id: Date.now() };
      return { items: [...prev.items, newItem] };
    });
  };

  goToPage = (page) => {
    this.setState({ currentPage: page });
  };

  goToSection = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { items, currentPage, perPage, activeSection } = this.state;
    const start = (currentPage - 1) * perPage;
    const pageItems = items.slice(start, start + perPage);

    const totalPages = Math.ceil(items.length / perPage);

    return (
      <section className={styles.whishlist}>
        <a className={styles.navigation}>Home / My Dashboard</a>
        <h1 className={styles.whishlistH1}>{activeSection}</h1>

        <div className={styles.mainDiv}>
          <div className={styles.navContainer}>
            <ul className={styles.navList}>
              {[
                "Account Dashboard",
                "Account Information",
                "Address Book",
                "My Orders",
                "My Wishlist",
                "Newsletter Subscriptions",
              ].map((section) => (
                <li
                  key={section}
                  className={`${styles.navItem} ${
                    activeSection === section ? styles.activeItem : ""
                  }`}
                  onClick={() => this.goToSection(section)}
                >
                  <a href="#" className={styles.navLink}>
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {activeSection === "My Wishlist" && (
            <div className={styles.wishlistItems}>
              <div className={styles.grid}>
                {pageItems.map((item) => (
                  <div className={styles.card} key={item.id}>
                    <div className={styles.cardImageWrapper}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.cardImage}
                      />
                      <div className={styles.btnPositions}>
                        <button
                          className={styles.removeButton}
                          onClick={() => this.handleRemove(item.id)}
                        >
                          <img
                            src={removeIcon}
                            alt="Remove"
                            className={styles.removeIcon}
                          />
                        </button>

                        <button
                          className={styles.editButton}
                          onClick={() => this.handleDuplicate(item)}
                        >
                          <img
                            src={editIcon}
                            alt="Duplicate"
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
            </div>
          )}
        </div>
      </section>
    );
  }
}
