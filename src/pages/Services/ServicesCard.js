import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({product}) => {
    const {strMealThumb,strMeal,strInstructions,_id}= product;
    return (

            <div className="">
                <div className="card bg-white border xl:w-96 w-80 p-3">
                    <div>
                        <PhotoProvider>
                            <PhotoView src={strMealThumb}>
                            <img src={strMealThumb} className="rounded-lg w-96" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <h3 className='text-[#2E2E2E] text-xl font-semibold block mt-2'>{strMeal}</h3>
                    <p className="text-[#676767] mt-4">{strInstructions.length <100 ?strInstructions : strInstructions.slice(0,100)+'...'}</p>
                    <div className='flex justify-between py-4 px-2 text-2xl '>
                        <p className='font-bold'>Price : <span className='text-[#F86061]'>{product.price} taka</span></p>
                        <Link className='text-[#F86061]' to={`/service/${_id}`}><FaArrowRight /></Link>
                    </div>
            </div>
        </div>
    );
};

export default ServicesCard;