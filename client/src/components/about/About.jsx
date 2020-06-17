import React, { useState, useEffect } from "react";
import AboutCard from "../aboutCard/AboutCard";
import store from "./../utilities/stateMan/store";
import styles from "./styles/about.module.css";

function About() {
  const [aboutData, setAboutData] = useState();
  useEffect(() => {
    setAboutData(store.getState().aboutReducer);
  }, []);
  return (
    <div>
      {aboutData !== undefined && (
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
