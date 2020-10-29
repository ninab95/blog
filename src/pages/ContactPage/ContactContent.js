import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import './ContactContent.scss';

function ContactContent() {
    return (
        <div className="content-2-wrapper">
            <LeftSide />
            <RightSide />
        </div>
    );
}

export default ContactContent;