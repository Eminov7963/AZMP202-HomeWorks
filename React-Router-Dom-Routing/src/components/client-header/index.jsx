import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./client_header.module.scss";
const ClientHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyWebsite</div>
      <nav className={styles.nav}>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Admin
        </NavLink>
        <NavLink
          to="/adduser"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          adduser
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          dashboard
        </NavLink>
        <NavLink
          to="/editproduct"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          editproduct
        </NavLink>
        <NavLink
          to="/edituser"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          edituser
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          products
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          users
        </NavLink>
      </nav>
    </header>
  );
};

export default ClientHeader;
