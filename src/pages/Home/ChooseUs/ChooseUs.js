import React from 'react';
import image from '../../../assets/melting.png'
const ChooseUs = () => {
    return (
        <div className='px-28 pt-12 pb-28'>
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <img src={image} alt="" />
                </div>
                <div className="mt-80">
                    <p className="text-[#03A66B]">WHY CHOOSE US</p>
                    <h2 className="text-[#2E2E2E] font-bold text-4xl my-5">Find Favorites and <br /> Discover New Ones</h2>
                    <p className="text-[#676767]">At vero eos et accusamus et iusto odio <br /> dignissimos ducimus blanditiis praesen <br /> voluptatum deleniti.</p>
                    <button className='btn mt-5'>Explore Now</button>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;