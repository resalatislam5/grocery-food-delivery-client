import React, { useContext, } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';

const SignUp = () => {
    const {SignUpEmail,updateUserProfile} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name,password,confirm,email)
        if(password !== confirm){
            return toast.error('password not match')
        }
        SignUpEmail(email,password)
        .then(result =>{
            updateUserProfile(name)
            .then(() => {
                console.log('name')
             toast.success('Success')
              }).catch((error) => {
                console.log(error)
              });

        }).catch(error =>{
            const message = error.message;
            return toast.error(message)
        })
    }
    return (
        <div className='min-h-[50vh] mb-[2%]'>
            <div className=' w-96 border mx-auto h-[480px] mt-[3%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Sign Up</h2>
                <form onSubmit={handleSignUp} className='flex flex-col'>
                    <input className='border p-3  rounded-lg' type="text" name="name" placeholder='Enter Your Name' id="" required/>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <input className='border p-3 rounded-lg my-5' type="password" name="confirm" placeholder='Enter Your confirm Password' id="" required/>
                    <input className='border p-3 btn' type="submit" value="Register" />
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