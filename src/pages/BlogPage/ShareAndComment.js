import React from 'react';
import './ShareAndComment.scss';

function ShareAndComment(props) {
    return ( 
    <div className="share-comment-section">
      {props.isBlogPage && (
<div className="comments">
          <p>0 Comments</p>
        </div>
      )}
        <div className="share-wrapper">
          <span>Share:</span>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-google-plus-g"></i>
        </div>
      </div>
    )
}

export default ShareAndComment;