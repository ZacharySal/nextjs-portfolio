"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../page.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
      {messageSent && (
        <div className={styles.confirmation}>
          <FontAwesomeIcon style={{ fontSize: "1.25rem", color: "#133955" }} icon={faCheckCircle} />
          <p>Your message has been sent</p>
        </div>
      )}
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
