import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Contact</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        We'd love to hear from you! Please use the form below to get in touch
        with us.
      </p>

      <div className={styles.officeInfo}>
        <h2 className={styles.officeTitle}>Our Office</h2>
        <p className={styles.officeDetails}>
          Address: 123 Taco Street, Food City, USA
        </p>
        <p className={styles.officeDetails}>Phone: +1 (123) 456-7890</p>
        <p className={styles.officeDetails}>Email: contact@tacobell.com</p>
      </div>

      <form className={styles.form}>
        <label className={styles.label}>
          Name:
          <input type="text" name="name" required className={styles.input} />
        </label>
        <label className={styles.label}>
          Email:
          <input type="email" name="email" required className={styles.input} />
        </label>
        <label className={styles.label}>
          Message:
          <textarea
            name="message"
            required
            className={styles.textarea}
          ></textarea>
        </label>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
