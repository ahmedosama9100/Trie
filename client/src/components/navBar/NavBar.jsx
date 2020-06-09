import React from "react";
import LogoIcon from "./../logoIcon/LogoIcon";
import NavigationItems from "./../navigationItems/NavigationItems";
import styles from "./styles/nav-styles.module.css";

export default NavBar;

function NavBar() {
  return (
    <div className={styles["navigation-bar"]}>
      <LogoIcon />
      <NavigationItems />
    </div>
  );
}
