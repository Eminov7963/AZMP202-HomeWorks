import React from 'react'
import image from "../../img/skills.png";
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer id='footer'>
      <div className={styles.left}>
        <h1>Get in touch</h1>
        <p>Our freandly team would love to hear from you.</p>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Name *" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email *" />
        </div>
        <div className={styles.subject}>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject *" />
        </div>
        <div className={styles.message}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className={styles.sending}>Send Message</button>
      </div>
      <div className={styles.right}>
        <img src={image} alt="" />
      </div>
    </footer>
  );
}

export default Footer
