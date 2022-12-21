import React from 'react';
import bus from '../../../assets/bus.png';
import returns from '../../../assets/return.png';
import secure from '../../../assets/secure.png';
import './Serve.css'

const Serve = () => {
    return (
        <div className='lg:mt-52 mt-10 bg-[#FEF5F5]'>
           <div className=' lg:mx-52 mx-5'>
                <div className="text-center">
                        <p className="pt-24 text-[#F54748]">What we Serve</p>
                        <h3 className='pt-2 font-bold text-4xl text-[#2E2E2E] pb-20'>Fruit And Vegetable Delivered <br /> To Your Home</h3>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 pb-32 relative justify-items-center">
                    <div className="card-style">
                        <div className="card bg-white w-80 lg:h-[260px] flex items-center py-12 text-center z-10">
                            <img src={bus} className="w-20" alt="" />
                            <h3 className='text-[#2E2E2E] text-xl font-semibold'>Free shipping</h3>
                            <p className="text-[#676767] mt-4">Enjoy Order in a hand using the <br /> fresness of groceries</p>
                        </div>
                    </div>
                    <div className="card-style">
                        <div className="card bg-white lg:w-[300px] w-80 lg:h-[260px] flex items-center py-12 text-center z-10">
                            <img src={returns} className="w-20" alt="" />
                            <h3 className='text-[#2E2E2E] text-xl font-semibold'>15 days returns</h3>
                            <p className="text-[#676767] mt-4">Order in a handy way using the <br /> freshness of the groceries.</p>
                        </div>
                    </div>
                    <div className="card-style">
                        <div className="card bg-white w-80 lg:h-[260px] flex items-center py-12 text-center z-10">
                            <img src={secure} className="w-20" alt="" />
                            <h3 className='text-[#2E2E2E] text-xl font-semibold'>Secure checkout</h3>
                            <p className="text-[#676767] mt-4">If you get rotten items - return <br /> immediately to us.</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Serve;