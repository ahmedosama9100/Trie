import React from "react";
import "./nav-styles.css";

export default NavBar;

function NavBar() {
  return (
    <div className="navigation-bar">
      <h1 className="home">Trie</h1>
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

            <div className="dropdown-menu services-menu" aria-labelledby="dropdownMenuLink">
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
        <li>Sign in</li>
      </ul>
    </div>
  );
}
