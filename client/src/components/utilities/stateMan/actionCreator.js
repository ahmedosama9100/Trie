import * as actionTypes from "./actionTypes";

function setHotels(data) {
  return {
    type: actionTypes.SET_HOTELS,
    payload: {
      data,
    },
  };
}

export default setHotels;
