import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    const [services,setServices] = useState([])
    const {user,logOut} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://gorcery-food-delivery-server-resalatislam5.vercel.app/addservices?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('grocery-token')}`
            }
        })
        .then(res =>{
           if(res.status === 401 || res.status === 403){
            logOut()
           }
           return res.json()
        })
        .then(data => setServices(data))
    },[user])
    // title
    useTitle('Orders')
    return (
        <div className='mx-28 my-16'>
            <div className='grid grid-cols-3 gap-5'>
            {
                services.map(product => <div key={product._id}>
                    <div className="">
                        <div className="card bg-white border w-96 p-3">
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
                                <Link className='text-[#F86061]' to={`/service/${product._id}`}>Process</Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default AddService;