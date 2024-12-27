import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles["header"]}>
          <h2 className={styles["logo"]}>Logo</h2>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/detail"}>Detail</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
