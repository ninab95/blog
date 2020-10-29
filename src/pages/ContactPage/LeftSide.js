import React from 'react';
import ContactInfo from './ContactInfo';
import Message from './Message';
import ShareAndComment from '../BlogPage/ShareAndComment';
import './LeftSide.scss';

function LeftSide() {
    return (
        <div className="left-side">
            <ContactInfo />
            <Message />
            <ShareAndComment />
        </div>
    );
}

export default LeftSide;