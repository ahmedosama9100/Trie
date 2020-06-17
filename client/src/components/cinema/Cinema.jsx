import React, { useState, useEffect } from "react";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";

function Cinema() {
  const [cinemaData, setCinemaData] = useState();
  useEffect(() => {
    setCinemaData(store.getState().cinemaReducer);
  }, []);

  return <div>{cinemaData !== undefined && <Service data={cinemaData} />}</div>;
}

export default Cinema;
