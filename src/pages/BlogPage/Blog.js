import React from 'react';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';
import FullTravelPost from './FullTravelPost';
import './Blog.scss';

function Blog() {
    return (
        <div className="blog-wrapper">
            <Header />
            <Logo />
            <FullTravelPost />
        </div>
    );
}

export default Blog;