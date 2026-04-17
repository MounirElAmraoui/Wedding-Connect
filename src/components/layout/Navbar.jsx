import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
          <NavLink to="/" className={activeClass} end>
            Home
          </NavLink>
          <NavLink to="/vendors" className={activeClass}>
            Vendors
          </NavLink>
          <NavLink to="/experiences" className={activeClass}>
            Experiences
          </NavLink>
          <NavLink to="/dashboard" className={activeClass}>
            Dashboard
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
