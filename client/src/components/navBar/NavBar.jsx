// render the navigation bar with top left icon and top right items

import React from "react";
import LogoIcon from "./../logoIcon/LogoIcon";
import NavigationItems from "./../navigationItems/NavigationItems";
import styles from "./styles/nav-styles.module.css";

function NavBar() {
  return (
    <div className={styles["navigation-bar"]}>
      <LogoIcon />
      <NavigationItems />
    </div>
  );
}

export default NavBar;
