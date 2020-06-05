import React from "react";
import styles from "./styles/send.module.css";

export default Send;

function Send() {
  function demo(e) {
    console.log(e);
    e.preventDefault();
  }

  return (
    <form
      action="#"
      className={styles["user-request"]}
      method="post"
      onSubmit={demo}
    >
      <div className="form-group">
        <label htmlFor="user-email" className={styles["labels"]}>
          Email address
        </label>
        <input
          className={`form-control ${styles["email"]}`}
          id="user-email"
          placeholder="E-mail"
          required
          type="email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="user-full-name" className={styles["labels"]}>
          Full Name
        </label>
        <input
          className={`form-control ${styles["full-name"]}`}
          id="user-full-name"
          placeholder="Full Name"
          required
          type="text"
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
          placeholder="Title"
          required
          type="text"
        />
      </div>

      <div className="form-group">
        <label htmlFor="user-description" className={styles["labels"]}>
          Content
        </label>
        <textarea
          className={`form-control ${styles["description"]}`}
          id="user-description"
          placeholder="Content"
          rows="3"
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
