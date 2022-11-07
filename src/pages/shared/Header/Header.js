import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div className="navbar bg-base-100 px-28 py-7">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link className='hover:text-[#F55253] font-semibold' to='/' >Home</Link></li>
                    <li><Link className='hover:text-[#F55253] font-semibold' to='/services' >Service</Link></li>
                    <li><Link className='hover:text-[#F55253] font-semibold' to='/shop' >Shop</Link></li>
                    <li><Link className='hover:text-[#F55253] font-semibold' to='/blog' >blog</Link></li>
                </ul>
                </div>
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                <li><Link className='hover:text-[#F55253] font-semibold' to='/' >Home</Link></li>
                <li><Link className='hover:text-[#F55253] font-semibold' to='/services' >Service</Link></li>
                <li><Link className='hover:text-[#F55253] font-semibold' to='/shop' >Shop</Link></li>
                <li><Link className='hover:text-[#F55253] font-semibold' to='/blog' >blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'  className='mr-5 text-[#0F1B4C] font-semibold'>Login</Link>
                <Link to='/signup'  className="btn">Register</Link>
            </div>
            </div>
    );
};

export default Header;