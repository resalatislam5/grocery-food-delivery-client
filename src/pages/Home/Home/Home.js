import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Delivery from '../Delivery/Delivery';
import HomeProducts from '../HomeProducts/HomeProducts';
import Serve from '../Serve/Serve';

const Home = () => {
    // title
    useTitle('Home')
    return (
        <div>
            <Banner /> 
            <HomeProducts />
            <Serve />
            <ChooseUs />
            <Delivery />
        </div>
    );
};

export default Home;