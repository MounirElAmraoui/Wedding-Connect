import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Vendors', href: '/vendors' },
    { label: 'Experiences', href: '/experiences' },
    { label: 'Destinations', href: '#' },
    { label: 'Favorites', href: '#' },
  ];

  const vendorCategories = [
    'Venues', 'Catering', 'Photography', 
    'Music & DJs', 'Florists', 'Decorators', 'Planners'
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">WC</span>
            <span>WeddingConnect</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <span className="section-label">Main Menu</span>
            <ul className="nav-list">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a href={item.href} className="nav-link">
                    <span className="nav-icon">•</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="nav-section">
            <span className="section-label">Categories</span>
            <ul className="nav-list categories">
              {vendorCategories.map((cat, index) => (
                <li key={index} className="nav-item category">
                  <a href="#" className="nav-link">
                    <span className="nav-icon">•</span>
                    <span>{cat}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-footer">
            <button className="sidebar-btn">
              Become a Vendor
            </button>
            <div className="user-section">
              <div className="user-avatar">G</div>
              <div className="user-info">
                <span className="user-name">Guest User</span>
                <span className="user-role">Sign in to book</span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
      
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
};

export default Sidebar;