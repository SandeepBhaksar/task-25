import React from 'react';
import './navbar.css';
import logo from '../../../public/deer-hunter-logo.jpg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="contents">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
      </div>
    </div>
  );
};

export default Navbar;
