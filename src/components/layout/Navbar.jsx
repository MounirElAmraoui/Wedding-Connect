import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Home, Users, Calendar, LayoutDashboard, Compass } from 'lucide-react';

const Navbar = ({ onMenuToggle, isSidebarOpen }) => {
  const activeClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="navbar">
      <div className="navbar-container">
        <button className="menu-btn" onClick={onMenuToggle} aria-label="Toggle menu">
          {isSidebarOpen ? '✕' : '☰'}
        </button>

        <NavLink to="/" className="logo">
          <span className="logo-icon">WC</span>
          <span className="logo-text">WeddingConnect</span>
        </NavLink>

        <nav className="navbar-nav">
          <NavLink to="/" className={activeClass} end title="Home">
            <Home size={20} />
            <span className="nav-label">Home</span>
          </NavLink>
          <NavLink to="/explore" className={activeClass} title="Explore">
            <Compass size={20} />
            <span className="nav-label">Explore</span>
          </NavLink>
          <NavLink to="/vendors" className={activeClass} title="Vendors">
            <Users size={20} />
            <span className="nav-label">Vendors</span>
          </NavLink>
          <NavLink to="/experiences" className={activeClass} title="Experiences">
            <Calendar size={20} />
            <span className="nav-label">Experiences</span>
          </NavLink>
          <NavLink to="/dashboard" className={activeClass} title="Dashboard">
            <LayoutDashboard size={20} />
            <span className="nav-label">Dashboard</span>
          </NavLink>
        </nav>

        <div className="nav-actions">
          <NavLink to="/login" className="nav-btn">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-btn primary">
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
