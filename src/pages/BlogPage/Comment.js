import React from 'react';
import './Comment.scss';

function Comment() {
    return (
        <div className="post-comment">
            <span>No comments</span>
            <div className="form-wrapper">
                <p>Leave a replay</p>
                <div className="text-area">
            <textarea name="comment" cols ="45" rows="8"></textarea>
            </div>
            <div className="input-name">
            <label>Name*</label>
            <input name="author" type="text"></input>
            </div>
            <div className="input-email">
            <label>Email*</label>
            <input name="email" type="text"></input>
            </div>
            <div className="url-input">
            <label>Website</label>
            <input name="url" type="text"></input>
            </div>
            <button>Post comment</button>
            </div>
        </div>
    );
}

export default Comment;