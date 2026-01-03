import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder data - replace with actual images
  const galleryItems = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      title: 'Classic Muscle Car Restoration',
      description: 'Complete body restoration and engine rebuild'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop',
      title: 'Custom Paint Job',
      description: 'Full custom paint with metallic finish'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      title: 'Engine Modification',
      description: 'Performance upgrade and tuning'
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      title: 'Interior Customization',
      description: 'Complete interior redesign with premium materials'
    },
    {
      id: 5,
      before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop',
      title: 'Body Kit Installation',
      description: 'Custom body kit and aerodynamic modifications'
    },
    {
      id: 6,
      before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop',
      title: 'Wheel & Suspension Upgrade',
      description: 'Custom wheels and lowered suspension system'
    }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Work</h2>
        <p className="gallery-subtitle">
          Before & After Transformations
        </p>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openModal(item)}
            >
              <div className="image-comparison">
                <div className="image-wrapper before">
                  <img src={item.before} alt={`${item.title} - Before`} />
                  <div className="image-label">Before</div>
                </div>
                <div className="image-wrapper after">
                  <img src={item.after} alt={`${item.title} - After`} />
                  <div className="image-label">After</div>
                </div>
              </div>
              <div className="gallery-item-info">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedImage.title}</h3>
            <p className="modal-description">{selectedImage.description}</p>
            <div className="modal-images">
              <div className="modal-image-wrapper">
                <img src={selectedImage.before} alt="Before" />
                <div className="modal-label">Before</div>
              </div>
              <div className="modal-image-wrapper">
                <img src={selectedImage.after} alt="After" />
                <div className="modal-label">After</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

