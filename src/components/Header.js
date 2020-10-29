import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Header.scss";

function Header() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
    <div className="container">
      <div onClick={() => setMenuOpened(true)} className="bars-wrapper">
        <div className="line-first"></div>
          <div className="line-second"></div>
          <div className="line-third"></div>
      </div>
      <div onClick={() => setMenuOpened(false)} className={`nav-links ${isMenuOpened && "opened"}`}>
        <Link to="/" style={{ textDecoration: "none" }}>
        <li className="home">Home</li>
        </Link>
        <li>Features</li>
        <li>Lifestyle</li>
        <li>Travel</li>
        <li>Shop</li>
        <Link to="/about" style={{ textDecoration: "none" }}>
        <li className="about">About me</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none"}}>
        <li>Contact</li>
        </Link>
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
