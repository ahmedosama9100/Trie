import React from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import SidePage from "../sidePage/SidePage";
import styles from "./styles/service.module.css";

export default Service;

function Service(props) {
  const serviceData = props.data;
  return (
    <div>
      <div className={styles["hotel-list"]}>
        {serviceData.map((singleItem) => {
          return (
            <div className={styles["service-card"]}>
              <ServicesCard
                src={singleItem.src}
                name={singleItem.name}
                location={singleItem.location}
                rating={singleItem.rating}
              />
              <button
                className={`btn btn-outline-light ${styles["view-side-page"]}`}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
      <SidePage />
    </div>
  );
}
