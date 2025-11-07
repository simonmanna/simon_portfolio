// ========================================
// File: ../components/Testimonials.js (Enhanced)
// ========================================

"use client";

import { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft, FaGlobe, FaAward, FaHeart } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Head Roaster, Artisan Coffee Co.',
    text: "Uganda Gold Beans' Arabica keeps our customers coming back. The consistent quality and rich flavor profile are unmatched in the industry.",
    rating: 5,
    location: 'New York, USA',
    image: '/avatars/alex.jpg'
  },
  {
    id: 2,
    name: 'Sarah Kim',
    role: 'Owner, Urban Brew Café',
    text: 'The Bugisu AA has become our signature blend. Our customers love the wine-like acidity and chocolate notes. Direct sourcing makes all the difference.',
    rating: 5,
    location: 'Seoul, South Korea',
    image: '/avatars/sarah.jpg'
  },
  {
    id: 3,
    name: 'Mike Torres',
    role: 'Coffee Importer, Global Beans',
    text: 'Working with Uganda Gold Beans for 5 years now. Their ethical sourcing and premium quality make them our top supplier from Africa.',
    rating: 5,
    location: 'London, UK',
    image: '/avatars/mike.jpg'
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Executive Chef, Luxury Resort',
    text: 'The Kibale Forest Robusta adds incredible depth to our espresso blends. The sustainability practices align perfectly with our values.',
    rating: 5,
    location: 'Barcelona, Spain',
    image: '/avatars/elena.jpg'
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge">
            <FaHeart className="badge-icon" />
            Trusted Worldwide
          </div>
          <h2 className="section-title">
            Loved by <span className="highlight">Roasters & Cafés</span> Globally
          </h2>
          <p className="section-subtitle">
            Discover why specialty coffee professionals choose Uganda Gold Beans for their premium offerings
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className="testimonial-showcase"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="testimonial-active">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <blockquote className="testimonial-text">
              "{testimonials[activeTestimonial].text}"
            </blockquote>
            
            <div className="testimonial-author">
              <div className="author-avatar">
                <div className="avatar-placeholder">
                  {testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="verified-badge">
                  <FaAward />
                </div>
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[activeTestimonial].name}</h4>
                <p className="author-role">{testimonials[activeTestimonial].role}</p>
                <div className="author-location">
                  <FaGlobe />
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="testimonial-rating">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => {
                setActiveTestimonial(index);
                setIsAutoPlaying(false);
              }}
            >
              <div className="card-content">
                <div className="card-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon small" />
                  ))}
                </div>
                <p className="card-text">"{testimonial.text}"</p>
                <div className="card-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="testimonial-nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => {
                setActiveTestimonial(index);
                setIsAutoPlaying(false);
              }}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="testimonial-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Countries Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 6rem 0;
          background: linear-gradient(135deg, var(--light-cream) 0%, var(--cream) 100%);
          position: relative;
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--uganda-red);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .badge-icon {
          color: var(--uganda-yellow);
        }

        .section-title {
          font-size: 3rem;
          color: var(--dark-charcoal);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .highlight {
          background: var(--gradient-uganda);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--medium-gray);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Main Testimonial Display */
        .testimonial-showcase {
          background: white;
          border-radius: 25px;
          padding: 4rem;
          box-shadow: var(--shadow-float);
          margin-bottom: 3rem;
          position: relative;
          border: 1px solid rgba(139, 69, 19, 0.1);
        }

        .quote-icon {
          font-size: 3rem;
          color: var(--uganda-yellow);
          margin-bottom: 2rem;
          opacity: 0.7;
        }

        .testimonial-text {
          font-size: 1.4rem;
          line-height: 1.6;
          color: var(--dark-charcoal);
          margin-bottom: 2.5rem;
          font-style: italic;
          position: relative;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .author-avatar {
          position: relative;
        }

        .avatar-placeholder {
          width: 70px;
          height: 70px;
          background: var(--gradient-earth);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .verified-badge {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--earth-green);
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          border: 3px solid white;
        }

        .author-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--uganda-black);
          margin-bottom: 0.3rem;
        }

        .author-role {
          color: var(--medium-gray);
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .author-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--coffee-brown);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.3rem;
          margin-top: 1.5rem;
        }

        .star-icon {
          color: var(--uganda-yellow);
          font-size: 1.2rem;
        }

        .star-icon.small {
          font-size: 0.9rem;
        }

        /* Testimonial Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .testimonial-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
          border: 2px solid transparent;
          box-shadow: var(--shadow-soft);
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .testimonial-card.active {
          border-color: var(--uganda-red);
          background: linear-gradient(135deg, white, var(--light-cream));
        }

        .card-rating {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1rem;
        }

        .card-text {
          color: var(--medium-gray);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .card-author {
          display: flex;
          flex-direction: column;
        }

        .card-author strong {
          color: var(--uganda-black);
          margin-bottom: 0.2rem;
        }

        .card-author span {
          color: var(--medium-gray);
          font-size: 0.85rem;
        }

        /* Navigation */
        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 0.8rem;
          margin-bottom: 4rem;
        }

        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: var(--light-gray);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background: var(--uganda-red);
          transform: scale(1.2);
        }

        /* Stats */
        .testimonial-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-item {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow-soft);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--uganda-red);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--medium-gray);
          font-weight: 600;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }

          .testimonial-showcase {
            padding: 2rem;
          }

          .testimonial-text {
            font-size: 1.1rem;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .testimonial-author {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}