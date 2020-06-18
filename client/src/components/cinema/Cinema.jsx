// cinema full page

import React, { useState, useEffect } from "react";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";

function Cinema() {
  // track state of all the cinemas
  const [cinemaData, setCinemaData] = useState();

  useEffect(() => {
    // getting all data of cinemas from redux
    setCinemaData(store.getState().cinemaReducer);
  }, []);

  // view the page only when the data came from redux
  return <div>{cinemaData !== undefined && <Service data={cinemaData} />}</div>;
}

export default Cinema;
