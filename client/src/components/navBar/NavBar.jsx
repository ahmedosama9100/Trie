import React from "react";
import trieLogo from "./images/trieLogo.png";
import styles from "./styles/nav-styles.module.css";

export default NavBar;

function LogoIcon() {
  return <img src={trieLogo} alt="trie Logo" className={styles["logo"]} />;
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
      <li>Contact</li>
      <li>About</li>
    </ul>
  );
}

function DropDownItems() {
  return (
    <div
      className={`dropdown-menu ${styles["services-menu"]}`}
      aria-labelledby="dropdownMenuLink"
    >
      <a className="dropdown-item" href="#">
        Cinema
      </a>
      <a className="dropdown-item" href="#">
        Hotel
      </a>
      <a className="dropdown-item" href="#">
        Ride
      </a>

      <a className="dropdown-item" href="#">
        Restaurant
      </a>
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
