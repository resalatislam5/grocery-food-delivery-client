import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Serve from '../Serve/Serve';

const Home = () => {
    return (
        <div>
            <Banner /> 
            <Serve />
            <ChooseUs />
        </div>
    );
};

export default Home;