// View the full page of the restaurant service

import React, { useState, useEffect } from "react";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";

function Cinema() {
  // track state of restaurant data
  const [restaurantData, setRestaurantData] = useState();

  useEffect(() => {
    // get restaurant data from redux
    setRestaurantData(store.getState().restaurantReducer);
  }, []);

  return (
    // render the page only when the data mounted
    <div>
      {restaurantData !== undefined && <Service data={restaurantData} />}
    </div>
  );
}

export default Cinema;
