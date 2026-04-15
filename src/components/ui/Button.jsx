import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  fullWidth = false,
  icon: Icon,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const className = `btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`;
  
  return (
    <button 
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={18} className="btn-icon" />}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
};

export default Button;