// top right items in navgation bar

import React from "react";
import NavigationDropDown from "./../navigationDropDown/NavigationDropDown";
import styles from "./styles/navigation-dropdown.module.css";

function NavigationItems() {
  return (
    <ul className={styles["links"]}>
      <li>
        <div className="dropdown">
          <a
            className={`dropdown-toggle ${styles["dropdownMenuLink"]}`}
            href="/#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services
          </a>
          <NavigationDropDown />
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

export default NavigationItems;
