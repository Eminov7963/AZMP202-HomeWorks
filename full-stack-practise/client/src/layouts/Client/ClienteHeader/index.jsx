import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./client.module.scss"
import { useSelector } from "react-redux";
import { IoCall } from "react-icons/io5";
const ClientHeader = () => {
    const wishlist = useSelector((state) => state.wishlist);
  return (
    <header>
      <section className={styles.head}> 
        <h1>We believe we helps people
        for happier lives</h1>
        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
        <div className={styles.call}>
        <span>+880 123 12 658 439 </span>
        <div className={styles.callicon}><IoCall /></div>
        </div>
      </section>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>
              Wishlist <sup>{wishlist?.items.length}</sup>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ClientHeader;
