import React from 'react';
import Banner from '../Banner/Banner';
import Toys from '../Toys/Toys';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'lightblue' }} className='mb-0'>
            <Banner></Banner>
            <Toys></Toys>
        </div>
    );
};

export default Home;