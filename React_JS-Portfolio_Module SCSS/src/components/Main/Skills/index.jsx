import React from 'react'
import styles from "./skills.module.scss"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import img from "../../../img/1.png"
const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.left}>
        <h1>MY SKILLS</h1>
        <div className={styles.cards}>
          <div className={styles.box1}>
            <div className={styles.card1}>
              <div className={styles.icon}>
                <FaHtml5 />
              </div>
              <h5>HTML</h5>
            </div>
            <div className={styles.card2}>
              <div className={styles.icon}>
                <FaCss3 />
              </div>
              <h5>CSS</h5>
            </div>
          </div>
          <div className={styles.box2}>
            <div className={styles.card1}>
              <div className={styles.icon}>
                <FaReact />
              </div>
              <h5>REACT</h5>
            </div>
            <div className={styles.card2}>
              <div className={styles.icon}>
                <FaAngular />
              </div>
              <h5>Angular</h5>
            </div>
          </div>
          <div className={styles.box3}>
            <div className={styles.card1}>
              <div className={styles.icon}>
                <FaAppStoreIos />
              </div>
              <h5>IOS App</h5>
            </div>
            <div className={styles.card2}>
              <div className={styles.icon}>
                <IoLogoAndroid />
              </div>
              <h5>Angular</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <img src={img} alt="" />
      </div>
    </section>
  );
}

export default Skills
