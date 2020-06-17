import React, { useState, useEffect } from "react";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";

function Cinema() {
  const [restaurantData, setRestaurantData] = useState();
  useEffect(() => {
    setRestaurantData(store.getState().resturantReducer);
  }, []);
  return (
    <div>
      {restaurantData !== undefined && <Service data={restaurantData} />}
    </div>
  );
}

export default Cinema;
