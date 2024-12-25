import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./admin_header.module.scss";
const AdminHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyWebsite</div>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Services
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Blog
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          FAQ
        </NavLink>
      </nav>
    </header>
  );
};

export default AdminHeader;
