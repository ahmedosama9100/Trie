import React from "react";
import styles from "./styles/services-card.module.css";

function ServicesCard(props) {
  return (
    <div className={`card mb-3 ${styles["card-container"]}`}>
      <div className="row no-gutters">
        <div className={`col-md-4 ${styles["card-imageee"]}`}>
          <img
            src={props.src}
            className={`card-img ${styles["card-image"]}`}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text text-muted">{props.location}</p>
            <p className="card-text text-muted">{props.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
