import React from 'react';
import Header from '../../components/Header';
import Logo from '../HomePage/Logo';
import FullTravelPost from './FullTravelPost';
import FullTravel2 from './FullTravel2';
import BlogPost2 from './BlogPost2';
import BlogPostTwitter from './BlogPostTwitter';
import ShareAndComment from './ShareAndComment';
import AutorInfo from './AutorInfo';
import RecommendationContainer from './RecommendationContainer';
import Comment from './Comment';
import Images from '../HomePage/Images';
import Footer from '../../components/Footer';
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
            <ShareAndComment />
            <AutorInfo />
            <RecommendationContainer />
            <Comment />
            <Images />
            <Footer />
        </div>
    );
}

export default Blog;