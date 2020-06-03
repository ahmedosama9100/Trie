import React from "react";
import trieLogo from "./images/trieLogo.png";
import "./styles/nav-styles.css";

export default NavBar;

function NavBar() {
  return (
    <div className="navigation-bar">
      <img src={trieLogo} alt="trie Logo" className="logo" />
      <ul className="links">
        <li>
          <div className="dropdown services">
            <a
              className="dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services
            </a>

            <div
              className="dropdown-menu services-menu"
              aria-labelledby="dropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Cinema
              </a>
              <a className="dropdown-item" href="#">
                Hotel
              </a>
              <a className="dropdown-item" href="#">
                Ride
              </a>

              <a className="dropdown-item" href="#">
                Restaurant
              </a>
            </div>
          </div>
        </li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  );
}
