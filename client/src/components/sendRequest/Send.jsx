import React, { useState } from "react";
import { postRequest } from "./../utilities/axiosRequests";
import styles from "./styles/send.module.css";

export default Send;

function Send() {
  const request = {
    email: "",
    fullName: "",
    title: "",
    content: "",
  };
  const [userRequest, setUserRequest] = useState(request);

  function trackRequest(e) {
    const { name, value } = e.target;
    setUserRequest((prev) => ({ ...prev, [name]: value }));
  }

  function demo(e) {
    e.preventDefault();
    const { email, fullName, title, content } = userRequest;
    const body = {
      email,
      fullName,
      title,
      content,
    };

    postRequest("http://localhost:8000/send-request", body)
      .then((res) => alert("Your request submitted successfully"))
      .catch((err) => console.log(err));

    setUserRequest(request);
  }

  return (
    <form className={styles["user-request"]} onSubmit={demo}>
      <div className="form-group">
        <label htmlFor="user-email" className={styles["labels"]}>
          Email address
        </label>
        <input
          className={`form-control ${styles["email"]}`}
          id="user-email"
          name="email"
          onChange={trackRequest}
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
          onChange={trackRequest}
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
          onChange={trackRequest}
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
          onChange={trackRequest}
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
