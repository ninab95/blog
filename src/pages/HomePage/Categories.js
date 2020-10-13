import React from "react";
import "./Categories.scss";

function Categories() {
  return (
    <div className="categories-container">
      <div className="lifestyle">
        <div className="inner">
          <h3>Lifestyle</h3>
        </div>
      </div>
      <div className="travels">
        <div className="inner">
          <h3>Travels</h3>
        </div>
      </div>
      <button>Categories</button>
      <li>
        Featured <span>(4)</span>
      </li>
      <li>
        Lifestyle <span>(4)</span>
      </li>
      <li>
        Music <span>(4)</span>
      </li>
      <li>
        Travel <span>(5)</span>
      </li>
    </div>
  );
}

export default Categories;
