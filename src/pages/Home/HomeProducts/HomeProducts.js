import React, { useEffect, useState } from 'react';
import { FaArrowRight,FaAngleDown } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const [products,setProducts] = useState([])
    // Home Products api called
    useEffect(()=>{
        fetch('https://gorcery-food-delivery-server.vercel.app/homeproducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='lg:mx-28 mx-5 lg:mt-48 mt-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center'>
            {
                products.map(product => <div key={product._id}>
                    <div className="">
                        <div className="card bg-white border lg:w-96 w-80 p-3">
                            <div>
                        <PhotoProvider>
                            <PhotoView src={product.strMealThumb}>
                                <img src={product.strMealThumb} className="rounded-lg w-96" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                            <h3 className='text-[#2E2E2E] text-xl font-semibold block mt-2'>{product.strMeal}</h3>
                            <p className="text-[#676767] mt-4">{product.strInstructions.length <100 ?product.strInstructions : product.strInstructions.slice(0,100)+'...'}</p>
                            <div className='flex justify-between py-4 px-2 text-2xl '>
                                <p className='font-bold'>Price : <span className='text-[#F86061]'>{product.price} taka</span></p>
                                <Link className='text-[#F86061]' to={`/service/${product._id}`}><FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        <div className='text-[#F86061] text-2xl  mt-8 text-center'>
            <Link to='/services' >See More <span><FaAngleDown className='inline-block text-center'/></span></Link>
        </div>
        </div>
    );
};

export default HomeProducts;