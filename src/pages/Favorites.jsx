import React, { useState } from "react";
import "./Favorites.css";
import { Heart, Trash2, Star, MapPin, Users, Camera } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      type: "vendor",
      name: "Luxury Events Studio",
      category: "Venue",
      location: "New York, NY",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1519167758993-440ea95c7ecc?w=400",
      price: "$500 - $2000",
    },
    {
      id: 2,
      type: "experience",
      name: "Garden Wedding Setup",
      category: "Decoration",
      location: "California",
      rating: 4.7,
      reviews: 95,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400",
      price: "$300 - $800",
    },
    {
      id: 3,
      type: "vendor",
      name: "Professional Photography",
      category: "Photography",
      location: "Miami, FL",
      rating: 5.0,
      reviews: 240,
      image: "https://images.unsplash.com/photo-1604017992615-fac2c2fd7d4a?w=400",
      price: "$400 - $1500",
    },
    {
      id: 4,
      type: "experience",
      name: "Gourmet Catering Services",
      category: "Catering",
      location: "Chicago, IL",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561681?w=400",
      price: "$50 - $150 per person",
    },
  ]);

  const handleRemove = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const vendorCount = favorites.filter((f) => f.type === "vendor").length;
  const experienceCount = favorites.filter((f) => f.type === "experience").length;

  return (
    <div className="favorites-container">
      {/* HEADER */}
      <div className="favorites-header">
        <div className="header-content">
          <div className="header-icon">
            <Heart size={40} fill="currentColor" />
          </div>
          <div>
            <h1>My Favorites</h1>
            <p>You have {favorites.length} saved items</p>
          </div>
        </div>
      </div>

      {/* STATS */}
      {favorites.length > 0 && (
        <div className="favorites-stats">
          <div className="stat-card">
            <Users size={24} />
            <div>
              <span className="stat-number">{vendorCount}</span>
              <span className="stat-label">Vendors</span>
            </div>
          </div>
          <div className="stat-card">
            <Camera size={24} />
            <div>
              <span className="stat-number">{experienceCount}</span>
              <span className="stat-label">Experiences</span>
            </div>
          </div>
        </div>
      )}

      {/* FAVORITES GRID */}
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-card">
              {/* IMAGE */}
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                <div className="card-badge">{item.type === "vendor" ? "Vendor" : "Experience"}</div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                  title="Remove from favorites"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="card-content">
                <div className="card-category">{item.category}</div>
                <h3>{item.name}</h3>

                {/* LOCATION */}
                <div className="card-location">
                  <MapPin size={16} />
                  <span>{item.location}</span>
                </div>

                {/* RATING */}
                <div className="card-rating">
                  <div className="stars">
                    <Star size={16} fill="currentColor" />
                    <span className="rating-number">{item.rating}</span>
                  </div>
                  <span className="reviews">({item.reviews} reviews)</span>
                </div>

                {/* PRICE */}
                <div className="card-price">{item.price}</div>

                {/* ACTIONS */}
                <div className="card-actions">
                  <button className="btn-view">View Details</button>
                  <button
                    className="btn-remove"
                    onClick={() => handleRemove(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* EMPTY STATE */
        <div className="empty-state">
          <div className="empty-icon">
            <Heart size={60} />
          </div>
          <h2>No Favorites Yet</h2>
          <p>Start saving your favorite vendors and experiences to see them here!</p>
          <button className="btn-explore">Explore Now</button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
