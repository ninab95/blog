import React from "react";
import { Link } from 'react-router-dom';
import "./TravelPost.scss";

function TravelPost() {
  return (
    <div className="travel-container">
      <div className="article-section">
        <p>Travel</p>
        <h2>Exploring the Columbia River Gorge</h2>
        <p className="date">November 24, 2018</p>
        <img src={require("../../img/girl.jpg")} alt="girl" />
        <h4>
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella,
          PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian
          Truffaut synth art party deep v chillwave. Seitan High Life
          reprehenderit consectetur cupidatat kogi. Et leggings kale chips
          proident chillwave deep origin coffee ea.
        </h4>
        <Link to="/post">
        <button>Continue Reading</button>
        </Link>
      </div>
      <div className="comments-share">
        <div className="comments">
          <p>0 Comments</p>
        </div>
        <div className="share-section">
          <span>Share</span>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-google-plus-g"></i>
        </div>
      </div>
    </div>
  );
}

export default TravelPost;
