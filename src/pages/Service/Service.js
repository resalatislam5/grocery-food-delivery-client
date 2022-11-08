import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews/Reviews';

const Service = () => {
    const product = useLoaderData();
    const {strMealThumb,strMeal,strInstructions,_id} = product[0];
    const handleAdd = () =>{
        fetch('http://localhost:5000/addservices',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(product[0])
        })
        .then(res => res.json())
        .then(data => {
            toast.success('meal add successfully')
           console.log(data)
        })
      }
    return (
        <div className='py-10 mx-48'>
           <div className="card card-compact w-[700px] mx-auto bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions}</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleAdd} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <Reviews id ={_id}/>
        </div>
    );
};

export default Service;