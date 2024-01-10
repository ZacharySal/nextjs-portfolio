"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../page.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactMessageSchema } from "../_models/ContactMessage";
import type { ContactMessageForm } from "../_models/ContactMessage";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactMessageForm>({
    resolver: zodResolver(ContactMessageSchema),
  });

  const onSubmit: SubmitHandler<ContactMessageForm> = (data) => {
    setIsSending(true);
    emailjs.sendForm("service_22kajt7", "template_8b6vnx9", form.current, "4EBpLXbeKMfOw3JHG").then(
      (result) => {
        setIsSending(false);
        console.log(result);
        setMessageSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const form: any = useRef();
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

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
          <form className={styles.contactForm} ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.flexCol}>
              <label htmlFor="user_name">Name</label>
              <input
                style={{ border: errors.user_name && "1px solid red" }}
                type="text"
                {...register("user_name")}
                placeholder="John Doe"
              />
              {errors.user_name && <p className={styles.formError}>{errors.user_name?.message}</p>}
            </div>
            <div className={`${styles.flexCol} ${styles.email}`}>
              <label htmlFor="user_email">Email Address</label>
              <input
                type="text"
                style={{ border: errors.user_email && "1px solid red" }}
                {...register("user_email")}
                placeholder="johndoe@gmail.com"
              />
              {errors.user_email && (
                <p className={styles.formError}>{errors.user_email?.message}</p>
              )}
            </div>
            <div className={`${styles.flexCol} ${styles.message}`}>
              <label htmlFor="message">Message</label>
              <textarea
                {...register("message")}
                style={{ border: errors.message && "1px solid red" }}
                className={styles.messageInput}
                placeholder="Enter your message here"
              ></textarea>
              {errors.message && <p className={styles.formError}>{errors.message?.message}</p>}
            </div>
            <button
              type="submit"
              className={`${styles.btn} ${styles.submit}`}
              data-button-type="submit"
            >
              {isSending ? <CircularProgress size="1rem" color="inherit" /> : "Submit"}
            </button>
          </form>
        </>
      )}
    </>
  );
}
