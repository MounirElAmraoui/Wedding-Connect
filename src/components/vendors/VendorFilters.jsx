import React from 'react';
import { ChevronDown, DollarSign, MapPin, Star } from 'lucide-react';
import Button from '../ui/Button';
import './VendorFilters.css';

const VendorFilters = () => {
  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <h3>Filters</h3>
        <Button className="clear-btn">Clear All</Button>
      </div>
      
      <div className="filter-section">
        <h4>Price Range</h4>
        <div className="price-range">
          <input type="range" min="1000" max="50000" className="range-slider" />
          <div className="price-labels">
            <span>$1,000</span>
            <span>$50,000+</span>
          </div>
        </div>
      </div>
      
      <div className="filter-section">
        <h4>Categories</h4>
        <ul className="filter-list">
          {['Venues', 'Catering', 'Photography', 'Music & DJs', 'Florists', 'Decorators', 'Planners'].map((cat) => (
            <li key={cat} className="filter-item">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>{cat}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="filter-section">
        <h4>Rating</h4>
        <ul className="filter-list">
          {[5, 4, 3, 2, 1].map((stars) => (
            <li key={stars} className="filter-item">
              <label className="checkbox-label">
                <input type="checkbox" />
                <div className="rating-stars">
                  {Array.from({ length: stars }, (_, i) => (
                    <Star key={i} size={12} className="star" fill={i < stars ? "currentColor" : "none"} />
                  ))}
                </div>
                <span>{stars}+ Stars</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="filter-section">
        <h4>Location</h4>
        <div className="location-search">
          <MapPin size={16} />
          <input type="text" placeholder="Enter city or region" />
        </div>
      </div>
    </aside>
  );
};

export default VendorFilters;