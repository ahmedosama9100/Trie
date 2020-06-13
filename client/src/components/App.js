import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./utilities/intialize-styles/intialize-styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./navBar/NavBar";
import Home from "./home/Home";
import Hotel from "./hotel/Hotel";
import Restaurant from "./restaurant/Restaurant";
import Cinema from "./cinema/Cinema";
import Footer from "./footer/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/service/hotel">
          <Hotel />
        </Route>
        <Route exact path="/service/cinema">
          <Cinema />
        </Route>
        <Route exact path="/service/restaurant">
          <Restaurant />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
