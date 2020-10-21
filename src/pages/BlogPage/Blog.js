import React from 'react';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';
import FullTravelPost from './FullTravelPost';
import FullTravel2 from './FullTravel2';
import BlogPost2 from './BlogPost2';
import BlogPostTwitter from './BlogPostTwitter';
import './Blog.scss';

function Blog() {
    return (
        <div className="blog-wrapper">
            <Header />
            <Logo />
            <FullTravelPost />
            <FullTravel2 />
            <BlogPost2 />
            <BlogPostTwitter />
        </div>
    );
}

export default Blog;