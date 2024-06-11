import React, { useState } from 'react';
import '../assets/css/Navbar.css'; // Import your CSS file for styling
import logo from '../assets/images/logo 1.png';
import { FaTools } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleMoreDropdown = () => {
        setIsMoreOpen(!isMoreOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src={logo} alt="Logo" />
                </div>
                <div className={`navbarf ${isOpen ? 'navbar-links active' : 'navbar-links'}`}>
                    <a href="#">
                        <i className="fa fa-home"></i>
                    </a>
                    <a href="#">
                        <FaTools />
                    </a>
                    <a href="#">
                        <i className="fa fa-bell"></i>
                    </a>
                    <div className="profile-container">
                        <button className='profile_round' onClick={toggleProfileDropdown}>
                            <FaUser/>
                        </button>
                        {/* {isProfileOpen && (
                            <div className="dropdown">
                                <a className='dropdownlinks' href="#">Profile</a>
                                <a className='dropdownlinks' href="#">Settings</a>
                                <a className='dropdownlinks' href="#">Logout</a>
                            </div>
                        )} */}
                    </div>
                    <div className="more-container">
                        <button className='morebtn' onClick={toggleMoreDropdown}>
                            <BsThreeDotsVertical />
                        </button>
                        {isMoreOpen && (
                            <div className="dropdown">
                                <a className='dropdownlinks' href="#">Settings</a>
                                <a className='dropdownlinks' href="#">Tasks</a>
                             </div>
                        )}
                    </div>
                </div>
                <div className="navbar-toggle" onClick={toggleNavbar}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
