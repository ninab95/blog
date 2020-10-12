import React from "react";
import "./LeftContainer.scss";
import TravelPost from "./TravelPost";
import ArticleContainer from "./ArticleContainer";

function LeftContainer() {
  return (
    <div className="container-left">
      <TravelPost />
      <ArticleContainer />
    </div>
  );
}

export default LeftContainer;
