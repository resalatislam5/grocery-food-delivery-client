import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Delivery from '../Delivery/Delivery';
import Serve from '../Serve/Serve';

const Home = () => {
    return (
        <div>
            <Banner /> 
            <Serve />
            <ChooseUs />
            <Delivery />
        </div>
    );
};

export default Home;