import React, { useState } from 'react';
import '../assets/css/Navbar.css'; // Import your CSS file for styling
import logo from '../assets/images/logo 1.png'
import { FaTools } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src={logo} />
                </div>
                <div className={`navbarf ${isOpen ? 'navbar-links active' : 'navbar-links'}`}>
                    <a href="#">
                        <i class="fa fa-home"></i>
                    </a>
                    <a href="#">
                        <FaTools />
                    </a>
                    <a href="#">
                        <i class="fa fa-bell"></i>
                    </a>
                    <button className='profile_round'>
                          
                    </button>
                    <button className='morebtn'>
                        <BsThreeDotsVertical/>
                    </button>

                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
