import React from 'react';
import './BlogPost2.scss';

function BlogPost2() {
    return (
        <div className="container-blog">
            <h2>Craft beer elit seitan exercitation</h2>
            <h4>Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever ex DIY chicharrones kale chips. Esse ex vice, viral hashtag single-origin coffee eiusmod austin sunt deep v in fingerstache. Af <span>bespoke hella</span> retro mlkshk, organic chartreuse church-key non glossier man braid. Mollit air plant ennui, 8-bit dolore enamel pin green juice bespoke proident helvetica.</h4>
            <img src={require("../../img/p1full.jpg")} alt="girl" />
            <p>Esse ex vice, viral hashtag single-origin coffee eiusmod austin sunt deep</p>
            <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf <span>moon beard</span> Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings kale chips proident chillwave deep origin coffee ea.</h4>
        </div>
    );
}

export default BlogPost2;