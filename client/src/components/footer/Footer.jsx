import React from "react";
import styles from "./styles/footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <p className={styles["footer"]}>&copy; Trie GP {currentYear}</p>;
}

export default Footer;
