import React from 'react'
import { Helmet } from 'react-helmet-async'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Home | My Holiday Task</title>
        <meta name="description" content="Welcome to the My Todo App, where you can easily manage your tasks and keep track of your to-do list." />
        <meta name="keywords" content="Todo, Task management, React, To-Do App, Productivity" />
        <link rel="canonical" href="https://www.example.com/home" />
      </Helmet>

      <div className={styles.heroSection}>
        <h1 className={styles.title}>Welcome to My Holiday Task</h1>
        <p className={styles.subtitle}>Burada Bizim Productlarimizdan bir qisminin numunesine baxa bilersiz</p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img className={styles.cardImage} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Task Management" />
          <h3 className={styles.cardTitle}>Task Management</h3>
          <p className={styles.cardText}>Easily organize and manage all your tasks in one place.</p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt="Filter Tasks" />
          <h3 className={styles.cardTitle}>Filter Tasks</h3>
          <p className={styles.cardText}>Filter your tasks by completed, pending, or all tasks to stay organized.</p>
        </div>
        <div className={styles.card}>
          <img className={styles.cardImage} src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="Search Tasks" />
          <h3 className={styles.cardTitle}>Search Tasks</h3>
          <p className={styles.cardText}>Easily search for your tasks to find what you're looking for quickly.</p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Made with ❤️ by Emin Eminov</p>
      </div>
    </div>
  )
}

export default Home
