import React from 'react';
import Recommendation from './Recommendation';
import './Recommendation.scss';

function RecommendationContainer() {
    const infos = [
        {
            urlPic: "post4-520x400.jpg",
            title: "Snowy Mountains",
            date: "March 7,2015",
        }, 
        
        {
            urlPic: "post9-520x400.jpg",
            title: "My Trip to New York",
            date: "March 8,2015",
        },
        {
            urlPic: "gal1-520x400.jpg",
            title: "Explore the Pacific Northwest",
            date: "March 9,2015",
        },

    ];

    return (
        <div className="recomm-wrapper">
            <span>You might also like</span>
        <div className="container-info">
            {infos.map((info, key) => {
                return <Recommendation key={key} info={info} />
            })}
        </div>
        </div>
    )
}

export default RecommendationContainer;