import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1 className="about-title">About FraudGuard</h1>

        <div className="about-content">
          <p className="about-description">
            FraudGuard is an advanced web application designed to help businesses and individuals detect
            and prevent fraudulent activities within their transactional data. By leveraging machine
            learning models, FraudGuard provides a robust and intuitive platform for identifying suspicious patterns
            and anomalies in CSV datasets. Our mission is to empower users with the tools needed to safeguard their
            financial integrity and make informed decisions.
          </p>

          <h2 className="section-heading">Key Features:</h2>
          <ul className="feature-list">
            <li>
              <strong>Intelligent Fraud Detection:</strong> Utilizes sophisticated algorithms to analyze your data for
              potential fraud indicators.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> A clean and minimalistic design ensures a seamless user experience.
            </li>
            <li>
              <strong>CSV Upload & Processing:</strong> Easily upload your transactional data in CSV format for quick analysis.
            </li>
            <li>
              <strong>Easily Understandable Reports:</strong> Get clear, actionable insights into detected fraudulent transactions.
            </li>
            <li>
              <strong>Secure & Private:</strong> Your data is processed securely, with a strong emphasis on privacy.
            </li>
          </ul>

          <h2 className="section-heading">How to Use FraudGuard:</h2>
          <ul className="how-to-list">
            <li>
              <strong>Navigate to the "Upload CSV" Section:</strong> Click on the 'Get Started' button on our Home Page,
              find the dedicated upload area.
            </li>
            <li>
              <strong>Prepare Your Data:</strong> Ensure your transactional data is in a clean CSV format.
              Refer to our documentation for required column headers.
            </li>
            <li>
              <strong>Upload Your CSV File:</strong> Click the "Choose File" button and select your CSV.
              Once selected, click "Upload" to send your data to our secure backend.
            </li>
            <li>
              <strong>Process & Analyze:</strong> Our system will automatically process your data. Depending on the
              size, this may take a few moments. A loading indicator will keep you informed.
            </li>
            <li>
              <strong>View Results:</strong> Once the analysis is complete, you will be redirected to the "Results" section.
              Here, you can review a summary of detected fraudulent transactions and download detailed reports.
            </li>
            <li>
              <strong>Take Action:</strong> Use the insights provided by FraudGuard to investigate and mitigate potential fraud.
            </li>
          </ul>

          <p className="about-footer">
            For any further questions or support, please visit our <a href="#contact" className="contact-link">Contact Us</a> page.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
