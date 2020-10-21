import React from 'react';
import './AutorInfo.scss';

function AutorInfo() {
    return (
        <div className="autor-info-wrapper">
            <img src={require("../../img/autor.png")} alt="girl" />
            <div className='info'>
                <h3>Solo Pine</h3>
                <h4>Stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod.</h4>
                <div className="social-media-icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-google-plus-g"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-tumblr"></i>
                </div>
            </div>
        </div>
    );
}

export default AutorInfo;