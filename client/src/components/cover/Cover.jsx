// Landing page that views image logo and video

import React from "react";
import styles from "./styles/cover.module.css";
import trieLogo from "./media/trieLogo.png";
import intro from "./media/intro.mp4";

function Cover() {
  return (
    <div className={styles["media-container"]}>
      <img className={styles["logo-cover"]} src={trieLogo} alt="trie logo" />
      <video className={styles["intro-video"]} controls autoPlay loop>
        <source src={intro} type="video/mp4" />
      </video>
    </div>
  );
}

export default Cover;
