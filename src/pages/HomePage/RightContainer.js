import React from "react";
import "./RightContainer.scss";
import Profile from "./Profile";
import NewsletterContainer from "./NewsletterContainer";
import Categories from "./Categories";
import InstagramContainer from './InstagramContainer';
import Facebook from "./Facebook";
import Tags from "./Tags";

function RightContainer() {
  return (
    <div className="container-right">
      <Profile />
      <NewsletterContainer />
      <Categories />
      <InstagramContainer />
      <Facebook />
      <Tags />
    </div>
  );
}

export default RightContainer;
