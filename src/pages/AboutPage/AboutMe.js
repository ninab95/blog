import React from 'react';
import './AboutMe.scss';

function AboutMe() {
    return (
        <div className="about-me-container">
            <h3>About Me</h3>
            <div className="image-about">
                <img src={require("../../img/druga.jpg")} alt="girl" />
            </div>
            <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, <span>flexitarian Truffaut synth</span> art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo.</h4>
            <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest.  Et leggings fanny pack, elit bespoke vinyl art.</h4>
            <h4>Disrupt vero ea id fugiat, lo-fi lomo post-ironic irony kitsch Banksy. Tumblr kale chips single-origin coffee Wes Anderson +1 tousled, disrupt butcher sapiente banh mi brunch nisi irony. Artisan wolf fap lomo, laborum Tumblr anim consequat fashion axe sartorial leggings viral.</h4>
            <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest. Et leggings fanny pack, elit bespoke vinyl art</h4>
            <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, <span>flexitarian Truffaut synth</span> art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art.</h4>
            <div className="image-about-wrapper">
                <div className="picture-first">
                </div>
                <div className="picture-second">
                </div>
                <div className="picture-third">
                </div>
            </div>
            <h4>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra.</h4>
            <h2>Truffaut synth art party deep v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl art party artisan.</h2>
            <p>- John Doe</p>
            <h4>Disrupt vero ea id fugiat, lo-fi lomo post-ironic irony kitsch Banksy. Tumblr kale chips single-origin coffee Wes Anderson +1 tousled, disrupt butcher sapiente banh mi brunch nisi irony. Artisan wolf fap lomo, laborum Tumblr anim consequat fashion axe sartorial leggings viral.
</h4>
<div className="logo-pic">
<img  src={require("../../img/signing.png")} alt="logo" />
</div>
        </div>
    );
}

export default AboutMe;