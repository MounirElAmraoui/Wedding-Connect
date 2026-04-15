import React from 'react';

const VendorCard = ({ vendor }) => {
  return (
    <div className="vendor-card">
      <h3>{vendor.name}</h3>
      <p>{vendor.description}</p>
    </div>
  );
};

export default VendorCard;