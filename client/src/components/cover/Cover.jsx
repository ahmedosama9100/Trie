import React from "react";
import styles from "./styles/cover.module.css";
import trieLogo from "./images/trieLogo.png";

export default Cover;

function Cover() {
  return (
    <img className={styles["logo-cover"]} src={trieLogo} alt="trie logo" />
  );
}
