import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/logo-icon.module.css";
import trieLogo from "./images/trieLogo.png";

export default LogoIcon;

function LogoIcon() {
  return (
    <Link to="/">
      <img src={trieLogo} alt="trie Logo" className={styles["logo"]} />
    </Link>
  );
}
