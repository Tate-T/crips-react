import { Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage";
// import styles from "./NavBar.module.scss";

export default function NavBar() {
  console.log("test");
  return (
    <>
      <ul>
        <li>
          <Link to="/">Account Dashboard</Link>
        </li>
        <li>
          <Link to="/">Account Information</Link>
        </li>
        <li>
          <Link to="/">Address Book</Link>
        </li>
        <li>
          <Link to="/">Account</Link>
        </li>
        <li>
          <Link to="/">Account Dashboard</Link>
        </li>
        <li>
          <Link to="/">Account Dashboard</Link>
        </li>
      </ul>
    </>
  );
}
