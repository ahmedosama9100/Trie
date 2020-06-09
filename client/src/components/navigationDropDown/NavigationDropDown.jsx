import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/navigation-dropdown.module.css";
export default NavigationDropDown;

function NavigationDropDown() {
  return (
    <div
      className={`dropdown-menu ${styles["services-menu"]}`}
      aria-labelledby="dropdownMenuLink"
    >
      <Link
        className={`dropdown-item ${styles["service-item"]}`}
        to="/service/cinema"
      >
        Cinema
      </Link>
      <Link
        className={`dropdown-item ${styles["service-item"]}`}
        to="/service/hotel"
      >
        Hotel
      </Link>

      <Link
        className={`dropdown-item ${styles["service-item"]}`}
        to="/service/restaurant"
      >
        Restaurant
      </Link>
    </div>
  );
}
