import React from 'react';
import {
    Link
} from "react-router-dom";
import logo from '../../img/coverpic.PNG';
import './header.css';

const Header = () => {
    return (
        <div>
            <div >
                <img className='img' src={logo} alt="" />
            </div>
            <div>
                <nav className='NavContainer' >
                    <Link className='Nav' to="/Home">Home</Link>
                    <Link className='Nav' to="/Service">Service</Link>
                    <Link className='Nav' to="/Career">Career</Link>
                    <Link className='Nav' to="/AboutUs">About Us</Link>
                </nav>
            </div>

        </div>
    );
};

export default Header; <h1>This is header</h1>