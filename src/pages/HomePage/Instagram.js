import React from 'react';
import './Instagram.scss';

function Instagram(props) {
    return (
        
        <div className="gallery-container">
           <img
          src={require(`../../img/${props.picture.url}`)}
          alt="gallery"
        />
        </div>
        
    );
}

export default Instagram;