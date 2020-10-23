import React from "react";
import Newsletter from "./Newsletter";
import "./Newsletter.scss";

function NewsletterContainer() {
  const newsletters = [
    {
      picUrl: "girl.jpg",
      title: "Exploring the Columbia River Gorge",
      date: "November 24, 2015",
    },
    {
      picUrl: "rogovi.jpg",
      title: "Explore the Pacific Northwest",
      date: "March 20, 2015",
    },
    {
      picUrl: "park.jpg",
      title: "My Trip to New York",
      date: "March 30, 2015",
    },
  ];
  return (
    <div className="wrapper-main">
      <button className="button-article">Must-read articles</button>
      {newsletters.map((newsletter, key) => {
        return <Newsletter key={key} newsletter={newsletter} />;
      })}
      <div className="subscribe-wrap">
        <h3>Subscribe to my Newsletter</h3>
        <input type="text" placeholder="YOUR EMAIL ADDRESS" />
        <button className="button-subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default NewsletterContainer;
