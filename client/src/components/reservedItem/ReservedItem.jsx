import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./styles/reserved-item.module.css";

export default Item;

function Item() {
  return (
    <span className={styles["item"]}>
      <p className={`rounded text-center ${styles["item-counter"]}`}>10</p>
      <h6 className={styles["item-name"]}>Item Name</h6>
      <button className={`rounded ${styles["add-item"]}`}>
        <AddIcon />
      </button>
      <button className={`rounded ${styles["remove-item"]}`}>
        <RemoveIcon />
      </button>
    </span>
  );
}
