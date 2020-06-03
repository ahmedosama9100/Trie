import React from "react";
import "./styles/footer.css";

export default Footer;

function Footer() {
  const currentYear = new Date().getFullYear();
  return <p className="footer">&copy; Trie GP {currentYear}</p>;
}
