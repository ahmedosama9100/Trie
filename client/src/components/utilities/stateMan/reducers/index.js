import { combineReducers } from "redux";
import cinemaReducer from "./cinemaReducer";
import hotelReducer from "./hotelReducer";
import resturantReducer from "./resturantReducer";
import aboutReducer from "./aboutReducer";

const allReducers = combineReducers({
  hotelReducer,
  cinemaReducer,
  resturantReducer,
  aboutReducer,
});

export default allReducers;
