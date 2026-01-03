import React from 'react';
import './Header.css';
import logo from '../assets/chilling.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Chilling Customs Logo" className="logo" />
          <span className="brand-name">Customs</span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

