import React from 'react';
import { Star } from 'lucide-react';
import './Rating.css';

const Rating = ({ value = 5, reviews, showValue = true, size = 'medium' }) => {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} size={size === 'small' ? 14 : size === 'large' ? 20 : 16} className="star filled" fill="currentColor" />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<Star key={i} size={size === 'small' ? 14 : size === 'large' ? 20 : 16} className="star half" fill="currentColor" />);
    } else {
      stars.push(<Star key={i} size={size === 'small' ? 14 : size === 'large' ? 20 : 16} className="star" />);
    }
  }
  
  return (
    <div className="rating-container">
      <div className="stars">{stars}</div>
      {showValue && (
        <span className="rating-value">{value.toFixed(1)}</span>
      )}
      {reviews !== undefined && (
        <span className="rating-reviews">({reviews} reviews)</span>
      )}
    </div>
  );
};

export default Rating;