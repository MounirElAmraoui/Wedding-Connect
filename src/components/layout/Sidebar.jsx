import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import {
  Home,
  Compass,
  Users,
  Calendar,
  LayoutDashboard,
  Heart,
  MessageCircle,
  MapPin,
  TrendingUp,
  Star,
  Building2,
  Utensils,
  Camera,
  Music,
  Flower2,
  Palette,
  ClipboardList,
  User,
  Settings,
  LogOut,
  Trash2,
} from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {

  // 🔝 MAIN
  const mainMenu = [
    { label: "Home", href: "/", icon: <Home size={18} /> },
    { label: "Explore", href: "/explore", icon: <Compass size={18} /> },
    { label: "Vendors", href: "/vendors", icon: <Users size={18} /> },
    { label: "Experiences", href: "/experiences", icon: <Calendar size={18} /> },
  ];

  // 👤 USER
  const userMenu = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { label: "Bookings", href: "/bookings", icon: <Calendar size={18} /> },
    { label: "Favorites", href: "/favorites", icon: <Heart size={18} /> },
    { label: "Messages", href: "/messages", icon: <MessageCircle size={18} /> },
  ];

  // 🌍 DISCOVER
  const discoverMenu = [
    { label: "Destinations", href: "/destinations", icon: <MapPin size={18} /> },
    { label: "Trending", href: "/trending", icon: <TrendingUp size={18} /> },
    { label: "Top Vendors", href: "/top-vendors", icon: <Star size={18} /> },
  ];

  // 🎯 ACTIONS
  const actionButtons = [
    { label: "Become a Vendor", href: "/become-vendor", icon: <Users size={18} /> },
    { label: "Create Event", href: "/create-event", icon: <Calendar size={18} /> },
    { label: "My Favorites", href: "/favorites", icon: <Heart size={18} /> },
    { label: "My Bookings", href: "/bookings", icon: <Calendar size={18} /> },
  ];

  // 🎨 CATEGORIES
  const vendorCategories = [
    { label: "Venues", icon: <Building2 size={16} /> },
    { label: "Catering", icon: <Utensils size={16} /> },
    { label: "Photography", icon: <Camera size={16} /> },
    { label: "DJs", icon: <Music size={16} /> },
    { label: "Florists", icon: <Flower2 size={16} /> },
    { label: "Decorators", icon: <Palette size={16} /> },
    { label: "Planners", icon: <ClipboardList size={16} /> },
  ];

  // 👤 ACCOUNT
  const userCard = [
    { label: "Profile", href: "/profil", icon: <User size={16} /> },
    { label: "Settings", href: "/settings", icon: <Settings size={16} /> },
    { label: "Logout", href: "/login", icon: <LogOut size={16} /> },
    { label: "Delete Account", href: "/register", icon: <Trash2 size={16} /> },
  ];

  return (
    <>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* HEADER */}
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

          {/* USER PROFILE */}
          <Link className="user-section" to="/profil" onClick={onClose}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
              alt="User Avatar"
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">Guest User</span>
              <span className="user-role">Sign in to book</span>
            </div>
          </Link>

          {/* MAIN */}
          <div className="nav-section">
            <span className="section-label">MAIN</span>
            {mainMenu.map((item, i) => (
              <Link key={i} to={item.href} className="nav-link" onClick={onClose}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* USER */}
          <div className="nav-section">
            <span className="section-label">USER</span>
            {userMenu.map((item, i) => (
              <Link key={i} to={item.href} className="nav-link" onClick={onClose}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* DISCOVER */}
          <div className="nav-section">
            <span className="section-label">DISCOVER</span>
            {discoverMenu.map((item, i) => (
              <Link key={i} to={item.href} className="nav-link" onClick={onClose}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CATEGORIES */}
          <div className="nav-section">
            <span className="section-label">CATEGORIES</span>
            {vendorCategories.map((cat, i) => (
              <div key={i} className="nav-link">
                {cat.icon}
                <span>{cat.label}</span>
              </div>
            ))}
          </div>

          {/* ACTION BUTTONS */}
          <div className="nav-section actions">
            {actionButtons.map((btn, i) => (
              <Link className="nav-link" key={i} to={btn.href} onClick={onClose}>
                {btn.icon}
                <span>{btn.label}</span>
              </Link>
            ))}
          </div>

          {/* ACCOUNT */}
          <div className="nav-section">
            <span className="section-label">ACCOUNT</span>
            {userCard.map((item, i) => (
              <Link key={i} to={item.href} className="nav-link" onClick={onClose}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* FOOTER */}
          <div className="sidebar-footer">
            <button className="danger-btn">
              Supprimer le compte
            </button>
          </div>

        </nav>
      </aside>

      {/* OVERLAY */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;