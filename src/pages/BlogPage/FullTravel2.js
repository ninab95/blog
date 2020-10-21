import React from 'react';
import './FullTravel2.scss';

function FullTravel2() {
    return (
        <div className="content-wrapper">
        <div className="images-wrapper">
                <div className="img1">
                <img src={require("../../img/priroda1.jpg")} alt="girl" />
                </div>
                <div className="img2">
                <img src={require("../../img/p6-1.jpg")} alt="girl" />
                </div>
            <div className="img3">
                <img src={require("../../img/postimg.jpg")} alt="girl" />
            </div>
        </div>
        <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings kale chips proident chillwave deep origin coffee ea.</h4>
        <div className="container-around">
            <div className="around">
                <h3>Success is how high you bounce when you hit bottom.</h3>
                <p>George S.Patton</p>
            </div>
            <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. You probably haven’t heard of them beard cred ironic irony kitsch Banksy. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings kale chips proident haven’t heard of them beard cred ironic.</h4>
            <h4>Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever ex DIY chicharrones kale chips. Esse ex vice, viral hashtag single-origin coffee eiusmod austin sunt deep v in fingerstache. Af bespoke hella retro mlkshk, organic chartreuse church-key non glossier man braid. Mollit air plant ennui, 8-bit dolore enamel pin green juice bespoke proident helvetica.</h4>
        </div>
        </div>
    );
}

export default FullTravel2;