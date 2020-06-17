import React, { useState } from "react";
import { postRequest } from "./../utilities/axiosRequests";
import Item from "./../reservedItem/ReservedItem";
import styles from "./styles/reservation-form.module.css";

function handleInputs(e, setRerservationData) {
  const { name, value } = e.target;
  setRerservationData((prev) => ({
    ...prev,
    [name]: value,
  }));
}

function buildBodyRequest(allItems, reservationData) {
  let itemRequest = [];

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

async function handleReserve(e, reservationData, id) {
  e.preventDefault();
  const allItems = document.querySelectorAll(".item-list");
  const url = `http://localhost:8000/hotel/reserve/${id}`;
  const body = buildBodyRequest(allItems, reservationData);

  await postRequest(url, body)
    .then(() => {
      alert("Your request submitted successfully");
    })
    .catch((err) => alert("something wrong happened"))
    .finally(() => {
      window.location.reload();
    });
}

function ReservatioForm(props) {
  const initReservation = {
    fullName: "",
    email: "",
  };

  const items = props.data.items;
  const [reservationData, setRerservationData] = useState(initReservation);

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
          required
          onChange={(e) => handleInputs(e, setRerservationData)}
          value={reservationData.fullName}
          name="fullName"
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
          required
          onChange={(e) => handleInputs(e, setRerservationData)}
          value={reservationData.email}
          name="email"
        />
      </div>
      <div className={`input-group ${styles["terms"]}`}>
        <input type="checkbox" required className={styles["terms-checkbox"]} />
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
