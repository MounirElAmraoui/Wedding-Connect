import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import './ExperienceCard.css';

const ExperienceCard = ({
  image,
  title,
  date,
  location,
  price,
  category,
  spots,
  description
}) => {
  return (
    <div className="experience-card">
      <div className="exp-image-wrapper">
        <img src={image} alt={title} className="exp-image" />
        <div className="exp-category">{category}</div>
        <div className="exp-overlay">
          <button className="exp-join-btn">Join Experience</button>
        </div>
      </div>
      
      <div className="exp-content">
        <h3 className="exp-title">{title}</h3>
        <p className="exp-description">{description}</p>
        
        <div className="exp-meta">
          <div className="exp-meta-item">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="exp-meta-item">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="exp-meta-item">
            <Users size={16} />
            <span>{spots} spots left</span>
          </div>
        </div>
        
        <div className="exp-footer">
          <div className="exp-price">
            <span className="price-label">From</span>
            <span className="price-value">{price}</span>
          </div>
          <button className="exp-details-btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;