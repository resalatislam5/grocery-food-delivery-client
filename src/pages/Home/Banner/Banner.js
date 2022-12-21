import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner.png'
import stroberi from '../../../assets/stroberi.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:px-28 px-5 items-center'>
           <div className="lg:order-1 order-2">
            <div className="">
                <p className='text-[#F54748] bg-[#FDECEC] lg:p-4 rounded-3xl inline'>More than Faster <span><img src={stroberi} className="inline w-14 mt-[1%]" alt="" /></span></p>
                <h2 className="text-[#2E2E2E] lg:text-7xl text-3xl font-semibold lg:my-5 my-3">Groceries <br /> delivered in as <br /> little as <span className="text-[#F54748]">2 hours</span></h2>
                <p className="text-[#676767]">Grocen atssures fresh grocery every morning to your <br /> family without getting out in this pandemic.</p>
            </div>
            <div className="mt-10 flex gap-5">
                <Link to='/services' className="btn Order-btn">Order Now</Link>
                <button className="btn Order-progress">Order Process</button>
            </div>
           </div>
           <div className="lg:order-2 order-1">
        <img src={banner} alt="" />
           </div>
        </div>
    );
};

export default Banner;