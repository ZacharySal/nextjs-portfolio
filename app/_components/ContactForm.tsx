"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import styles from "../page.module.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function ContactForm() {
  const form: any = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm("service_22kajt7", "template_8b6vnx9", form.current, "4EBpLXbeKMfOw3JHG").then(
      (result) => {
        e.target.reset();
        setIsSending(false);
        setMessageSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form> */}

      {messageSent && <Alert>Your email has been sent. Thank you!</Alert>}
      {!messageSent && (
        <>
          <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
            <div className={styles.flexCol}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="John Doe" />
            </div>
            <div className={`${styles.flexCol} ${styles.email}`}>
              <label>Email Address</label>
              <input type="text" name="user_email" placeholder="johndoe@gmail.com" />
            </div>
            <div className={`${styles.flexCol} ${styles.message}`}>
              <label>Message</label>
              <textarea name="message" className={styles.messageInput} placeholder="Enter your message here"></textarea>
            </div>
            <button type="submit" className={`${styles.btn} ${styles.submit}`} data-button-type="submit">
              {isSending ? <CircularProgress size="1rem" color="inherit" /> : "Submit"}
            </button>
          </form>
        </>
      )}
    </>
  );
}
