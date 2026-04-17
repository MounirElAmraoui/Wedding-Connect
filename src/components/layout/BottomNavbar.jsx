import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import { Home, Users, Calendar, LayoutDashboard } from 'lucide-react';

const BottomNavbar = () => {
  const activeClass = ({ isActive }) => (isActive ? 'bottom-nav-link active' : 'bottom-nav-link');

  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar-container">
        <NavLink to="/" className={activeClass} end title="Home">
          <Home size={20} />
          <span className="bottom-nav-label">Home</span>
        </NavLink>
        <NavLink to="/vendors" className={activeClass} title="Vendors">
          <Users size={20} />
          <span className="bottom-nav-label">Vendors</span>
        </NavLink>
        <NavLink to="/experiences" className={activeClass} title="Experiences">
          <Calendar size={20} />
          <span className="bottom-nav-label">Experiences</span>
        </NavLink>
        <NavLink to="/dashboard" className={activeClass} title="Dashboard">
          <LayoutDashboard size={20} />
          <span className="bottom-nav-label">Dashboard</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;
