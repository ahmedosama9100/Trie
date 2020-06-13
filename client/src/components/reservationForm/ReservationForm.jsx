import React, { useState } from "react";
import { postRequest } from "./../utilities/axiosRequests";
import Item from "./../reservedItem/ReservedItem";
import styles from "./styles/reservation-form.module.css";
export default ReservatioForm;

function ReservatioForm(props) {
  const initReservation = {
    fullName: "",
    email: "",
  };
  const items = props.data.items;
  const [reservationData, setRerservationData] = useState(initReservation);
  function handleReserve(e) {
    const allItems = document.querySelectorAll(".item-list");
    let itemRequest = [];
    allItems.forEach((item) => {
      const room = { itemName: "", itemAmount: 0 };
      room.itemAmount = item.childNodes[0].textContent;
      room.itemName = item.childNodes[1].textContent;
      itemRequest.push(room);
    });
    const { email, fullName: name } = reservationData;
    const url = `http://localhost:8000/hotel/reserve/${props.data._id}`;

    itemRequest = JSON.stringify(itemRequest);
    console.log(itemRequest);
    const body = {
      email,
      name,
      items: itemRequest,
    };

    console.log(body);
    postRequest(url, body)
      .then(() => {
        alert("Your request submitted successfully");
      })
      .catch((err) => console.log(err));

    e.preventDefault();
    setRerservationData(initReservation);
  }

  function handleInputs(e) {
    const { name, value } = e.target;
    setRerservationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form className={styles["reservation-form"]} onSubmit={handleReserve}>
      <div className="form-group">
        {items !== undefined &&
          items.map((item) => (
            <Item key={item.itemName} name={item.itemName} />
          ))}
      </div>
      <div className="form-group">
        <label for="full-name">Full Name</label>
        <input
          type="text"
          className={`form-control ${styles["full-name-field"]}`}
          id="full-name"
          placeholder="Abd El Rahman Osama"
          autocomplete="off"
          required
          onChange={handleInputs}
          value={reservationData.fullName}
          name="fullName"
        />
      </div>
      <div className="form-group">
        <label for="Email">E-mail</label>
        <input
          type="email"
          className={`form-control ${styles["email-field"]}`}
          id="Email"
          placeholder="name@service.com"
          autocomplete="off"
          required
          onChange={handleInputs}
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
