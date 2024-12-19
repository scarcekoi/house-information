import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>Hand-coded with <i className="fa-solid fa-heart" title="love"></i> by Thelonious</p>
    </div>
  );
};

export default Footer;