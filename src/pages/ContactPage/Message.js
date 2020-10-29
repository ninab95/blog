import React from 'react';
import './Message.scss';

function Message() {
    return (
        <div className="message-container">
            <div className="name-input">
                <h4>Your Name (required)</h4>
                <input type="text" />
            </div>
            <div className="email-input">
                <h4>Your Email (required)</h4>
                <input type="text" />
            </div>
            <div className="subject-input">
                <h4>Subject</h4>
                <input type="text" />
            </div>
            <div className="message-input">
                <h4>Your Message</h4>
                <textarea name="message" rows="8" cols="45"></textarea>
            </div>
            <button>Send</button>
        </div>
    );
}

export default Message;