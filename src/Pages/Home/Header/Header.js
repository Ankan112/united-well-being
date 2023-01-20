import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ backgroundColor: '#E7E6E4' }}>
            <div className="navbar w-11/12 mx-auto">
                <div className="md:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About Me</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="flex-1 ">
                        <div style={{ color: '#6D2E46' }}>
                            <p className="normal-case text-2xl">Sayesta Goswami, PhD</p>
                            <p className='text-sm'>CLINICAL PSYCHOLOGISR</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li className='mx-8'><Link to='/about'>About Me</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>

                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;