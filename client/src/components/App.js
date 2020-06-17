import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./utilities/intialize-styles/intialize-styles.css";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";
import Routes from "./utilities/Routes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;
