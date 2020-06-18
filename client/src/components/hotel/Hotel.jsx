// view all the hotels

import React, { useState, useEffect } from "react";
import { getRequest } from "./../utilities/axiosRequests";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";
import setHotelsAction from "./../utilities/stateMan/actionCreator";

function Hotel() {
  // track hotels data state
  const [hotels, setHotels] = useState();

  useEffect(() => {
    // make get requests to the backend to get all hotels
    getRequest("http://localhost:8000/service/hotel")
      .then((res) => {
        // put response data in redux
        store.dispatch(setHotelsAction(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // subscribe to get recent data from redux
    store.subscribe(() => {
      // put the new data into hotels to be tracked
      setHotels(store.getState().hotelReducer);
    });
  }, []);

  return <div>{hotels !== undefined && <Service data={hotels} />}</div>;
}

export default Hotel;
