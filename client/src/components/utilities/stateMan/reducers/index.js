import { combineReducers } from "redux";
import cinemaReducer from "./cinemaReducer";
import hotelReducer from "./hotelReducer";
import restaurantReducer from "./restaurantReducer";
import aboutReducer from "./aboutReducer";

const allReducers = combineReducers({
  hotelReducer,
  cinemaReducer,
  restaurantReducer,
  aboutReducer,
});

export default allReducers;
