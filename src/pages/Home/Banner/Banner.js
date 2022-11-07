import React from 'react';
import banner from '../../../assets/banner.png'
import stroberi from '../../../assets/stroberi.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='grid grid-cols-2 gap-4 px-28 items-center'>
           <div className="">
            <div className="">
                <p className='text-[#F54748] bg-[#FDECEC] p-4 rounded-3xl inline'>More than Faster <span><img src={stroberi} className="inline w-14 mt-[1%]" alt="" /></span></p>
                <h2 className="text-[#2E2E2E] text-7xl font-semibold my-5">Groceries <br /> delivered in as <br /> little as <span className="text-[#F54748]">2 hours</span></h2>
                <p className="text-[#676767]">Grocen atssures fresh grocery every morning to your <br /> family without getting out in this pandemic.</p>
            </div>
            <div className="mt-10 flex gap-5">
                <button className="btn Order-btn">Order Now</button>
                <button className="btn Order-progress">Order Process</button>
            </div>
           </div>
           <div className="">
        <img src={banner} alt="" />
           </div>
        </div>
    );
};

export default Banner;