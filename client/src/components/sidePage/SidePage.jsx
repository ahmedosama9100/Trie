// render side page with all full data

import React from "react";
import ReservationFrom from "./../reservationForm/ReservationForm";
import styles from "./styles/side-page.module.css";

function SidePage(props) {
  const data = props.data;

  return (
    <div className={styles["side-page-container"]}>
      <h1 className={`text-center ${styles["main-heading"]}`}>{data.name}</h1>
      <h3 className={`text-center ${styles["description"]}`}>Description</h3>
      <p className={styles["description-content"]}>{data.description}</p>
      <h1 className={`text-center ${styles["reservation-heading"]}`}>
        Reserve
      </h1>
      <ReservationFrom data={data} />
    </div>
  );
}

export default SidePage;
