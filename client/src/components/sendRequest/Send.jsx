// contact us form

import React, { useState } from "react";
import { postRequest } from "./../utilities/axiosRequests";
import styles from "./styles/send.module.css";

// track changes of inputs
function trackRequest(e, setUserRequest) {
  const { name, value } = e.target;
  setUserRequest((prev) => ({ ...prev, [name]: value }));
}

// form body request
function buildBodyRequest(userRequest) {
  const { email, fullName, title, content } = userRequest;
  return {
    email,
    fullName,
    title,
    content,
  };
}

// send a request when submit button is fired
function handleSubmit(e, userRequest, setUserRequest) {
  e.preventDefault();
  const body = buildBodyRequest(userRequest);

  postRequest("http://localhost:8000/send-request", body)
    .then(() => {
      alert("Your request submitted successfully");
      setUserRequest({
        email: "",
        fullName: "",
        title: "",
        content: "",
      });
    })
    .catch((err) => console.log(err));
}

function Send() {
  // initialize requested data
  const request = {
    email: "",
    fullName: "",
    title: "",
    content: "",
  };
  // track user inputs
  const [userRequest, setUserRequest] = useState(request);

  return (
    <form
      className={styles["user-request"]}
      onSubmit={(e) => handleSubmit(e, userRequest, setUserRequest)}
    >
      <div className="form-group">
        <label htmlFor="user-email" className={styles["labels"]}>
          Email address
        </label>
        <input
          className={`form-control ${styles["email"]}`}
          id="user-email"
          name="email"
          onChange={(e) => trackRequest(e, setUserRequest)}
          placeholder="E-mail"
          required
          type="email"
          value={userRequest.email}
        />
      </div>

      <div className="form-group">
        <label htmlFor="user-full-name" className={styles["labels"]}>
          Full Name
        </label>
        <input
          className={`form-control ${styles["full-name"]}`}
          id="user-full-name"
          name="fullName"
          onChange={(e) => trackRequest(e, setUserRequest)}
          placeholder="Full Name"
          required
          type="text"
          value={userRequest.fullName}
        />
      </div>

      <div className="form-group">
        <label htmlFor="user-title" className={styles["labels"]}>
          Title
        </label>
        <input
          autoComplete="off"
          className={`form-control ${styles["title"]}`}
          id="user-title"
          name="title"
          onChange={(e) => trackRequest(e, setUserRequest)}
          placeholder="Title"
          required
          type="text"
          value={userRequest.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="user-description" className={styles["labels"]}>
          Content
        </label>
        <textarea
          className={`form-control ${styles["description"]}`}
          id="user-description"
          name="content"
          onChange={(e) => trackRequest(e, setUserRequest)}
          placeholder="Content"
          rows="3"
          value={userRequest.content}
        ></textarea>
      </div>

      <button
        className={`btn btn-outline-light ${styles["submit-button"]}`}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Send;
