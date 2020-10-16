import React from 'react';
import './FullTravelPost.scss';

function FullTravelPost() {
    return(
        <div className="travel-wrapper">
        <p>Travel</p>
        <h2>Exploring the Columbia River Gorge</h2>
        <p className="date-travel">November 24, 2018</p>
        <img src={require("../../img/girl.jpg")} alt="girl" />
        <h4>
          Meh synth Schlitz, tempor duis single-origin coffee ea next level
          ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella,
          PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian
          Truffaut synth art party deep v chillwave. Seitan High Life
          reprehenderit consectetur cupidatat kogi. Et leggings kale chips
          proident chillwave deep origin coffee ea.
        </h4>
        <h4>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. You probably haven’t heard of them beard cred ironic irony kitsch Banksy.</h4>
        <h4>Disrupt vero ea id fugiat, lo-fi lomo post-ironic irony kitsch Banksy, Tumblr kale chips single-origin.</h4>
        <div className="text-wrapp">
        <h3>Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.</h3>
        <span>- Harriet Tubman</span>
        </div>
        <h4>Scenester shoreditch echo park, godard hell of kombucha yuccie brunch fingerstache in PBR&B. Craft beer adipisicing semiotics waistcoat magna cred post-ironic aute heirloom bespoke stumptown. Forage bushwick meh est echo park ad voluptate post-ironic. Hot chicken biodiesel artisan meditation beard typewriter vape exercitation drinking vinegar lumbersexual kombucha ut.</h4>
        </div>
    )
}

export default FullTravelPost;