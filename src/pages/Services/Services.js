import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const products = useLoaderData()
    return (
        <div className='mx-28'>
            <h2 className='my-5 text-center text-3xl font-bold'>Total Meal Found: <span className='text-[#F86061]'>{products.length}</span></h2>
            <div className='grid grid-cols-3 gap-5 my-14'>
                {
                    products.map(product => <ServicesCard key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Services;