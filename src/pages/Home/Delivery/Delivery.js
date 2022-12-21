import React from 'react';
import image from '../../../assets/home-delivery.png'
const Delivery = () => {
    return (
        <div className='lg:px-28 px-5 lg:pt-12 lg:pb-28 pb-5'>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
                <div className="lg:mt-80 mt-5 order-2 lg:order-1">
                    <p className="text-[#F9BA45]">HOME DELIVERY</p>
                    <h2 className="text-[#2E2E2E] font-bold text-4xl my-5">Sit at Home We Will Take <br /> Care Your Order</h2>
                    <p className="text-[#676767]">At vero eos et accusamus et iusto odio dignissimos <br /> ducimus qui blanditiis praesentium voluptatum <br /> deleniti atque corrupti quos </p>
                    <button className='btn mt-5'>Explore Now</button>
                </div>
                <div className="order-1 lg:order-2">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;