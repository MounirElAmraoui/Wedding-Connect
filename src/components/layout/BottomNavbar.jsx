import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import { Home, Users, Calendar, LayoutDashboard, User } from 'lucide-react';

const BottomNavbar = () => {
  const activeClass = ({ isActive }) => (isActive ? 'bottom-nav-link active' : 'bottom-nav-link');

  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar-container">
        <NavLink className='alink-nav' to="/" className={activeClass} end title="Home">
          <Home size={35} style={{  marginLeft:'40%' } }style={{margin:'15px'}}/>
          <span className="bottom-nav-label">Home</span>
        </NavLink>
        <NavLink className='alink-nav' to="/vendors" className={activeClass} title="Vendors">
          <Users size={35} style={{  marginLeft:'40%' } }style={{margin:'15px'}}/>
          <span className="bottom-nav-label">Vendors</span>
        </NavLink>
        <NavLink className='alink-nav' to="/experiences" className={activeClass} title="Experiences">
          <Calendar size={35} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label">Experiences</span>
        </NavLink>
        <NavLink className='alink-nav' to="/dashboard" className={activeClass} title="Dashboard">
          <LayoutDashboard size={35} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label">Dashboard</span>
        </NavLink>
        <NavLink className='alink-nav' to="/Profil" className={activeClass} title="Profile">
          <User size={35} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;
