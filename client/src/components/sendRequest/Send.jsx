import React from "react";
import styles from "./styles/send.module.css";

export default Send;

function Send() {
  function demo(e) {
    e.preventDefault();
  }
  return (
    <form method="post" action="#" className={styles["user-request"]}>
      <div className="form-group">
        <label for="user-email" className={styles["labels"]}>
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${styles["email"]}`}
          id="user-email"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="form-group">
        <label for="user-full-name" className={styles["labels"]}>
          Full Name
        </label>
        <input
          type="text"
          className={`form-control ${styles["full-name"]}`}
          id="user-full-name"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="form-group">
        <label for="user-title" className={styles["labels"]}>
          Title
        </label>
        <input
          type="text"
          className={`form-control ${styles["title"]}`}
          id="user-title"
          placeholder="Title"
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label for="user-description" className={styles["labels"]}>
          description
        </label>
        <textarea
          className={`form-control ${styles["description"]}`}
          id="user-description"
          rows="3"
          placeholder="description"
        ></textarea>
      </div>
      <button
        type="submit"
        className={`btn btn-outline-light ${styles["submit-button"]}`}
        onClick={demo}
      >
        Submit
      </button>
    </form>
  );
}
