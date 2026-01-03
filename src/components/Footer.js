import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Chilling Customs</h3>
            <p className="footer-description">
              Your trusted partner for automobile repairs and custom modifications.
              We bring your automotive vision to life with precision and passion.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p className="footer-info">Email: info@chillingcustoms.com</p>
            <p className="footer-info">Phone: (555) 123-4567</p>
            <p className="footer-info">Address: 123 Auto Street, Custom City</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">Hours</h4>
            <p className="footer-info">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="footer-info">Saturday: 9:00 AM - 4:00 PM</p>
            <p className="footer-info">Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Chilling Customs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

