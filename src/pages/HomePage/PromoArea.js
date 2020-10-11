import React from "react";
import "./PromoArea.scss";

function PromoArea() {
  return (
    <div className="promo-container">
      <div className="first-photo">
        <div className="ig-overlay">
          <h3>Follow @ instagram</h3>
        </div>
      </div>
      <div className="second-photo">
        <div className="about-overlay">
          <h3>About me</h3>
        </div>
      </div>
      <div className="third-photo">
        <div className="shop-overlay">
          <h3>Browse shop</h3>
        </div>
      </div>
    </div>
  );
}

export default PromoArea;
