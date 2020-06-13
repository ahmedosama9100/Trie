import React, { useState } from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import SidePage from "../sidePage/SidePage";
import styles from "./styles/service.module.css";

export default Service;

function Service(props) {
  const serviceData = props.data;

  const [sideData, setSideData] = useState({});

  function viewSidePage(e) {
    setSideData(searchItem(e.target.value)[0]);
  }

  function searchItem(id) {
    return serviceData.filter((singleItem) => singleItem._id === id);
  }

  return (
    <div>
      <div className={styles["hotel-list"]}>
        {serviceData.map((singleItem) => {
          return (
            <div className={styles["service-card"]}>
              <ServicesCard
                key={singleItem.name}
                src={singleItem.src}
                name={singleItem.name}
                location={singleItem.location}
                rating={singleItem.rating}
              />
              <button
                className={`btn btn-outline-light ${styles["view-side-page"]}`}
                value={singleItem._id}
                onClick={viewSidePage}
              >
                View
              </button>
            </div>
          );
        })}
      </div>
      <SidePage data={sideData} />
    </div>
  );
}
