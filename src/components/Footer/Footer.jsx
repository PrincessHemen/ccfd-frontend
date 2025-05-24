// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // Make sure this path is correct

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text copyright">
          &copy; {currentYear} FraudGuard. All rights reserved.
        </p>
        <p className="footer-text tagline">
          Built with <span className="love-icon">❤️</span> and <span className="coffee-icon">☕</span>
        </p>
        {/* You can add more links here if needed, e.g., Privacy Policy, Terms */}
        {/* <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <span className="footer-link-separator">|</span>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;