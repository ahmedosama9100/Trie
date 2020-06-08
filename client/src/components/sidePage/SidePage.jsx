import React from "react";
import ReservationFrom from "./../reservationForm/ReservationForm";
import styles from "./styles/side-page.module.css";

export default SidePage;

function SidePage() {
  return (
    <div className={styles["side-page-container"]}>
      <h1 className={`text-center ${styles["main-heading"]}`}>Hotel Name</h1>
      <h3 className={`text-center ${styles["description"]}`}>Description</h3>
      <p className={styles["description-content"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h1 className={`text-center ${styles["reservation-heading"]}`}>
        Reserve
      </h1>
      <ReservationFrom />
    </div>
  );
}
