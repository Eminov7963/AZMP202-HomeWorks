import React from "react";
import { Helmet } from "react-helmet-async";
import styles from './dashboard.module.css';  

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Helmet>
        <title>Dashboard</title>
        <link rel="canonical" href="https://www.yoursite.com/dashboard" />
      </Helmet>

      <h1 className={styles.dashboardTitle}>Welcome to the Dashboard</h1>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <h3>Total Products</h3>
          <p>150</p>
        </div>
        <div className={styles.card}>
          <h3>Total Orders</h3>
          <p>320</p>
        </div>
        <div className={styles.card}>
          <h3>Total Users</h3>
          <p>500</p>
        </div>
      </div>

     
    </div>
  );
};

export default Dashboard;
