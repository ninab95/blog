import React from 'react';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';
import ContactContent from './ContactContent';
import Images from '../HomePage/Images';
import Footer from '../../components/Footer';
import './Contact.scss';

function Contact() {
    return (
        <div className="contact-container">
            <Header />
            <Logo />
            <ContactContent />
            <Images />
            <Footer />
        </div>
    );
}

export default Contact;