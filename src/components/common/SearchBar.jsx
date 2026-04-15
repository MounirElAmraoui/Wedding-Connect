import React from 'react';
import { Search, MapPin, Calendar, DollarSign } from 'lucide-react';
import './SearchBar.css';

const SearchBar = ({ variant = 'hero' }) => {
  return (
    <div className={`searchbar ${variant}`}>
      <div className="searchbar-container">
        <div className="search-field">
          <MapPin size={20} className="field-icon" />
          <input 
            type="text" 
            placeholder="Where is your wedding?"
            className="search-input"
          />
        </div>
        
        <div className="search-divider" />
        
        <div className="search-field">
          <Calendar size={20} className="field-icon" />
          <select className="search-select">
            <option>All Categories</option>
            <option>Venues</option>
            <option>Catering</option>
            <option>Photography</option>
            <option>Music</option>
          </select>
        </div>
        
        <div className="search-divider" />
        
        <div className="search-field">
          <DollarSign size={20} className="field-icon" />
          <select className="search-select">
            <option>Any Budget</option>
            <option>$5,000 - $10,000</option>
            <option>$10,000 - $25,000</option>
            <option>$25,000 - $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
        
        <button className="search-btn">
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;