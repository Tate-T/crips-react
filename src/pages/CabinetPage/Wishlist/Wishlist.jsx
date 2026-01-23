import React, { useState, useEffect } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import styles from "./Wishlist.module.scss";
import { catalogData } from "../../../data/catalog-data";
import { Container } from "../../../components/Container/Container";
import editIcon from "../../../images/remark-wishlist.svg";
import removeIcon from "../../../images/closeIcon-wishlist.svg";

export function Wishlist() {
  //dynamic id's using useStated
  const [items, setItems] = useState(() =>
    catalogData.map((item, index) => ({
      ...item,
      id: item.id || `item-${Date.now()}-${index}`,
    })),
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerpage] = useState(6);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("MY WISHLIST");

  const navLinks = [
    { name: "Account Dashboard", id: "dashboard" },
    { name: "Account Information", id: "info" },
    { name: "Address Book", id: "address" },
    { name: "My Orders", id: "orders" },
    { name: "My Wishlist", id: "wishlist" },
    { name: "Newsletter Subscriptions", id: "newsletter" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (sectionName) => {
    setIsOpen(false);
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  // !Pagination Logic
  const totalPages = Math.ceil(items.length / perPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const start = (currentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  const handleDuplicate = (item) => {
    const newItem = { ...item, id: Date.now() };
    setItems((prev) => {
      const newItems = [...prev, newItem];
      const newTotalPages = Math.ceil(newItems.length / perPage);
      setCurrentPage(newTotalPages);
      return newItems;
    });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <section className={styles.wishlist}>
        <a className={styles.wishlist_navigation}>
          Home / Create New Customer Account
        </a>
        <p className={styles.mainWishlistCont_titleDesk}>{activeSection}</p>

        <div className={styles.mainWishlistCont}>
          <div className={styles.wishlistCont_actionItem}>
            <div
              className={`${styles.dropdown} ${isOpen ? styles.active : ""}`}
            >
              <div className={styles.dropdown_trigger} onClick={toggleDropdown}>
                {activeSection}
                <div className={styles.dropdown_arrowIcon}>
                  <span className={styles.dropdown_leftBar}></span>
                  <span className={styles.dropdown_rightBar}></span>
                </div>{" "}
              </div>

              <ul className={styles.dropdown_menu}>
                {[
                  "Account Dashboard",
                  "Account Information",
                  "Address Book",
                  "My Orders",
                  "My Wishlist",
                  "Newsletter Subscriptions",
                ].map((item) => (
                  <li
                    key={item}
                    className={styles.dropdown_item}
                    onClick={() => handleSelect(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className={styles.desktopNav}>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${styles.desktopNav_item} ${activeSection === link.name ? styles.desktopNav_active : ""}`}
                  onClick={() => goToSection(link.name)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <p className={styles.mainWishlistCont_title}>{activeSection}</p>

          {activeSection === "MY WISHLIST" && (
            <div className={styles.wishlistCont}>
              <div className={styles.wishlistCont_grid}>
                {pageItems.map((item) => (
                  <div className={styles.wishlistCard} key={item.id}>
                    <div className={styles.wishlistCard_imgWrapper}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.wishlistCard_img}
                      />
                      <div className={styles.wishlistCard_btnPositions}>
                        <button
                          className={styles.removeButton}
                          onClick={() => handleRemove(item.id)}
                        >
                          <img
                            src={removeIcon}
                            alt="Remove"
                            className={styles.removeIcon}
                          />
                        </button>
                        <button
                          className={styles.editButton}
                          onClick={() => handleDuplicate(item)}
                        >
                          <img
                            src={editIcon}
                            alt="Duplicate"
                            className={styles.editIcon}
                          />
                        </button>
                      </div>
                    </div>
                    <p className={styles.wishlistCard_topWomen}>{item.top}</p>
                    <p className={styles.wishlistCard_title}>{item.name}</p>
                    <p className={styles.wishlistCard_price}>{item.price}</p>
                    <div className={styles.wishlistCard_controls}>
                      <input
                        min="1"
                        defaultValue="1"
                        className={styles.wishlistCard_quantityInput}
                      />
                      <button className={styles.wishlistCard_addToCard}>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className={styles.pagination}>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => goToPage(number)}
                      className={`${styles.pagination_btn} ${currentPage === number ? styles.pagination_active : ""}`}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              )}

              <ul className={styles.wishlistCont_actions}>
                <li className={styles.wishlistCont_actionItem}>
                  <button className={styles.wishlistCont_actionBtn}>
                    SHARE WISH LIST
                  </button>
                </li>
                <li className={styles.wishlistCont_actionItem}>
                  <button className={styles.wishlistCont_actionBtn}>
                    UPDATE WISH LIST
                  </button>
                </li>
                <li className={styles.wishlistCont_actionItem}>
                  <button className={styles.wishlistCont_actionBtn}>
                    ADD ALL TO CART
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
