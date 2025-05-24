import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-intro">
          We'd love to connect with you! If you have any questions about FraudGuard, collaboration opportunities,
          or just want to say hello, feel free to reach out through the following channels:
        </p>

        <div className="contact-links-group">
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/princess-hemen/" // REPLACE with your actual LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link linkedin"
          >
            LinkedIn
          </a>

          {/* Telegram Link */}
          <a
            href="https://t.me/p_d_hemen" // REPLACE with your actual Telegram username
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link telegram"
          >
            Telegram
          </a>

          {/* Gmail Link */}
          <a
            href="hemendprincess@gmail.com" // REPLACE with your actual Gmail address
            className="contact-link gmail"
          >
            Gmail
          </a>
        </div>

        <p className="contact-outro">
          We look forward to hearing from you!
        </p>
      </div>
    </section>
  )
}

export default Contact