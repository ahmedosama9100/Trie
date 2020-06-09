import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import styles from "./styles/contact-channels.module.css";

export default ContactChannels;

function ContactChannels() {
  return (
    <ul className={styles["contact-channels"]}>
      <li>
        <a href="https://www.facebook.com/TRIE-101828941570262/">
          <FacebookIcon /> Facebook
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <InstagramIcon /> Instagram
        </a>
      </li>
      <li>
        <a href="mailto:Trie-eg@protonmail.com">
          <EmailIcon /> Mail@mail.com
        </a>
      </li>
    </ul>
  );
}
