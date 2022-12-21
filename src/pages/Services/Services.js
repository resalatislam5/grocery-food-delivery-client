import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const products = useLoaderData()
    // title
    useTitle('Services')
    return (
        <div className='xl:mx-28 mx-5'>
            <h2 className='my-5 text-center text-3xl font-bold'>Total Meal Found: <span className='text-[#F86061]'>{products.length}</span></h2>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-14 justify-items-center'>
                {
                    products.map(product => <ServicesCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Services;