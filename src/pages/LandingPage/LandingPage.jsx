// src/pages/LandingPage/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './LandingPage.css'; // Make sure this path is correct

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    navigate('/upload'); // Navigate to the upload page
  };

  return (
    <section className="landing-section">
      <div className="landing-container">
        {/* Your SVG Logo */}
        {/* Place your 'fraudguard-logo.svg' file in the 'public/' folder */}
        <img
          src="/security.svg" // Path to your SVG logo in the public folder
          alt="FraudGuard Logo (thanks, Freepik)"
          className="landing-logo"
        />

        <div className="header-logo">FraudGuard</div>

        {/* Short Write-up */}
        <h1 className="landing-title">Your Vigilant Shield Against Financial Deception.</h1>
        <p className="landing-description">
          Upload your transaction data, and our model will swiftly identify suspicious patterns,
          empowering you to protect your assets with confidence.
        </p>

        {/* Get Started Button */}
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default LandingPage;