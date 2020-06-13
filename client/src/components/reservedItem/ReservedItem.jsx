import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import styles from "./styles/reserved-item.module.css";

export default Item;

function Item(props) {
  let [itemCounter, setItemCounter] = useState(0);

  function increment() {
    setItemCounter(++itemCounter);
  }

  function decrement() {
    setItemCounter(itemCounter ? --itemCounter : 0);
  }

  return (
    <span className={`item-list ${styles["item"]}`}>
      <p className={`rounded text-center ${styles["item-counter"]}`} name="item-counter">
        {itemCounter}
      </p>
      <h6 className={styles["item-name"]} name="item-name">{props.name}</h6>
      <div>
        <button className={`rounded ${styles["add-item"]}`} onClick={increment}>
          <AddIcon />
        </button>
        <button
          className={`rounded ${styles["remove-item"]}`}
          onClick={decrement}
        >
          <RemoveIcon />
        </button>
      </div>
    </span>
  );
}
