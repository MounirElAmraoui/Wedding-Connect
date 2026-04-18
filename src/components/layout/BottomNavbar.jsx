import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNavbar.css';
import { Home, Users, Calendar, LayoutDashboard, User ,MessagesSquare } from 'lucide-react';
import Messages from '../../pages/Messages';

const BottomNavbar = () => {
  const activeClass = ({ isActive }) => (isActive ? 'bottom-nav-link active' : 'bottom-nav-link');

  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar-container">
        <NavLink id='home ' className='alink-nav' to="/" className={activeClass} end title="Home">
          <Home size={25} style={{  marginLeft:'40%' } }style={{margin:'15px'}}/>
          <span className="bottom-nav-label"></span>
        </NavLink>
        <NavLink className='alink-nav' to="/vendors" className={activeClass} title="Vendors">
          <Users size={25} style={{  marginLeft:'40%' } }style={{margin:'15px'}}/>
          <span className="bottom-nav-label"></span>
        </NavLink>
        <NavLink className='alink-nav' to="/messages" className={activeClass} title="Experiences">
          <MessagesSquare size={25} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label"></span>
        </NavLink>
        <NavLink className='alink-nav' to="/dashboard" className={activeClass} title="Dashboard">
          <LayoutDashboard size={25} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label"></span>
        </NavLink>
        <NavLink className='alink-nav' to="/Profil" className={activeClass} title="Profile">
          <User size={25} style={{  marginLeft:'40%' }} style={{margin:'15px'}}/>
          <span className="bottom-nav-label"></span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;
