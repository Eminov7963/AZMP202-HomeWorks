import React from 'react'
import { NavLink } from 'react-router-dom';
import "./client.css"
import { useSelector } from "react-redux";
const ClientHeader = () => {
    const wishlist = useSelector((state) => state.wishlist);
  return (
    <header>
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
