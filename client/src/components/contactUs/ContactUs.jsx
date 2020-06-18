// contact page that contains sending requests form as well as contact channels

import React from "react";
import SendRequest from "./../sendRequest/Send";
import ContactChannels from "./../contactChannels/ContactChannels";
import styles from "./styles/contact-us.module.css";

function ContactUs() {
  return (
    <div className={styles["contact-container"]}>
      <SendRequest />
      <ContactChannels />
    </div>
  );
}

export default ContactUs;
