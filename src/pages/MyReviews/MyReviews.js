import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const [reviews,setReviews] = useState([])
    const [update,setUpdate] = useState()
    const [handleid,Sethandleid] = useState()
    const {user,logOut} = useContext(AuthContext);
    // title
    useTitle('My-Review')
    // MY Review api called
    useEffect(()=>{
        fetch(`https://gorcery-food-delivery-server-resalatislam5.vercel.app/myreviews?email=${user?.email}`,{
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
        .then(data => setReviews(data))
    },[user,logOut])
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
                    setReviews(newReview)
                    toast.success('Delete successfully')
                }
            }
        })
    }
    const handleUpdatetext = e =>{
        const text = e.target.value
        setUpdate(text)
    }
    //handle update
    const handleUpdate = (id) =>{
        const updated = {
            update:update,
        }
        fetch(`https://gorcery-food-delivery-server-resalatislam5.vercel.app/reviewupdate/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updated),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.acknowledged){
                    const allReview = reviews.filter(review => review._id !== id);
                    const newReview = reviews.find(review => review._id === id)
                    // const newReview = [...reviews,updated];
                    newReview.review = update;
                     const  Updatereview = [...allReview, newReview]
                    setReviews(Updatereview)
                    toast.success('Update successfully')
                }
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
                    <div key={reviews._id} className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">{reviews?.displayName}</h2>
                    <span className="">Date: {reviews.date}</span>
                    <span className="">Time: {reviews.time} {reviews.time >= 12 ? 'pm' : 'am'}</span>
                    <span>Email: {reviews?.email}</span>
                    <p className='text-xl'>Review : {reviews?.review}</p>
                </div>
                <div>
                    <button onClick={()=>handleDelete(reviews._id)} className='btn m-5'>Delete</button>
                    <label  htmlFor="my-modal" onClick={()=>Sethandleid(reviews._id)} className="btn m-5">Edit</label>
                </div>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box">
                        <form>
                        <textarea onBlur={handleUpdatetext} className="textarea textarea-primary w-full" name='textarea' placeholder="Update review"></textarea>
                        </form>
                        <div className="modal-action">
                        <label type='submit' htmlFor="my-modal" onClick={()=>handleUpdate(handleid)} className="btn">Update</label>
                        </div>
                    </div>
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