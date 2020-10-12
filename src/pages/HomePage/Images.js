import React from "react";
import "./Images.scss";

function Images() {
  return (
    <div className="image-container">
      <img src={require("../../img/1.jpg")} />
      <img src={require("../../img/2.jpg")} />
      <img src={require("../../img/3.jpg")} />
      <img src={require("../../img/4.jpg")} />
      <img src={require("../../img/5.jpg")} />
      <img src={require("../../img/6.jpg")} />
    </div>
  );
}

export default Images;
