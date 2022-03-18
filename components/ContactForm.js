import React, { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const FORM_ENDPOINT = "/"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to submit?")) {
      // yes
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
      return true;
    } else {
      // Do nothing!
      return false;
    }
  };

  return submitted ? (
    <>
      <div className="text-2xl">Thank you!</div>
      <div className="text-md">We&apos;ll be in touch soon.</div>
    </>
  ) : (
    <form
      //   action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_self"
      className={styles.form}
    >
      <input
        type="text"
        className={`${styles.name} ${styles.formEntry}`}
        placeholder="Name"
        name="name"
        required
      />
      <input
        type="email"
        name="email"
        className={`${styles.email} ${styles.formEntry}`}
        placeholder="Email"
        required
      />
      <textarea
        className={`${styles.message} ${styles.formEntry}`}
        placeholder="Message"
      ></textarea>
      <button className={`${styles.submit} ${styles.formEntry}`} type="submit">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
