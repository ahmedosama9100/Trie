import React, { useState, useEffect } from "react";
import { getRequest } from "./../utilities/axiosRequests";
import Service from "./../service/service";

export default Hotel;

function Hotel() {
  const initialHotels = [
    {
      _id: "",
      src: "",
      name: "",
      location: "",
      rating: "",
      description: "",
      items: [
        {
          itemName: "",
          itemAmount: 0,
        },
      ],
    },
  ];
  const [hotels, setHotels] = useState(initialHotels);
  useEffect(() => {
    getRequest("http://localhost:8000/service/hotel")
      .then((res) => setHotels(res.data))
      .catch((err) => console.log(err));
  });

  return <Service data={hotels} />;
}
