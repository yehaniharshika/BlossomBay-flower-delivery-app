import React, { useState } from "react";
import "./Navigationbar.css";
import { assets } from "../../assets/assets";
import {Link} from 'react-router-dom';

const Navigationbar = ({setShowLogin}) => {
    const[menu,setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to='/'><h1 className="logo">BlossomBay</h1></Link>
      <ul className="navbar-menu">
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-products" onClick={() => setMenu("products")} className={menu === "products" ? "active" : ""}>Product</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Moblie-App</a>
        <a href="#reviews" onClick={() => setMenu("reviews")} className={menu === "reviews" ? "active" : ""}>Reviews</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navigationbar;

