import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Wishlist.module.scss";
import { catalogData } from "../../../data/catalog-data";
import { Container } from "../../../components/Container/Container";
import editIcon from "../../../images/remark-wishlist.svg";
import removeIcon from "../../../images/closeIcon-wishlist.svg";
import NavBar from "../../../components/NavBar/NavBar";
import {
  removeItem,
  addItem,
  setCurrentPage,
  nextPage,
  prevPage,
} from "../../../redux/Wishlist/reducer";

export function Wishlist() {
  const dispatch = useDispatch();

  const { items, currentPage, perPage } = useSelector(
    (state) => state.wishlist,
  );

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("MY WISHLIST");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (sectionName) => {
    setIsOpen(false);
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleDuplicate = (item) => {
    dispatch(addItem(item));
  };

  const goToPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  };

  // !Pagination Logic
  const totalPages = Math.ceil(items.length / perPage);
  const start = (currentPage - 1) * perPage;
  const pageItems = items.slice(start, start + perPage);

  const renderPaginationItems = () => {
    const pageNumbers = [];
    const siblingCount = isMobile ? 0 : 1;
    const totalPagesLimit = isMobile ? 5 : 7;

    if (totalPages <= totalPagesLimit) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPages,
      );

      const showLeftDots = leftSiblingIndex > 2;
      const showRightDots = rightSiblingIndex < totalPages - 1;

      if (!showLeftDots && showRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        for (let i = 1; i <= leftItemCount; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (showLeftDots && !showRightDots) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        let rightItemCount = 3 + 2 * siblingCount;
        for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else if (showLeftDots && showRightDots) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
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
          </div>
          <NavBar />
          <p className={styles.mainWishlistCont_title}>{activeSection}</p>

          {activeSection === "MY WISHLIST" && (
            <div className={styles.wishlistCont}>
              <div className={styles.wishlistCont_grid}>
                {pageItems.map((item) => {
                  const hasDiscount = item.discount;
                  const originalPrice = parseFloat(item.price);
                  const finalPrice = hasDiscount
                    ? originalPrice - originalPrice * (item.discount / 100)
                    : null;

                  return (
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
                      <div className={styles.wishlistCard_priceWrapper}>
                        {hasDiscount ? (
                          <>
                            <span
                              className={`${styles.wishlistCard_price} ${styles.wishlistCard_priceDiscount}`}
                            >
                              {finalPrice.toFixed(2) + " EUR"}
                            </span>
                            <span className={styles.wishlistCard_priceOld}>
                              {originalPrice.toFixed(2) + " EUR"}
                            </span>
                          </>
                        ) : (
                          <span className={styles.wishlistCard_itemPrice}>
                            {originalPrice.toFixed(2) + " EUR"}
                          </span>
                        )}
                      </div>
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
                  );
                })}
              </div>

              {totalPages > 1 && (
                <div className={styles.pagination}>
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`${styles.pagination_arrow} ${currentPage === 1 ? styles.disabled : ""}`}
                  >
                    <span className={`${styles.arrow} ${styles.left}`}></span>
                  </button>

                  {renderPaginationItems().map((number, index) => {
                    if (number === "...") {
                      return (
                        <span
                          key={`dots-${index}`}
                          className={styles.pagination_dots}
                        >
                          ...
                        </span>
                      );
                    }

                    return (
                      <button
                        key={number}
                        onClick={() => goToPage(number)}
                        className={`${styles.pagination_btn} ${
                          currentPage === number ? styles.pagination_active : ""
                        }`}
                      >
                        {number}
                      </button>
                    );
                  })}

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`${styles.pagination_arrow} ${currentPage === totalPages ? styles.disabled : ""}`}
                  >
                    <span className={`${styles.arrow} ${styles.right}`}></span>
                  </button>
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
