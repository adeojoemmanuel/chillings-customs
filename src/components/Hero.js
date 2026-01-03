import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Car modification images - replace with your actual images
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1920&h=1080&fit=crop',
      alt: 'Modified TRX'
    },
    {
      url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1920&h=1080&fit=crop',
      alt: 'BMW Drift Modification'
    },
    {
      url: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1920&h=1080&fit=crop',
      alt: 'Custom Modified Car'
    },
    {
      url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&h=1080&fit=crop',
      alt: 'High Performance Modification'
    },
    {
      url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1920&h=1080&fit=crop',
      alt: 'Racing Modification'
    },
    {
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop',
      alt: 'Custom Body Modification'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-carousel">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
          />
        ))}
        <div className="carousel-overlay"></div>
      </div>
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
        <div className="hero-buttons">
          <a href="#services" className="cta-button primary">
            Our Services
          </a>
          <a href="#gallery" className="cta-button secondary">
            View Our Work
          </a>
        </div>
      </div>
      <div className="carousel-indicators">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

