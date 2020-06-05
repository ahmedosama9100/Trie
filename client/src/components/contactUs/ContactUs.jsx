import React from "react";
import SendRequest from "./../sendRequest/Send";
import ContactChannels from "./../contactChannels/ContactChannels";
import styles from "./styles/contact-us.module.css";

export default ContactUs;

function ContactUs() {
  return (
    <div className={styles["contact-container"]}>
      <SendRequest />
      <ContactChannels />
    </div>
  );
}
