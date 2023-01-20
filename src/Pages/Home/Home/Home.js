import React from 'react';
import BookSession from '../../BookSession/BookSession';
import HomeParagraph from '../../HomeParagraph/HomeParagraph';
import Review from '../../Review/Review';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeParagraph></HomeParagraph>
            <Review></Review>
            <BookSession></BookSession>
        </div>
    );
};

export default Home;