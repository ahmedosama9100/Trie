import React from "react";
import "./utilities/intialize-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";
import Footer from "./footer/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Home /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
