import React from 'react';
import Banner from '../Banner/Banner';
import Toys from '../Toys/Toys';
import Gallery from '../Gallery/Gallery';
import useTitle from '../../../hooks/useTitle';
import ReviewPage from '../ReviewPage/ReviewPage';
import HowToBuy from '../HowToBuy/HowToBuy';

const Home = () => {
    useTitle('Home')
    return (
        <div style={{ backgroundColor: 'lightblue' }} className='mb-0'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <HowToBuy></HowToBuy>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;