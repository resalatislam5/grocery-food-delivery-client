import React from 'react';
import { FaFacebook,FaGoogle } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className='min-h-[50vh] mb-[2%]'>
            <div className=' w-96 border mx-auto h-[480px] mt-[3%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Sign Up</h2>
                <form className='flex flex-col'>
                    <input className='border p-3  rounded-lg' type="text" name="nam" placeholder='Enter Your Email' id="" required/>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <input className='border p-3 rounded-lg my-5' type="password" name="Confirm" placeholder='Enter Your confirm Password' id="" required/>
                    <input className='border p-3 btn' type="submit" value="Sign Up" />
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <button className='cursor-pointer'><FaGoogle /></button>
                    <button className='cursor-pointer'><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;