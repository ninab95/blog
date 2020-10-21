import React from 'react'
import './BlogPostTwitter.scss';

function BlogPostTwiteer() {
    return (
        <div className="large-container">
            <h2>Proident chillwave deep v laborum</h2>
            <div className="around-wrapper">
            <div className="text-section">
            <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. You probably haven’t heard of them beard cred ironic irony kitsch Banksy.</h4>
            <h4>Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever ex DIY chicharrones kale chips. Esse ex vice, viral hashtag single-origin coffee eiusmod austin sunt deep v in fingerstache. Af <span className="first-span">bespoke hella</span> retro mlkshk, organic chartreuse church-key non glossier man braid. Mollit air plant ennui, 8-bit dolore enamel pin green <span >juice bespoke</span> proident helvetica.</h4>
            <li><span>Craft beer.</span> Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever toast cold-pressed.</li>
            <li><span>Hella viral.</span> Esse ex vice, viral hashtag single-origin coffee eiusmod austin sunt deep v in fingerstache. Church-key non glossier man braid.</li>
            <li><span>Kale chips.</span> Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Salvia esse nihil, flexitarian Truffaut</li>
            <li><span>Chillwave deep.</span> Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever toast cold-pressed.</li>
            <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf <span className="first-span">moon beard</span> Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings kale chips proident chillwave deep origin coffee ea. Drinking vinegar four dollar toast cold-pressed in bicycle rights mustache whatever ex DIY chicharrones kale chips</h4>
            <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. You probably haven’t heard of them beard cred ironic irony kitsch Banksy. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings kale chips proident haven’t heard of them beard cred ironic.
            </h4>
            </div>
            <div className="twitter-container">
                <div className="header-twitter">
                    <h3>Unsplash <i className="fas fa-user-check"></i></h3>
                    <i className="fab fa-twitter"></i>
                </div>
                <p>Among giants</p>
                <p className="link">unsplash.com/chenpitu</p>
                <img src={require("../../img/nature.jpg")} alt="nature" />
                <div className="date-section">
                    <p>12:30 - Oct 30, 2018</p>
                    <i className="far fa-circle"></i>
                </div>
                <div className="like-comment">
<div className="like-section">
    <i className="far fa-heart"></i>
    <p>72</p>
</div>
<div className="comment-section">
    <i className="far fa-comment"></i>
    <p>16 people are Tweeting about this</p>
</div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default BlogPostTwiteer;