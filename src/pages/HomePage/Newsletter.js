import React from "react";
import "./Newsletter.scss";

function Newsletter(props) {
  return (
    <div className="news-wrapper">
      <div className="img-first">
        <img
          src={require(`../../img/${props.newsletter.picUrl}`)}
          alt="imagesss"
        />
        <div className="title-wrap">
          <p>{props.newsletter.title}</p>
          <span>{props.newsletter.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
