import React, { useState, useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import styles from "../styles/ContactForm.module.css";

init("rbUxuh4rKFosYMHeQ");

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSubmitted(true);
  };

  return submitted ? (
    <>
      <div className="text-2xl">Thank you!</div>
      <div className="text-md">We&apos;ll be in touch soon.</div>
    </>
  ) : (
    <form ref={form} onSubmit={sendEmail} className={styles.form}>
      <input
        type="text"
        className={`${styles.name} ${styles.formEntry}`}
        placeholder="Name"
        name="from_name"
        required
      />
      <input
        type="email"
        name="reply_to"
        className={`${styles.email} ${styles.formEntry}`}
        placeholder="Email"
        required
      />
      <textarea
        className={`${styles.message} ${styles.formEntry}`}
        placeholder="Message"
        name="message"
      ></textarea>
      <input
        className={`${styles.submit} ${styles.formEntry}`}
        type="submit"
        value="Send"
      ></input>
    </form>
  );
};

export default ContactForm;
