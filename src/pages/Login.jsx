import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Heart, LogOut } from 'lucide-react';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({ email: '', password: '' });
    navigate('/');
  };

  if (isLoggedIn) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="logged-in-message">
            <h2>Welcome!</h2>
            <p>You are successfully logged in.</p>
            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              Logout & Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-image">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" alt="Wedding" />
          <div className="auth-overlay">
            <div className="auth-quote">
              <Heart size={32} className="quote-icon" />
              <h2 style={{color: 'red'}}>"Love is the greatest adventure"</h2>
              <p>Join us in creating unforgettable moments</p>
            </div>
          </div>
        </div>
        
        <div className="auth-form-container">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue your wedding journey</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-wrapper">
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
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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
            
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="auth-btn">
              Sign In <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="auth-divider">
            <span>Or continue with</span>
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
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
