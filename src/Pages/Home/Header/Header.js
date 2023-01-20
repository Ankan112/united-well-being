import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div>
                    <p className="normal-case text-xl">Sayesta Goswami, PhD</p>
                    <p className='text-md'>CLINICAL PSYCHOLOGISR</p>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Header;