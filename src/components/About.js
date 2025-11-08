"use client";

import { useState } from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p>
              Vidapal Investments has been dedicated to bringing you the finest 
              coffee experience. We source our beans directly from sustainable farms 
              and roast them in-house to ensure maximum freshness and flavor.
            </p>
            <p>
              Our baristas are trained in the art of coffee making, ensuring every 
              cup is a masterpiece. From classic espresso to innovative seasonal 
              creations, we're passionate about sharing our love for coffee with you.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">13+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Coffee Varieties</span>
              </div>
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            {/* Add your image here */}
            <div className="image-placeholder">
              Coffee Shop Interior
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 5rem 0;
          background: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #8B4513;
          font-family: 'Georgia', serif;
        }
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #555;
        }
        .stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }
        .stat {
          text-align: center;
        }
        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          color: #8B4513;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #666;
        }
        .about-image {
          display: flex;
          justify-content: center;
        }
        .image-placeholder {
          width: 100%;
          height: 400px;
          background: #f0f0f0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .stats {
            justify-content: space-around;
          }
        }
      `}</style>
    </section>
  );
}