import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Review from './Review';

const Reviews = ({id}) => {
    const [isShown, setIsShown] = useState(false);
    const [reviews,setReviews] = useState([])
    const {user,loading} = useContext(AuthContext)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [setReviews])
    if(loading){
        return <button className="btn btn-square loading"></button>
    }
    const handleClick = event => {
        setIsShown(current => !current);
      };
      const handleReview = e =>{
        e.preventDefault()
        const review = e.target.review.value;
        const userReview = {
            reviewId:id,
            review:review,
            displayName:user.displayName,
            email: user.email
        }
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                userReview.insertedId = data.insertedId;
                const newReview = [...reviews,userReview]
                setReviews(newReview)
                console.log(data)
                e.target.reset()
            }
        })
      }
    return (
        <div className='mt-10'>
            <h1 className="text-2xl text-center font-bold">See What People Are Saying About the Meal</h1>
            <div className='flex justify-between mt-6'>
                <p>({reviews.length} Reviews)</p>
                <button onClick={handleClick} className='border px-4 py-3 rounded-lg'>Write A Review</button>
            </div>
            { isShown && user ?
                <form onSubmit={handleReview}  className='flex items-end flex-col mt-6'>
                    <textarea className="textarea textarea-success w-96" name="review" placeholder="Type your review"></textarea>
                    <input className='border px-6 py-3 rounded-lg mt-3' type="submit" value="Review" />
                </form>
                :
                <>
                {
                    isShown&&
                    <p className='text-end mt-6 text-2xl font-bold'>Please <Link className='underline text-[#F55253]' to='/login'>Login</Link></p>

                }
                </>
            }
            {
                reviews.map(review => <Review key={review._id} reviews={review}></Review>)
            }
        </div>
    );
};

export default Reviews;