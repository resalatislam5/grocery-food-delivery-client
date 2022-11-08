import React, { useEffect, useState } from 'react';
import { FaArrowRight,FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/homeproducts')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='mx-28 mt-48'>
            <div className='grid grid-cols-3 gap-5'>
            {
                products.map(product => <div key={product._id}>
                    <div className="">
                        <div className="card bg-white border w-96 p-3">
                            <img src={product.strMealThumb} className="rounded-lg w-96" alt="" />
                            <h3 className='text-[#2E2E2E] text-xl font-semibold block mt-2'>{product.strMeal}</h3>
                            <p className="text-[#676767] mt-4">{product.strInstructions.length <100 ?product.strInstructions : product.strInstructions.slice(0,100)+'...'}</p>
                            <div className='flex justify-end p-2 text-2xl text-[#F86061]'>
                                <Link to={`/service/:${product._id}`}><FaArrowRight /></Link>
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