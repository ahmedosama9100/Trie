import React from "react";
import { Link } from "react-router-dom";
import trieLogo from "./images/trieLogo.png";
import styles from "./styles/nav-styles.module.css";

export default NavBar;

function LogoIcon() {
  return (
    <Link to="/">
      <img src={trieLogo} alt="trie Logo" className={styles["logo"]} />
    </Link>
  );
}

function NavigationItems() {
  return (
    <ul className={styles["links"]}>
      <li>
        <div className="dropdown">
          <a
            className={`dropdown-toggle ${styles["dropdownMenuLink"]}`}
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services
          </a>
          <DropDownItems />
        </div>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  );
}

function DropDownItems() {
  return (
    <div
      className={`dropdown-menu ${styles["services-menu"]}`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link className="dropdown-item" to="/service/cinema">
        Cinema
      </Link>
      <Link className="dropdown-item" to="/service/hotel">
        Hotel
      </Link>

      <Link className="dropdown-item" to="/service/restaurant">
        Restaurant
      </Link>
    </div>
  );
}

function NavBar() {
  return (
    <div className={styles["navigation-bar"]}>
      <LogoIcon />
      <NavigationItems />
    </div>
  );
}
