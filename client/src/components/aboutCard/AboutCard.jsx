// render the card that will be shown in about page

import React from "react";
import styles from "./styles/about-card.module.css";

function AboutCard(props) {
  return (
    <div className={`card ${styles["card-container"]}`}>
      <img src={props.src} className="card-img-top" alt={props.src} />
      <div className="card-body">
        <h5 className={`card-title ${styles["card-heading"]}`}>
          {props.title}
        </h5>
        <p className={`card-text h-100 ${styles["card-body"]}`}>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default AboutCard;
