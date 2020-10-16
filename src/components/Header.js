import React from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";

function Header() {
  return (
    <div className="container">
      <div className="nav-links">
        <Link to="/" style={{ textDecoration: "none" }}>
        <li className="home">Home</li>
        </Link>
        <li>Features</li>
        <li>Lifestyle</li>
        <li>Travel</li>
        <li>Shop</li>
        <li>About me</li>
        <li>Contact</li>
      </div>
      <div className="nav-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-rss"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="search-bar">
        <div></div>
        <input type="text" placeholder="Search and hit enter" />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Header;
