import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Reviews from './Reviews/Reviews';

const Service = () => {
    const product = useLoaderData();
    const {strMealThumb,strMeal,strInstructions,_id,price} = product[0];
    const {user} = useContext(AuthContext)
    // title
    useTitle('Services')
    //handle orders
    const handleAdd = () =>{
        product[0].email = user?.email;
        // addService api post called
        fetch('https://gorcery-food-delivery-server-resalatislam5.vercel.app/addservices',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(product[0])
        })
        .then(res => res.json())
        .then(data => {
            toast.success('meal add successfully')
        })
      }
    return (
        <div className='py-10 mx-48'>
           <div className="card card-compact w-[700px] mx-auto bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions}</p>
                    <div className="card-actions justify-between">
                    <p className='font-bold text-2xl'>Price : <span className='text-[#F86061]'>{price} taka</span></p>
                    {
                        user && user.email ?
                        <button onClick={handleAdd} className="btn btn-primary">Buy Now</button>
                        :
                        <p className='text-2xl font-bold'> If you bye new <Link className='underline text-end mb-5 text-[#F86061]' to='/login'>Please Login</Link></p>
                    }
                    </div>
                </div>
            </div>
            <Reviews id ={_id} strMeal={strMeal}/>
        </div>
    );
};

export default Service;