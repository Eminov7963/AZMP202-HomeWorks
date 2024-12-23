import React from "react";
import styles from "./head.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const text = "Emin Eminov";
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.name}>
          {text.split("").map((char, index) =>
            char === " " ? (
              <span key={index}>&nbsp;</span>
            ) : (
              <span
                className={styles.letter}
                style={{ "--i": index + 1 }}
                key={index}
              >
                {char}
              </span>
            )
          )}
        </h1>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.shortSec}>
          <GiHamburgerMenu />
        </div>
        <div className={styles.contact}>
          <a href="#">Contact Now</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
