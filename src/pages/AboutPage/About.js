import React from 'react';
import './About.scss';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';
import AboutMe from './AboutMe';
import ShareandComment from '../BlogPage/ShareAndComment';
import Images from '../HomePage/Images';
import Footer from '../../components/Footer';

function About() {
    return (
        <div className="about-page-wrapper">
            <Header />
            <Logo />
            <AboutMe />
            <ShareandComment isBlogPage={false} />
            <Images />
            <Footer />
        </div>
    );
}

export default About;