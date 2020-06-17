import React, { useState } from "react";
import ServicesCard from "../servicesCard/ServicesCard";
import SidePage from "../sidePage/SidePage";
import styles from "./styles/service.module.css";

function searchItem(serviceData, id) {
  return serviceData.filter((singleItem) => singleItem._id === id);
}

function viewSidePage(e, setSideData, serviceData) {
  setSideData(searchItem(serviceData, e.target.value)[0]);
}

function Service(props) {
  const serviceData = props.data;
  const [sideData, setSideData] = useState();

  return (
    <div>
      <div className={styles["hotel-list"]}>
        {serviceData.map((singleItem, index) => (
          <div className={styles["service-card"]} key={index}>
            <ServicesCard
              src={singleItem.src}
              name={singleItem.name}
              location={singleItem.location}
              rating={singleItem.rating}
            />
            <button
              className={`btn btn-outline-light ${styles["view-side-page"]}`}
              value={singleItem._id}
              onClick={(e) => viewSidePage(e, setSideData, serviceData)}
            >
              View
            </button>
          </div>
        ))}
      </div>
      {sideData !== undefined && <SidePage data={sideData} />}
    </div>
  );
}

export default Service;
