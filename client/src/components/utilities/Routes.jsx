import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Hotel from "../hotel/Hotel";
import Restaurant from "../restaurant/Restaurant";
import Cinema from "../cinema/Cinema";

function Routes() {
  return (
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
  );
}

export default Routes;
