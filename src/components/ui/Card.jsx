import React from 'react';
import { Star, MapPin, Heart } from 'lucide-react';
import './Card.css';

export const VendorCard = ({ 
  image, 
  name, 
  category, 
  rating, 
  reviews, 
  location, 
  price,
  priceUnit = 'starting at',
  onFavorite,
  mini = false
}) => {
  if (mini) {
    return (
      <div className="vendor-card mini">
        <div className="mini-image">
          <img src={image} alt={name} />
        </div>
        <div className="mini-content">
          <h4>{name}</h4>
          <span className="mini-category">{category}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="vendor-card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} className="card-image" />
        <button className="favorite-btn" onClick={onFavorite}>
          <Heart size={18} />
        </button>
        <div className="card-badge">{category}</div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        
        <div className="card-meta">
          <div className="rating">
            <Star size={16} className="star-icon" fill="currentColor" />
            <span className="rating-value">{rating}</span>
            <span className="reviews">({reviews} reviews)</span>
          </div>
          
          <div className="location">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="price">
            <span className="price-label">{priceUnit}</span>
            <span className="price-value">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ExperienceCard = ({
  image,
  title,
  date,
  location,
  price,
  category,
  spots
}) => {
  return (
    <div className="experience-card">
      <div className="exp-image-wrapper">
        <img src={image} alt={title} className="exp-image" />
        <div className="exp-category">{category}</div>
      </div>
      
      <div className="exp-content">
        <h3 className="exp-title">{title}</h3>
        
        <div className="exp-details">
          <div className="exp-detail">
            <span className="label">Date</span>
            <span className="value">{date}</span>
          </div>
          <div className="exp-detail">
            <span className="label">Location</span>
            <span className="value">{location}</span>
          </div>
          <div className="exp-detail">
            <span className="label">Available Spots</span>
            <span className="value">{spots} remaining</span>
          </div>
        </div>
        
        <div className="exp-footer">
          <div className="exp-price">{price}</div>
          <button className="exp-btn">Join Experience</button>
        </div>
      </div>
    </div>
  );
};