import React from 'react';
import VendorFilters from '../components/vendors/VendorFilters';
import VendorGrid from '../components/vendors/VendorGrid';
import './Vendors.css';

const Vendors = () => {
  return (
    <div className="vendors-page">
      <div className="vendors-header">
        <div className="container">
          <h1>Wedding Vendors</h1>
          <p>Discover premium wedding professionals for your special day</p>
        </div>
      </div>
      
      <div className="vendors-content container">
        <VendorFilters />
        <VendorGrid />
      </div>
    </div>
  );
};

export default Vendors;