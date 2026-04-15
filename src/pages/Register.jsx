import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Check, Heart } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState('couple');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic
  };

  return (
    <div className="auth-page">
      <div className="auth-container register">
        <div className="auth-image">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" alt="Wedding" />
          <div className="auth-overlay">
            <div className="auth-quote">
              <Heart size={32} className="quote-icon" />
              <h2>"Begin your forever today"</h2>
              <p>Create memories that will last a lifetime</p>
            </div>
          </div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-header">
            <h1>Create Account</h1>
            <p>Join our community of love and celebration</p>
          </div>
          
          <div className="account-type-selector">
            <button 
              className={`type-btn ${accountType === 'couple' ? 'active' : ''}`}
              onClick={() => setAccountType('couple')}
            >
              <User size={20} />
              <span>I'm a Couple</span>
              <small>Planning our wedding</small>
            </button>
            <button 
              className={`type-btn ${accountType === 'vendor' ? 'active' : ''}`}
              onClick={() => setAccountType('vendor')}
            >
              <Check size={20} />
              <span>I'm a Vendor</span>
              <small>Offering services</small>
            </button>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="name-row">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  required
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="terms-check">
              <label>
                <input type="checkbox" required />
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
              </label>
            </div>
            
            <button type="submit" className="auth-btn">
              Create Account <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="auth-divider">
            <span>Or sign up with</span>
          </div>
          
          <div className="social-auth">
            <button className="social-btn google">
              <img src="https://www.google.com/favicon.ico" alt="Google" />
              Google
            </button>
            <button className="social-btn facebook">
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />
              Facebook
            </button>
          </div>
          
          <p className="auth-footer">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;