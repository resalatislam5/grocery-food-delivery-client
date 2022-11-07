import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaFacebook,FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider';
const Login = () => {
    const {LoginEmail} = useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email)
        LoginEmail(email,password)
        .then(result =>{
            toast.success('Login Successfully')

        }).catch(error =>{
            const message = error.message;
            return toast.error(message)
        })
    }
    return (
        <div className='min-h-[50vh]'>
            <div className=' w-96 border mx-auto h-96 mt-[5%] p-5'>
                <h2 className='text-center text-2xl font-bold mb-5'>Login</h2>
                <form onSubmit={handleLogin} className='flex flex-col'>
                    <input className='border p-3 my-5 rounded-lg' type="email" name="email" placeholder='Enter Your Email' id="" required/>
                    <input className='border p-3 rounded-lg' type="password" name="password" placeholder='Enter Your Password' id="" required/>
                    <button className='underline text-end mb-5 text-[#F86061]'>Forgotten password?</button>
                    <input className='border p-3 btn' type="submit" value="Login" />
                </form>
                <div className='flex justify-center mt-5 gap-5 text-3xl text-[#f75353]'>
                    <button className='cursor-pointer'><FaGoogle /></button>
                    <button className='cursor-pointer'><FaFacebook /></button>
                </div>
            </div>
        </div>
    );
};

export default Login;