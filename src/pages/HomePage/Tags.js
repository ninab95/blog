import React from "react";
import "./Tags.scss";

function Tags() {
  return (
    <div className="tag-wrapper">
      <button>Tag cloud</button>
      <div className="tags">
        <span>Decorations</span>
        <span>Diy</span>
        <span>Fashion</span>
        <span>Lifestyle</span>
        <span>Music</span>
        <span>Northwest</span>
        <span>Pacific</span>
        <span>Pine</span>
        <span>Recipe</span>
        <span>Travel</span>
      </div>
    </div>
  );
}

export default Tags;
