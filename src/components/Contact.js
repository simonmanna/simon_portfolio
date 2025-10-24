"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Location & Hours</h3>
            <div className="info-item">
              <strong>Address:</strong>
              <p>123 Coffee Street, Brew City, BC 12345</p>
            </div>
            <div className="info-item">
              <strong>Hours:</strong>
              <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 10:00 PM</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <p>hello@brewandbean.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact {
          padding: 5rem 0;
          background: #f9f9f9;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #8B4513;
          font-family: 'Georgia', serif;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .contact-info h3, .contact-form h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .info-item {
          margin-bottom: 1.5rem;
        }
        .info-item strong {
          display: block;
          margin-bottom: 0.5rem;
          color: #8B4513;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .contact-form input,
        .contact-form textarea {
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #8B4513;
        }
        .btn-primary {
          background: #8B4513;
          color: white;
          padding: 12px 30px;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn-primary:hover {
          background: #654321;
        }
        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}