import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import styles from "./styles/contact-channels.module.css";

function ContactChannels() {
  return (
    <ul className={styles["contact-channels"]}>
      <li>
        <a
          href="https://www.facebook.com/TRIE-101828941570262/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon /> Facebook
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon /> Instagram
        </a>
      </li>
      <li>
        <a
          href="mailto:trie9510@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon /> trie9510@gmail.com
        </a>
      </li>
    </ul>
  );
}

export default ContactChannels;
