import React, { useState, useEffect} from 'react'
import styles from "./services.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";
import { SiAffinitydesigner } from "react-icons/si";
import { FaRulerVertical } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const Services = () => {
  const [text, setText] = useState(""); 
  const [index, setIndex] = useState(0); 
  const fullText = "My Services"; 

  useEffect(() => {
    
    let interval;
    if (index <= fullText.length) {
      interval = setInterval(() => {
        setText(fullText.substring(0, index + 1)); 
        setIndex(index + 1); 
      }, 300); 
    }

    if (index > fullText.length && index <= fullText.length * 2) {
      interval = setInterval(() => {
        setText(fullText.substring(0, fullText.length * 2 - index)); 
        setIndex(index + 1);
      }, 300); 
    }

    if (index > fullText.length * 2) {
      setIndex(0);
    }

    return () => clearInterval(interval); 
  }, [index]); 
  return (
    <section className={styles.services} id='services'>
      <h1 className={styles.reveal}>
        <span>{text}</span>
      </h1>
      <div className={styles.box1}>
        <div className={styles.card1}>
          <div className={styles.icon}>
            <BsFillTelephoneFill />
          </div>
          <div className={styles.text}>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.icon}>
            <FaComputer />
          </div>
          <div className={styles.text}>
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.card1}>
          <div className={styles.icon}>
            <GoAlertFill />
          </div>
          <div className={styles.text}>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.icon}>
            <SiAffinitydesigner />
          </div>
          <div className={styles.text}>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.box3}>
        <div className={styles.card1}>
          <div className={styles.icon}>
            <FaRulerVertical />
          </div>
          <div className={styles.text}>
            <h3>Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.icon}>
            <FaGlobe />
          </div>
          <div className={styles.text}>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services
