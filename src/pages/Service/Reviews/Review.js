import React from 'react';

const Review = ({reviews}) => {
    const {displayName,email,review,photoURL}=reviews;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-5 flex items-center flex-row px-5">
            <div>
                <img className="mask mask-decagon w-16" src={photoURL} />
            </div>
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