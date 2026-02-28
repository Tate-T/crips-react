import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Account Dashboard", path: "/account/dashboard" },
    { name: "Account Information", path: "/account/information" },
    { name: "Address Book", path: "/account/address-book" },
    { name: "My Orders", path: "/account/orders" },
    { name: "My Wishlist", path: "/account/wishlist" },
    { name: "Newsletter Subscriptions", path: "/account/newsletter" },
  ];

  const activeItem = navLinks.find((link) => link.path === location.pathname);
  const activeTitle = activeItem ? activeItem.name : "My Account";

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <div className={`${styles.dropdown} ${isOpen ? styles.active : ""}`}>
        <div className={styles.dropdown_trigger} onClick={toggleDropdown}>
          <span>{activeTitle}</span>
          <div className={styles.dropdown_arrowIcon}>
            <span className={styles.dropdown_leftBar}></span>
            <span className={styles.dropdown_rightBar}></span>
          </div>
        </div>

        {isOpen && (
          <ul className={styles.dropdown_menu}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={styles.dropdown_item}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ul className={styles.sidebar}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `${styles.sidebar_item} ${isActive ? styles.sidebar_active : ""}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
