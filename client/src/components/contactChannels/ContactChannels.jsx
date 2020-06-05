import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "./styles/contact-channels.module.css";

export default ContactChannels;

function ContactChannels() {
  return (
    <ul className={styles["contact-channels"]}>
      <li>
        <a href="#">
          <FacebookIcon /> Facebook
        </a>
      </li>
      <li>
        <a href="#">
          <TwitterIcon /> Twitter
        </a>
      </li>
      <li>
        <a href="mailto:webmaster@example.com">
          <EmailIcon /> blablabla@gmail.com
        </a>
      </li>
      <li>
        <a href="#">
          <CallIcon /> 010x-xxx-xxxx
        </a>
      </li>
    </ul>
  );
}
