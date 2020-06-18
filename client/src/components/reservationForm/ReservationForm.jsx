// reserve any service from this reservation form

import React, { useState } from "react";
import { postRequest } from "./../utilities/axiosRequests";
import Item from "./../reservedItem/ReservedItem";
import styles from "./styles/reservation-form.module.css";

// handle any change in inputs of the reservation form
function handleInputs(e, setRerservationData) {
  const { name, value } = e.target;
  setRerservationData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

// form the body of the request to be sent to the backend
function buildBodyRequest(allItems, reservationData) {
  let itemRequest = [];

  // get number of reserved items
  allItems.forEach((item) => {
    const room = { itemName: "", itemAmount: 0 };
    room.itemAmount = item.childNodes[0].textContent;
    room.itemName = item.childNodes[1].textContent;
    itemRequest.push(room);
  });

  const { email, fullName: name } = reservationData;

  itemRequest = JSON.stringify(itemRequest);
  return {
    email,
    name,
    items: itemRequest,
  };
}

// send reservation request when submit is triggered
async function handleReserve(e, reservationData, id) {
  e.preventDefault();

  const allItems = document.querySelectorAll(".item-list");

  const url = `http://localhost:8000/hotel/reserve/${id}`; // id of the reserved card
  const body = buildBodyRequest(allItems, reservationData);

  // make post request
  await postRequest(url, body)
    .then(() => {
      alert("Your request submitted successfully");
    })
    .catch((err) => {
      console.log(err);
      alert("something wrong happened");
    })
    .finally(() => {
      // reload the page after submitting, to remove inputs automatically
      window.location.reload();
    });
}

function ReservatioForm(props) {
  // items of each service
  const items = props.data.items;

  // track email and user name of reservation from
  const [reservationData, setRerservationData] = useState({
    fullName: "",
    email: "",
  });

  return (
    <form
      className={styles["reservation-form"]}
      onSubmit={(e) => handleReserve(e, reservationData, props.data._id)}
    >
      <div className="form-group">
        {items !== undefined &&
          items.map((item) => (
            <Item key={item.itemName} name={item.itemName} />
          ))}
      </div>
      <div className="form-group">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          className={`form-control ${styles["full-name-field"]}`}
          id="full-name"
          placeholder="Abd El Rahman Osama"
          autoComplete="off"
          onChange={(e) => handleInputs(e, setRerservationData)}
          value={reservationData.fullName}
          name="fullName"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Email">E-mail</label>
        <input
          type="email"
          className={`form-control ${styles["email-field"]}`}
          id="Email"
          placeholder="name@service.com"
          autoComplete="off"
          onChange={(e) => handleInputs(e, setRerservationData)}
          value={reservationData.email}
          name="email"
          required
        />
      </div>
      <div className={`input-group ${styles["terms"]}`}>
        <input type="checkbox" className={styles["terms-checkbox"]} required />
        <p>I agree to the terms of service</p>
      </div>

      <div className="text-center">
        <button
          className={`btn btn-outline-light btn-lg ${styles["reservation-button"]}`}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}

export default ReservatioForm;
