import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavigationBar.css";
import { assets } from "../../assets/assets";

const NavigationBar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For toggle icon menu

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="logo">BlossomBay</h1>
      </Link>

      <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-products" onClick={() => setMenu("products")} className={menu === "products" ? "active" : ""}>Product</a>
        <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href="#reviews" onClick={() => setMenu("reviews")} className={menu === "reviews" ? "active" : ""}>Reviews</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart"><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} >Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myOrders')}><img src={assets.bag_icon} alt="Orders" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="Logout" /><p>Logout</p></li>
            </ul>
          </div>
        )}

        {/* Toggle Icon Menu */}
        <div className="toggle-menu">
          <button className="toggle-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {isDropdownOpen ? <FiX /> : <FiMenu />}
          </button>
          {isDropdownOpen && (
            <ul className="toggle-dropdown">
              <li><a href="#home">Home</a></li>
              <li><a href="#explore-products">Product</a></li>
              <li><a href="#app-download">Mobile-App</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#footer">Contact us</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
