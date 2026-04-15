import React, { useState } from 'react';
import { 
  User, Heart, Calendar, Settings, Package, 
  TrendingUp, DollarSign, Star, MapPin, Clock 
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for vendor
  const isVendor = true;
  
  const stats = [
    { icon: DollarSign, label: 'Total Earnings', value: '$45,250', change: '+12%' },
    { icon: Calendar, label: 'Bookings', value: '28', change: '+5' },
    { icon: Star, label: 'Rating', value: '4.9', change: '+0.2' },
    { icon: TrendingUp, label: 'Views', value: '1.2K', change: '+18%' }
  ];

  const bookings = [
    { id: 1, couple: 'Sarah & Mike', date: '2024-06-15', status: 'Confirmed', amount: '$12,000' },
    { id: 2, couple: 'Emma & James', date: '2024-07-22', status: 'Pending', amount: '$8,500' },
    { id: 3, couple: 'Lisa & David', date: '2024-08-10', status: 'Completed', amount: '$15,000' }
  ];

  const favorites = [
    { id: 1, name: 'The Royal Garden', category: 'Venue', location: 'Tuscany', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400' },
    { id: 2, name: 'Elegant Catering', category: 'Catering', location: 'Paris', image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="tab-content">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon-wrapper">
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-info">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-change positive">{stat.change}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="dashboard-section">
              <h3>Recent Bookings</h3>
              <div className="bookings-list">
                {bookings.map(booking => (
                  <div key={booking.id} className="booking-item">
                    <div className="booking-info">
                      <div className="booking-couple">{booking.couple}</div>
                      <div className="booking-date">
                        <Calendar size={14} /> {booking.date}
                      </div>
                    </div>
                    <div className="booking-status">
                      <span className={`status-badge ${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                      <span className="booking-amount">{booking.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
        
      case 'bookings':
        return (
          <div className="tab-content">
            <h3>All Bookings</h3>
            <div className="bookings-table">
              <div className="table-header">
                <span>Couple</span>
                <span>Date</span>
                <span>Status</span>
                <span>Amount</span>
              </div>
              {bookings.map(booking => (
                <div key={booking.id} className="table-row">
                  <span>{booking.couple}</span>
                  <span>{booking.date}</span>
                  <span className={`status-badge ${booking.status.toLowerCase()}`}>
                    {booking.status}
                  </span>
                  <span>{booking.amount}</span>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'favorites':
        return (
          <div className="tab-content">
            <h3>Saved Favorites</h3>
            <div className="favorites-grid">
              {favorites.map(item => (
                <div key={item.id} className="favorite-card">
                  <img src={item.image} alt={item.name} />
                  <div className="favorite-info">
                    <h4>{item.name}</h4>
                    <span className="category">{item.category}</span>
                    <span className="location"><MapPin size={14} /> {item.location}</span>
                  </div>
                  <button className="remove-btn">×</button>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'settings':
        return (
          <div className="tab-content">
            <h3>Account Settings</h3>
            <form className="settings-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" defaultValue="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" defaultValue="Doe" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" defaultValue="+1 234 567 890" />
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-sidebar">
        <div className="user-profile">
          <div className="avatar">
            <User size={32} />
          </div>
          <div className="user-info">
            <h3>John Doe</h3>
            <span>{isVendor ? 'Vendor' : 'Couple'}</span>
          </div>
        </div>
        
        <nav className="dashboard-nav">
          <button 
            className={activeTab === 'overview' ? 'active' : ''}
            onClick={() => setActiveTab('overview')}
          >
            <TrendingUp size={20} /> Overview
          </button>
          <button 
            className={activeTab === 'bookings' ? 'active' : ''}
            onClick={() => setActiveTab('bookings')}
          >
            <Calendar size={20} /> Bookings
          </button>
          <button 
            className={activeTab === 'favorites' ? 'active' : ''}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart size={20} /> Favorites
          </button>
          {isVendor && (
            <button 
              className={activeTab === 'services' ? 'active' : ''}
              onClick={() => setActiveTab('services')}
            >
              <Package size={20} /> My Services
            </button>
          )}
          <button 
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="notification-btn">
              <Clock size={20} />
            </button>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;