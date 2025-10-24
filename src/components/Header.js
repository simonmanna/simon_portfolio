"use client";

import { useState, useEffect } from 'react';
import { FaCoffee, FaSeedling, FaFire, FaShoppingCart, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'Our Story' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-background"></div>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <FaCoffee />
            <div className="logo-pulse"></div>
          </div>
          <div className="logo-text">
            <span className="logo-main">Uganda Gold Beans</span>
            <span className="logo-sub">Premium Coffee Roasters</span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="action-btn wholesale-btn">
            <FaSeedling />
            <span>Wholesale</span>
          </button>
          <button className="action-btn contact-btn">
            <FaPhone />
            <span>Contact</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s var(--transition-bounce);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(139, 69, 19, 0.1);
        }
        
        .header.scrolled {
          padding: 1rem 0;
          box-shadow: var(--shadow-float);
        }
        
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        /* Logo Styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }
        
        .logo-icon {
          position: relative;
          font-size: 2rem;
          color: var(--uganda-yellow);
        }
        
        .logo-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 2px solid var(--uganda-yellow);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        
        .logo-main {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--uganda-black);
          line-height: 1;
        }
        
        .logo-sub {
          font-size: 0.7rem;
          color: var(--coffee-brown);
          font-weight: 500;
          letter-spacing: 1px;
        }
        
        /* Navigation */
        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-link {
          color: var(--dark-charcoal);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--uganda-red);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--uganda-red);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        /* Action Buttons */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
        }
        
        .wholesale-btn {
          background: var(--earth-green);
          color: white;
        }
        
        .wholesale-btn:hover {
          background: #267a48;
          transform: translateY(-2px);
        }
        
        .contact-btn {
          background: var(--uganda-red);
          color: white;
        }
        
        .contact-btn:hover {
          background: #b30000;
          transform: translateY(-2px);
        }
        
        /* Mobile Menu */
        .menu-toggle {
          display: none;
          background: var(--uganda-red);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          position: relative;
          align-items: center;
          justify-content: center;
        }
        
        .hamburger span {
          display: block;
          width: 24px;
          height: 3px;
          background: white;
          margin: 4px auto;
          transition: all 0.3s var(--transition-bounce);
          border-radius: 2px;
        }
        
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        @media (max-width: 968px) {
          .nav {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: white;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: var(--shadow-deep);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s var(--transition-bounce);
          }
          
          .nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          
          .action-btn span {
            display: none;
          }
          
          .menu-toggle {
            display: flex;
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </header>
  );
};

export default Header;