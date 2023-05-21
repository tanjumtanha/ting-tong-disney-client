import React from 'react';
import Banner from '../Banner/Banner';
import Toys from '../Toys/Toys';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'lightblue' }} className='mb-0'>
            <Banner></Banner>
            <Toys></Toys>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;