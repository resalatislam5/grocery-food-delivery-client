import React from 'react';
import image from '../../../assets/home-delivery.png'
const Delivery = () => {
    return (
        <div className='px-28 pt-12 pb-28'>
            <div className="grid grid-cols-2 gap-4 justify-center">
                <div className="mt-80">
                    <p className="text-[#F9BA45]">HOME DELIVERY</p>
                    <h2 className="text-[#2E2E2E] font-bold text-4xl my-5">Sit at Home We Will Take <br /> Care Your Order</h2>
                    <p className="text-[#676767]">At vero eos et accusamus et iusto odio dignissimos <br /> ducimus qui blanditiis praesentium voluptatum <br /> deleniti atque corrupti quos </p>
                    <button className='btn mt-5'>Explore Now</button>
                </div>
                <div className="">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Delivery;