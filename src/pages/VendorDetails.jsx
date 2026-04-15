import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Calendar, Heart, Share2, Check } from 'lucide-react';
import Rating from '../components/common/Rating';
import './VendorDetails.css';

const VendorDetails = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const vendor = {
    name: "The Royal Garden Estate",
    category: "Luxury Venue",
    rating: 4.9,
    reviews: 128,
    location: "Tuscany, Italy",
    price: "$15,000 - $25,000",
    description: "Nestled in the heart of Tuscany, The Royal Garden Estate offers an enchanting setting for your dream wedding. With centuries-old architecture, manicured gardens, and panoramic views of the rolling hills, we create magical experiences that last a lifetime.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
      "https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      "https://images.unsplash.com/photo-1520854221256-17451cc330e7?w=800"
    ],
    services: [
      "Exclusive venue access for 24 hours",
      "Bridal suite and groom's room",
      "On-site catering with custom menus",
      "Event coordination and planning",
      "Decorative lighting and sound system",
      "Valet parking for guests"
    ],
    amenities: [
      "Capacity: 200 guests",
      "Indoor and outdoor spaces",
      "Swimming pool access",
      "Luxury accommodation (10 rooms)",
      "Wine cellar tours",
      "Helicopter landing pad"
    ]
  };

  return (
    <div className="vendor-details-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span>Vendors</span> / <span>Venues</span> / <span className="current">{vendor.name}</span>
        </div>

        {/* Image Gallery */}
        <div className="gallery-section">
          <div className="main-image">
            <img src={vendor.images[activeImage]} alt={vendor.name} />
            <button className="favorite-btn">
              <Heart size={24} />
            </button>
            <button className="share-btn">
              <Share2 size={24} />
            </button>
          </div>
          <div className="thumbnail-grid">
            {vendor.images.map((img, index) => (
              <div 
                key={index} 
                className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`View ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="details-grid">
          <div className="details-main">
            <div className="vendor-header">
              <div>
                <span className="category-badge">{vendor.category}</span>
                <h1>{vendor.name}</h1>
                <div className="vendor-meta">
                  <Rating value={vendor.rating} reviews={vendor.reviews} size="large" />
                  <span className="dot-separator">•</span>
                  <div className="location">
                    <MapPin size={18} />
                    <span>{vendor.location}</span>
                  </div>
                </div>
              </div>
              <div className="price-tag">
                <span className="label">Starting from</span>
                <span className="value">{vendor.price}</span>
              </div>
            </div>

            <div className="section-divider" />

            <div className="description-section">
              <h2>About This Venue</h2>
              <p>{vendor.description}</p>
            </div>

            <div className="section-divider" />

            <div className="services-section">
              <h2>What's Included</h2>
              <div className="services-grid">
                {vendor.services.map((service, index) => (
                  <div key={index} className="service-item">
                    <Check size={20} className="check-icon" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-divider" />

            <div className="amenities-section">
              <h2>Amenities</h2>
              <div className="amenities-grid">
                {vendor.amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item">
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="booking-card">
            <div className="booking-header">
              <h3>Book This Venue</h3>
              <p>Check availability and pricing</p>
            </div>
            
            <div className="booking-form">
              <div className="form-group">
                <label>Event Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} />
                  <input type="date" placeholder="Select date" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Number of Guests</label>
                <select>
                  <option>50-100 guests</option>
                  <option>100-150 guests</option>
                  <option>150-200 guests</option>
                  <option>200+ guests</option>
                </select>
              </div>

              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <div className="input-with-icon">
                  <Phone size={18} />
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <button className="inquiry-btn">
                Send Inquiry
              </button>
              
              <p className="booking-note">
                <Check size={14} /> Free cancellation within 48 hours
              </p>
            </div>

            <div className="contact-direct">
              <h4>Or Contact Directly</h4>
              <a href="mailto:contact@royalgarden.com" className="contact-link">
                <Mail size={18} />
                contact@royalgarden.com
              </a>
              <a href="tel:+1234567890" className="contact-link">
                <Phone size={18} />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;