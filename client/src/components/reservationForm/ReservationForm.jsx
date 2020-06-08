import React from "react";
import Item from "./../reservedItem/ReservedItem";
import styles from "./styles/reservation-form.module.css";
export default ReservatioForm;

function ReservatioForm() {
  return (
    <form className={styles["reservation-form"]}>
      <div className="form-group">
        <Item />
      </div>
      <div className="form-group">
        <label for="full-name">Full Name</label>
        <input
          type="email"
          className={`form-control ${styles["full-name-field"]}`}
          id="full-name"
          placeholder="Abd El Rahman Osama"
          autocomplete="off"
        />
      </div>
      <div className="form-group">
        <label for="Email">E-mail</label>
        <input
          type="email"
          className={`form-control ${styles["email-field"]}`}
          id="Email"
          placeholder="name@service.com"
          autocomplete="off"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={`btn btn-outline-light btn-lg ${styles["reservation-button"]}`}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
