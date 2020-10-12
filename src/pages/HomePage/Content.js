import React from "react";
import "./Content.scss";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Content() {
  return (
    <div className="content-container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default Content;
