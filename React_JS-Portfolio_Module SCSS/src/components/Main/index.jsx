import React from 'react'
import styles from "./main.module.scss"; 
import img from "../../img/banner_img_1.png";
import Home from './Home';
import Services from './Services';
import Skills from './Skills';
const Main = () => {
  return (
    <main>
      
      <Home/>
      <Services/>
      <Skills/>
    </main>
  );
}

export default Main
