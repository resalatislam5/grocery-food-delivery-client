import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const [reviews,setReviews] = useState([])
    const {user,logOut} = useContext(AuthContext);
    // title
    useTitle('My-Review')
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('grocery-token')}`
            }
        })
        .then(res =>{
           if(res.status === 401 || res.status === 403){
            console.log('User decoded')
            logOut()
           }
           return res.json()
        })
        .then(data => setReviews(data))
    },[])
    
    //handle delete
    const handleDelete = id =>{
        fetch(`https://gorcery-food-delivery-server.vercel.app/reviewdelete/${id}`,{
            method:'DELETE',
            
        })
        .then(res =>res.json())
        .then(data => {
            const confirm = window.confirm();
            if(confirm){
                if(data.acknowledged){
                    const newReview = reviews.filter(review => review._id !== id)
                    console.log(newReview, id)
                    setReviews(newReview)
                    toast.success('Delete successfully')
                }
            }
        })
    }
    //handle update
    const handleUpdate = id =>{
        const data = {name:'o'};
        fetch(`https://gorcery-food-delivery-server.vercel.app/reviewupdate/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(),
            })
            .then((response) => response.json(data))
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            
            { reviews.length > 0 ?
            <div className='grid grid-cols-3 gap-5'>
            {
                reviews.map(reviews=>
                    <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">{reviews?.displayName}</h2>
                    <span>{reviews?.email}</span>
                    <p className='text-xl'>{reviews?.review}</p>
                </div>
                <div>
                    <button onClick={()=>handleDelete(reviews._id)} className='btn m-5'>Delete</button>
                    <button onClick={()=>handleUpdate(reviews._id)}  className='btn m-5'>Edit</button>
                </div>
            </div>
                )
            }
        </div>
        :
        <h1>No reviews were added</h1>
        }
        </div>
    );
};

export default MyReviews;