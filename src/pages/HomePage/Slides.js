import React from "react";
import "./Slides.scss";

function Slides() {
  return (
    <div className="main-container">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="logo" />
      </div>
      <div className="slides-container">
        <div className="overlay">
          <li>Travel</li>
          <h3>Snowy Mountains</h3>
          <p>March 7, 2015</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Slides;
