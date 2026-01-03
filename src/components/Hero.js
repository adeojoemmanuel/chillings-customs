import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Chilling Customs</h1>
        <p className="hero-subtitle">
          Where Precision Meets Passion in Automobile Excellence
        </p>
        <p className="hero-description">
          We specialize in professional repairs, custom modifications, and 
          transforming your vehicle into a masterpiece. From engine work to 
          body modifications, we bring your automotive dreams to life.
        </p>
        <a href="#gallery" className="cta-button">
          View Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;

