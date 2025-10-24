"use client";

import { useState, useEffect } from 'react';
import { FaSeedling, FaFire, FaGlobeAfrica, FaAward } from 'react-icons/fa';

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    "Single-Origin Ugandan Beans",
    "Artisan Roasting Techniques", 
    "Direct from Our Farms",
    "Sustainable & Ethical"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Elements */}
      <div className="hero-background">
        <div className="coffee-bean bean-1">🫘</div>
        <div className="coffee-bean bean-2">🫘</div>
        <div className="coffee-plant">🌱</div>
        <div className="uganda-flag">🇺🇬</div>
        <div className="gradient-orbs">
          <div className="orb-1"></div>
          <div className="orb-2"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Uganda Badge */}
          <div className="uganda-badge">
            <FaGlobeAfrica className="badge-icon" />
            <span>Proudly Ugandan • Since 2010</span>
          </div>

          {/* Main Heading */}
          <div className="hero-heading">
            <h1 className="hero-title">
              <span className="title-line">Premium Coffee</span>
              <span className="feature-text">
                {features[currentFeature]}
              </span>
              <span className="title-accent">from the Pearl of Africa</span>
            </h1>
          </div>

          {/* Description */}
          <p className="hero-description">
            Experience the rich, bold flavors of Ugandan coffee. We source directly 
            from local farmers, roast with precision, and deliver exceptional quality 
            green beans and roasted coffee worldwide.
          </p>

          {/* CTA Section */}
          <div className="hero-actions">
            <button className="cta-primary">
              <FaSeedling className="cta-icon" />
              <span>Browse Green Beans</span>
            </button>
            <button className="cta-secondary">
              <FaFire className="cta-icon" />
              <span>Explore Roasted Coffee</span>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-card">
              <FaSeedling className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">50+</div>
                <div className="stat-label">Coffee Farms</div>
              </div>
            </div>
            <div className="stat-card">
              <FaAward className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
            <div className="stat-card">
              <FaGlobeAfrica className="stat-icon" />
              <div className="stat-content">
                <div className="stat-number">30+</div>
                <div className="stat-label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Visual */}
        <div className="hero-visual">
          <div className="coffee-presentation">
            <div className="green-beans">
              <div className="bean-pile">
                <div className="bean"></div>
                <div className="bean"></div>
                <div className="bean"></div>
              </div>
              <div className="label">Green Beans</div>
            </div>
            
            <div className="roasting-process">
              <div className="roaster">
                <div className="drum"></div>
                <div className="flame"></div>
              </div>
              <div className="arrow">→</div>
            </div>
            
            <div className="roasted-beans">
              <div className="bean-pile dark">
                <div className="bean"></div>
                <div className="bean"></div>
                <div className="bean"></div>
              </div>
              <div className="label">Roasted Coffee</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--cream) 0%, var(--light-cream) 100%);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 100px;
        }
        
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .coffee-bean, .coffee-plant, .uganda-flag {
          position: absolute;
          font-size: 2rem;
          animation: float 6s ease-in-out infinite;
          opacity: 0.3;
        }
        
        .bean-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .bean-2 { top: 60%; right: 15%; animation-delay: 2s; }
        .coffee-plant { bottom: 30%; left: 20%; animation-delay: 1s; }
        .uganda-flag { top: 30%; right: 10%; animation-delay: 3s; }
        
        .gradient-orbs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .orb-1, .orb-2 {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.4;
        }
        
        .orb-1 {
          width: 300px;
          height: 300px;
          background: var(--uganda-yellow);
          top: -150px;
          right: -150px;
        }
        
        .orb-2 {
          width: 200px;
          height: 200px;
          background: var(--earth-green);
          bottom: -100px;
          left: 20%;
        }
        
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        /* Uganda Badge */
        .uganda-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--uganda-red);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          margin-bottom: 2rem;
        }
        
        .badge-icon {
          color: var(--uganda-yellow);
        }
        
        /* Hero Heading */
        .hero-heading {
          margin-bottom: 2rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          color: var(--dark-charcoal);
          line-height: 1.1;
        }
        
        .title-line {
          display: block;
          color: var(--uganda-black);
        }
        
        .feature-text {
          display: block;
          background: var(--gradient-uganda);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          height: 4rem;
          transition: all 0.5s ease;
        }
        
        .title-accent {
          display: block;
          color: var(--earth-green);
          font-style: italic;
        }
        
        /* Description */
        .hero-description {
          font-size: 1.2rem;
          color: var(--medium-gray);
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 500px;
        }
        
        /* CTA Buttons */
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        
        .cta-primary, .cta-secondary {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
        }
        
        .cta-primary {
          background: var(--earth-green);
          color: white;
        }
        
        .cta-primary:hover {
          background: #267a48;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(46, 139, 87, 0.4);
        }
        
        .cta-secondary {
          background: var(--uganda-red);
          color: white;
        }
        
        .cta-secondary:hover {
          background: #b30000;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(217, 0, 0, 0.4);
        }
        
        /* Stats */
        .hero-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow-float);
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .stat-icon {
          font-size: 2rem;
          color: var(--uganda-yellow);
        }
        
        .stat-number {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--uganda-black);
        }
        
        .stat-label {
          color: var(--medium-gray);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        /* Coffee Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .coffee-presentation {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: white;
          padding: 3rem;
          border-radius: 25px;
          box-shadow: var(--shadow-deep);
        }
        
        .green-beans, .roasted-beans {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .bean-pile {
          display: flex;
          gap: 5px;
        }
        
        .bean {
          width: 20px;
          height: 10px;
          background: var(--earth-green);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }
        
        .bean-pile.dark .bean {
          background: var(--coffee-brown);
        }
        
        .bean:nth-child(2) { animation-delay: 1s; }
        .bean:nth-child(3) { animation-delay: 2s; }
        
        .label {
          font-weight: 600;
          color: var(--medium-gray);
          font-size: 0.9rem;
        }
        
        .roasting-process {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .roaster {
          position: relative;
          width: 60px;
          height: 60px;
        }
        
        .drum {
          width: 100%;
          height: 100%;
          background: var(--medium-gray);
          border-radius: 50%;
          position: relative;
          animation: rotate 4s linear infinite;
        }
        
        .flame {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 30px;
          background: var(--sun-orange);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: flicker 1s ease-in-out infinite alternate;
        }
        
        .arrow {
          font-size: 2rem;
          color: var(--uganda-yellow);
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes flicker {
          0%, 100% { transform: translateX(-50%) scaleY(1); opacity: 0.8; }
          50% { transform: translateX(-50%) scaleY(1.2); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        @media (max-width: 968px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .coffee-presentation {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;