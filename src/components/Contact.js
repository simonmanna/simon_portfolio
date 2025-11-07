// ========================================
// File: ../components/Contact.js (New)
// ========================================

"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaTelegram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          {/* Header */}
          <div className="contact-header">
            <div className="badge">
              <FaEnvelope />
              Get In Touch
            </div>
            <h2 className="section-title">Start Your Coffee Journey</h2>
            <p className="section-subtitle">
              Ready to experience premium Ugandan coffee? Contact us for wholesale pricing, 
              samples, or partnership opportunities.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>Kampala, Uganda<br />East Africa</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Phone & WhatsApp</h4>
                  <p>+256 XXX XXX XXX<br />Available 24/7 for urgent inquiries</p>
                  <div className="chat-buttons">
                    <button className="chat-btn whatsapp">
                      <FaWhatsapp />
                      WhatsApp
                    </button>
                    <button className="chat-btn telegram">
                      <FaTelegram />
                      Telegram
                    </button>
                  </div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>sales@ugandagoldbeans.com<br />info@ugandagoldbeans.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:00 - 18:00<br />Saturday: 9:00 - 14:00<br />EAT (UTC+3)</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="contact-stats">
                <div className="contact-stat">
                  <div className="stat-number">2-4</div>
                  <div className="stat-label">Hours Response Time</div>
                </div>
                <div className="contact-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Urgent Support</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company or roastery"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Primary Interest *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="green-beans">Green Coffee Beans</option>
                    <option value="roasted-coffee">Roasted Coffee</option>
                    <option value="specialty-blends">Specialty Blends</option>
                    <option value="wholesale">Wholesale Partnership</option>
                    <option value="private-label">Private Label</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your coffee needs, quantity requirements, and any specific preferences..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <FaEnvelope />
                  Send Message
                  <div className="btn-shine"></div>
                </button>

                <p className="form-note">
                  We typically respond within 2-4 hours during business hours. 
                  For urgent matters, please call or use WhatsApp.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--white) 0%, var(--light-gray) 100%);
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--earth-green);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 3rem;
          color: var(--dark-charcoal);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--medium-gray);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }

        /* Contact Information */
        .contact-info {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: var(--shadow-float);
          height: fit-content;
        }

        .contact-info h3 {
          font-size: 1.5rem;
          color: var(--uganda-black);
          margin-bottom: 2rem;
          text-align: center;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          align-items: flex-start;
        }

        .info-icon {
          background: var(--uganda-red);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .info-content h4 {
          color: var(--uganda-black);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .info-content p {
          color: var(--medium-gray);
          line-height: 1.5;
        }

        .chat-buttons {
          display: flex;
          gap: 0.8rem;
          margin-top: 0.8rem;
        }

        .chat-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border: none;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .chat-btn.whatsapp {
          background: #25D366;
          color: white;
        }

        .chat-btn.telegram {
          background: #0088cc;
          color: white;
        }

        .chat-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-medium);
        }

        .contact-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--light-gray);
        }

        .contact-stat {
          text-align: center;
          padding: 1rem;
          background: var(--light-cream);
          border-radius: 10px;
        }

        .contact-stat .stat-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--earth-green);
          margin-bottom: 0.3rem;
        }

        .contact-stat .stat-label {
          font-size: 0.8rem;
          color: var(--medium-gray);
          font-weight: 600;
        }

        /* Contact Form */
        .contact-form-container {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: var(--shadow-float);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 600;
          color: var(--uganda-black);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid var(--light-gray);
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--uganda-red);
          box-shadow: 0 0 0 3px rgba(217, 0, 0, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          background: var(--uganda-red);
          color: white;
          border: none;
          padding: 1.2rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
          position: relative;
          overflow: hidden;
        }

        .submit-btn:hover {
          background: #b30000;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(217, 0, 0, 0.3);
        }

        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: 0.5s;
        }

        .submit-btn:hover .btn-shine {
          left: 100%;
        }

        .form-note {
          text-align: center;
          color: var(--medium-gray);
          font-size: 0.9rem;
          line-height: 1.4;
          margin-top: 1rem;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .contact-info,
          .contact-form-container {
            padding: 2rem;
          }

          .chat-buttons {
            flex-direction: column;
          }

          .contact-stats {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-info,
          .contact-form-container {
            padding: 1.5rem;
          }

          .info-item {
            flex-direction: column;
            text-align: center;
          }

          .info-icon {
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
}