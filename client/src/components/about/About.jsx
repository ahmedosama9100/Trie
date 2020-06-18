// This is the full about page that contains all the about cards

import React, { useState, useEffect } from "react";
import AboutCard from "../aboutCard/AboutCard";
import store from "./../utilities/stateMan/store";
import styles from "./styles/about.module.css";

function About() {
  //track the state of data of about cards
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    //getting all data from redux store
    setAboutData(store.getState().aboutReducer);
  }, []);

  return (
    <div>
      {aboutData !== undefined && ( // render this page only when the data came from redux
        <div className={styles["about"]}>
          <h1 className={styles["about-header"]}>About Us</h1>
          <div className={styles["about-cards"]}>
            {aboutData.map((card) => (
              <AboutCard
                key={card.title}
                src={card.src}
                title={card.title}
                content={card.content}
                page="about"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
