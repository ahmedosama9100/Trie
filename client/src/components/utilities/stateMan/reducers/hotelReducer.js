import * as actionTypes from "../actionTypes";

function getHotelsReducer(state = [], action) {
  if (action.type === actionTypes.SET_HOTELS) {
    return [...action.payload.data];
  }
  return state;
}

export default getHotelsReducer;
