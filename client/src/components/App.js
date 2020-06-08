import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./utilities/intialize-styles/intialize-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";
import Hotel from "./hotel/Hotel";
import Footer from "./footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hotel">
          <Hotel />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
