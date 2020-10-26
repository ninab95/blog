import React from 'react';
import './About.scss';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';

function About() {
    return (
        <div className="about-page-wrapper">
            <Header />
            <Logo />
        </div>
    );
}

export default About;