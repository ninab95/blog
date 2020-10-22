import React from 'react';
import './Recommendation.scss';

function Recommendation(props) {
    return (
            <div className="img-container">
                     <img src={require(`../../img/${props.info.urlPic}`)} alt="content" />
    <p>{props.info.title}</p>
    <p className="paragraph-date">{props.info.date}</p>
                </div>
        
    );
}

export default Recommendation;