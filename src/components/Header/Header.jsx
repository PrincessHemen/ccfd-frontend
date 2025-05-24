// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, useRef
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if menu is open
  const menuRef = useRef(null); // Ref for the menu container

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked (useful for mobile UX)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open and the click is outside the menu container, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Clean up event listener when menu is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function for useEffect
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <header className="header">
      <div className="header-logo">FraudGuard</div>

      {/* Hamburger Menu Icon (visible on small screens) */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation and overlay (conditionally rendered/styled based on isMenuOpen) */}
      <nav ref={menuRef} className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          {/* Add onClick={closeMenu} to each Link */}
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/docs" onClick={closeMenu}>Documentation</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About App</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;