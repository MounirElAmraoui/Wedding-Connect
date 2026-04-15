import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">WC</span>
              <span>WeddingConnect</span>
            </div>
            <p className="footer-tagline">
              Creating unforgettable wedding experiences around the world
            </p>
            <div className="social-links">
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>For Couples</h4>
            <ul>
              <li><a href="#">How it Works</a></li>
              <li><a href="#">Browse Vendors</a></li>
              <li><a href="#">Wedding Experiences</a></li>
              <li><a href="#">Planning Tools</a></li>
              <li><a href="#">Real Weddings</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Vendors</h4>
            <ul>
              <li><a href="#">Join as Vendor</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Vendor Resources</a></li>
              <li><a href="#">Pricing Plans</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for wedding inspiration and exclusive offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 WeddingConnect. Made with ♥ for love</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;