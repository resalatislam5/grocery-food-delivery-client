import React from 'react';

const Review = ({reviews}) => {
    const {displayName,email,review}=reviews;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <span>{email}</span>
                    <p className='text-xl'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;