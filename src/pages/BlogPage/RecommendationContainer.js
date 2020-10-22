import React from 'react';
import Recommendation from './Recommendation';
import './Recommendation.scss';

function RecommendationContainer() {
    const infos = [
        {
            urlPic: "post4.jpg",
            title: "Snowy Mountains",
            date: "March 7,2015",
        }, 
        
        {
            urlPic: "druga.jpg",
            title: "My Trip to New York",
            date: "March 8,2015",
        },
        {
            urlPic: "prva.jpg",
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