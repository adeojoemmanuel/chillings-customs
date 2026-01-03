import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'performance',
      title: 'Turbo Installation',
      description: 'Professional turbocharger installation and tuning for maximum power gains. We source premium turbos from international suppliers.',
      icon: '⚡',
      features: ['Custom turbo selection', 'Intercooler setup', 'ECU tuning', 'Dyno testing']
    },
    {
      id: 2,
      category: 'tires',
      title: 'Drift Tires & Wheels',
      description: 'Import specialized drift tires and custom wheels not available locally. We handle international ordering and customs.',
      icon: '🛞',
      features: ['Drift-specific tires', 'Custom wheel imports', 'Size matching', 'Installation']
    },
    {
      id: 3,
      category: 'performance',
      title: 'ECU Remapping',
      description: 'Advanced engine control unit tuning to optimize performance, fuel economy, and power output.',
      icon: '💻',
      features: ['Custom maps', 'Performance tuning', 'Economy optimization', 'Stage upgrades']
    },
    {
      id: 4,
      category: 'suspension',
      title: 'Coilover Systems',
      description: 'Import and install premium coilover suspension systems from top international brands.',
      icon: '🔧',
      features: ['Adjustable height', 'Damping control', 'Corner balancing', 'Alignment setup']
    },
    {
      id: 5,
      category: 'exhaust',
      title: 'Custom Exhaust Systems',
      description: 'Full custom exhaust fabrication including headers, downpipes, and cat-back systems.',
      icon: '🔊',
      features: ['Mandrel bending', 'Titanium options', 'Sound tuning', 'Performance gains']
    },
    {
      id: 6,
      category: 'body',
      title: 'Body Kits & Aero',
      description: 'Import and install custom body kits, widebody conversions, and aerodynamic components.',
      icon: '🎨',
      features: ['Widebody kits', 'Carbon fiber parts', 'Custom fabrication', 'Paint matching']
    },
    {
      id: 7,
      category: 'interior',
      title: 'Interior Customization',
      description: 'Complete interior makeovers with premium materials, racing seats, and custom upholstery.',
      icon: '🪑',
      features: ['Racing seats', 'Custom upholstery', 'Carbon trim', 'Audio systems']
    },
    {
      id: 8,
      category: 'brakes',
      title: 'Big Brake Kits',
      description: 'Import and install high-performance brake systems including calipers, rotors, and pads.',
      icon: '🛑',
      features: ['Multi-piston calipers', 'Slotted rotors', 'Performance pads', 'Brake lines']
    },
    {
      id: 9,
      category: 'engine',
      title: 'Engine Rebuilds',
      description: 'Complete engine overhauls with performance upgrades, forged internals, and blueprinting.',
      icon: '⚙️',
      features: ['Forged internals', 'Blueprinting', 'Balancing', 'Assembly']
    },
    {
      id: 10,
      category: 'cooling',
      title: 'Cooling Systems',
      description: 'Upgraded radiators, intercoolers, and oil coolers for optimal engine temperature management.',
      icon: '❄️',
      features: ['Aluminum radiators', 'Intercoolers', 'Oil coolers', 'Thermostats']
    },
    {
      id: 11,
      category: 'tires',
      title: 'Track & Performance Tires',
      description: 'Import high-performance track tires, semi-slicks, and racing compounds from international suppliers.',
      icon: '🏁',
      features: ['Semi-slick tires', 'Track compounds', 'Size availability', 'Bulk ordering']
    },
    {
      id: 12,
      category: 'performance',
      title: 'Nitrous Oxide Systems',
      description: 'Professional nitrous oxide installation with safety features and progressive controllers.',
      icon: '💨',
      features: ['Wet/Dry systems', 'Progressive controllers', 'Safety features', 'Tuning']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'performance', name: 'Performance' },
    { id: 'tires', name: 'Tires & Wheels' },
    { id: 'suspension', name: 'Suspension' },
    { id: 'body', name: 'Body & Aero' },
    { id: 'interior', name: 'Interior' },
    { id: 'brakes', name: 'Brakes' },
    { id: 'engine', name: 'Engine' },
    { id: 'cooling', name: 'Cooling' },
    { id: 'exhaust', name: 'Exhaust' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="services-title">Our Services & Modifications</h2>
        <p className="services-subtitle">
          Professional installations and international component sourcing
        </p>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-inquire-btn">Inquire Now</button>
            </div>
          ))}
        </div>

        <div className="services-note">
          <div className="note-icon">🌍</div>
          <div className="note-content">
            <h4>International Component Sourcing</h4>
            <p>
              Can't find specific parts in your region? We specialize in importing 
              hard-to-find components from international suppliers. Contact us with 
              your requirements and we'll source and import the parts you need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

