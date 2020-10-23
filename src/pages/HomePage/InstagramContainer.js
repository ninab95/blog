import React from 'react';
import Instagram from './Instagram';
import './Instagram.scss';

function InstagramContainer() {
const pictures = [
    {
        url: "1.jpg",
    },
    {
        url: "2.jpg",
    },
    {
        url: "3.jpg",
    },
    {
        url: "4.jpg",
    },
    {
        url: "5.jpg",
    },
    {
        url: "6.jpg",
    },
    {
        url: "cvet.jpg",
    },
    {
        url: "devojka.jpg",
    },
    {
        url: "stolica.jpg",
    },

];

    return (
        <div className="inst-wrapper">
          <button>Instagram
      </button>
      <div className="gallery-wrapper">
            {pictures.map((picture, key) => {
        return <Instagram key={key} picture={picture} />;
      })}
      </div>
        </div>
    )
}

export default InstagramContainer;