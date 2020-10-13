import React from "react";
import "./Images.scss";

function Images() {
  return (
    <div className="image-container">
      <img src={require("../../img/1.jpg")} alt="slike" />
      <img src={require("../../img/2.jpg")} alt="slike" />
      <img src={require("../../img/3.jpg")} alt="slike" />
      <img src={require("../../img/4.jpg")} alt="slike" />
      <img src={require("../../img/5.jpg")} alt="slike" />
      <img src={require("../../img/6.jpg")} alt="slike" />
    </div>
  );
}

export default Images;
