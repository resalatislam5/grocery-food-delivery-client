import React from 'react';

const Review = ({reviews}) => {
    const {displayName,email,review,photoURL,date,time}=reviews;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-5 flex items-center flex-row px-5">
            <div>
                <img className="mask mask-decagon w-16" src={photoURL} alt=""/>
            </div>
                <div className="card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <span className="">Date: {date}</span>
                    <span className="">Time: {time}</span>
                    <span>Email: {email}</span>
                    <p className='text-xl'>Review: {review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;