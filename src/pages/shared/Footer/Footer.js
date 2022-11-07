import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Footer = () => {
    return (
        <div className="px-28 py-10 bg-base-200">
            <footer className="footer text-[#888888]">
            <div>
                <div className='flex gap-2 items-center mb-2'>
                    <img src={logo} alt="" />
                    <h3 className="text-[#2E2E2E] text-xl font-semibold">Grover</h3>
                </div>
                <p>Fast delivery, which is active all <br /> over the world, serves with many <br /> transportation vehicles.</p>
            </div> 
            <div>
                <span className="text-xl text-[#2E2E2E] font-semibold">Company</span> 
                <Link to='/'  className="link link-hover">AboutUs</Link> 
                <Link to='/'  className="link link-hover">Blog</Link> 
                <Link to='/'  className="link link-hover">All Products</Link> 
                <Link to='/'  className="link link-hover">Locations Map</Link>
            </div> 
            <div>
                <span className="text-xl text-[#2E2E2E] font-semibold">Services</span> 
                <Link to='/'  className="link link-hover">Order tracking</Link> 
                <Link to='/'  className="link link-hover">Wish List</Link> 
                <Link to='/'  className="link link-hover">My account</Link> 
                <Link to='/'  className="link link-hover">Terms & Conditions</Link>
            </div> 
            <div>
                <span className="text-xl text-[#2E2E2E] font-semibold">Get in Touch</span> 
                <p className=''>
                    Subscribe to our weekly <br /> Newsletter and receive <br /> updates via email.
                </p>
            </div>
    </footer>
            <hr className='mt-4' />
            <div className='flex justify-between text-[#8C8C8C] mt-3'>
                <div className="">
                    <p>All Rights Reserved @ SA 2022</p>
                </div>
                <div className="flex gap-4">
                    <Link to='/'>Terms & Conditions</Link>
                    <Link to='/'>Privacy & Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;