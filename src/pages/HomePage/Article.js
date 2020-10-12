import React from "react";
import "./Article.scss";

function Article(props) {
  return (
    <div className="article-wrapper">
      <img src={require(`../../img/${props.content.picUrl}`)} />
      <span>{props.content.section}</span>
      <h2>{props.content.title}</h2>
      <h4>{props.content.content}</h4>
      <p>{props.content.date}</p>
    </div>
  );
}

export default Article;
