import React from "react";
import Service from "./../service/service";
import { cinemaData } from "./../utilities/staticData";

export default Cinema;

function Cinema() {
  return <Service data={cinemaData} />;
}
