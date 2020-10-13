import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <div className="profile-container">
      <button>About me</button>
      <img src={require("../../img/profile1.jpg")} alt="profile" />
      <p>
        Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic
        fingestace fanny pack nostrud. Seitan... <span>Read More</span>
      </p>
      <button className="follow">Subscribe and Follow</button>
      <div className="icon-wrap">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-rss"></i>
      </div>
    </div>
  );
}

export default Profile;
