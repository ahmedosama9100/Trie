import React, { useState, useEffect } from "react";
import { getRequest } from "./../utilities/axiosRequests";
import Service from "./../service/service";
import store from "./../utilities/stateMan/store";
import setHotelsAction from "./../utilities/stateMan/actionCreator";

function Hotel() {
  const [hotels, setHotels] = useState();
  useEffect(() => {
    getRequest("http://localhost:8000/service/hotel")
      .then((res) => {
        store.dispatch(setHotelsAction(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      if (store.getState().hotelReducer.length > 0) {
        setHotels(store.getState().hotelReducer);
      }
    });
  }, []);

  return <div>{hotels !== undefined && <Service data={hotels} />}</div>;
}

export default Hotel;
