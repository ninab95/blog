import React from "react";
import Article from "./Article";
import "./Article.scss";

function ArticleContainer() {
  const contents = [
    {
      picUrl: "prva.jpg",
      section: "Travel",
      title: "Explore the Pacific Northwest",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
    {
      picUrl: "druga.jpg",
      section: "Travel",
      title: "My Trip to New York",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
    {
      picUrl: "treca.jpg",
      section: "Music",
      title: "Lykke Li - Gunshot",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
    {
      picUrl: "cetvrta.jpg",
      section: "Lifestyle",
      title: "Pine Decorations",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
    {
      picUrl: "peta.jpg",
      section: "Lifestyle",
      title: "Summer Outfit",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
    {
      picUrl: "sesta.jpg",
      section: "Lifestyle",
      title: "Blueberry Pie Recipe",
      content:
        "Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party…",
      date: "March 8,2015",
    },
  ];
  return (
    <div className="container-article">
      <div className="proba">
        {contents.map((content, key) => {
          return <Article key={key} content={content} />;
        })}
      </div>
      <div className="older-posts">
        <a href="#">Older posts </a>
        <i className="fas fa-angle-double-right"></i>
      </div>
    </div>
  );
}

export default ArticleContainer;
