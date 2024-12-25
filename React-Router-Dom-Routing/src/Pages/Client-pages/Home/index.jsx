import React from "react";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <p className={styles.description}>
        This is your starting point. Customize the home page content and styles
        as you see fit!
      </p>
    </div>
  );
};

export default Home;
