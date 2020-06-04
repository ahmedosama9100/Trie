import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import styles from "./styles/home.module.css";
import trieLogo from "./images/trieLogo.png";

export default Home;

function Home() {
  return (
    <ReactFullpage
      navigation
      sectionsColor={["#1b120f", "#e6dedd", "#1b120f"]}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <img
                src={trieLogo}
                alt="trie logo"
                className={styles["logo-cover"]}
              />
            </div>
            <div className="section">
              <img
                src={trieLogo}
                alt="trie logo"
                className={styles["logo-cover"]}
              />
            </div>
            <div className="section">
              <img
                src={trieLogo}
                alt="trie logo"
                className={styles["logo-cover"]}
              />
            </div>
          </div>
        );
      }}
    />
  );
}