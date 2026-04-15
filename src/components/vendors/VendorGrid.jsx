import React from 'react';
import { VendorCard } from '../ui/Card';
import Button from '../ui/Button';
import './VendorGrid.css';

const mockVendors = [
  {
    id: 1,
    name: "The Royal Garden Estate",
    category: "Venues",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    rating: 4.9,
    reviews: 128,
    location: "Tuscany, Italy",
    price: "$15,000",
    priceUnit: "event"
  },
  {
    id: 2,
    name: "Elegant Affairs Catering",
    category: "Catering",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800",
    rating: 4.8,
    reviews: 96,
    location: "Paris, France",
    price: "$8,500",
    priceUnit: "service"
  },
  {
    id: 3,
    name: "Lumière Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    rating: 5.0,
    reviews: 234,
    location: "Santorini, Greece",
    price: "$5,500",
    priceUnit: "package"
  },
  {
    id: 4,
    name: "Harmony DJs & Entertainment",
    category: "Music",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=800",
    rating: 4.7,
    reviews: 89,
    location: "Miami, USA",
    price: "$3,200",
    priceUnit: "event"
  },
  {
    id: 5,
    name: "Blooming Dreams Florist",
    category: "Florists",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800",
    rating: 4.9,
    reviews: 156,
    location: "Kyoto, Japan",
    price: "$4,800",
    priceUnit: "arrangement"
  },
  {
    id: 6,
    name: "Crystal Palace Decor",
    category: "Decorators",
    image: "https://images.unsplash.com/photo-1478146896981-b80c46339d41?w=800",
    rating: 4.6,
    reviews: 78,
    location: "Dubai, UAE",
    price: "$12,000",
    priceUnit: "event"
  }
];

const VendorGrid = () => {
  return (
    <div className="vendor-grid">
      <div className="grid-header">
        <h2>Popular Vendors</h2>
        <p>Discover our most loved wedding professionals</p>
      </div>
      
      <div className="grid-container">
        {mockVendors.map((vendor) => (
          <VendorCard key={vendor.id} {...vendor} />
        ))}
      </div>
      
      <div className="grid-footer">
        <Button className="load-more-btn">Load More Vendors</Button>
      </div>
    </div>
  );
};

export default VendorGrid;