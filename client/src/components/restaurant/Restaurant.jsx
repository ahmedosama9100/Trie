import React from "react";
import Service from "./../service/service";
import { restaurantData } from "./../utilities/staticData";

export default Cinema;

function Cinema() {
  return <Service data={restaurantData} />;
}
