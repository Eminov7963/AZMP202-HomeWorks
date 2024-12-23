import React from 'react'
import img from "../../../img/banner_img_1.png";
import styles from "./home.module.scss"
const Home = () => {
    const text = "I am a Developer"; 
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.left}>
          <h6>My name is Emin</h6>
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
          <p>Based in Los Angels, California</p>

          <a
            href="/cv.pdf"
            download="Emin_Eminov_CV.pdf"
            style={{
              textDecoration: "none",
              backgroundColor: "#c24705",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "1.1rem",
              textAlign: "center",
            }}
          >
            Download CV
          </a>
        </div>
        <div className={styles.right}>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home
