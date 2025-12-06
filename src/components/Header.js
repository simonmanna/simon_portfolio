"use client";

import { useState, useEffect } from "react";
import {
  FaCoffee,
  FaSeedling,
  FaPhone,
  FaMicrochip,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "Our Story" },
    // { href: "#innovation", label: "Tech & Innovation" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">
            <FaCoffee className="text-amber-500" />
            <div className="logo-glow"></div>
          </div>
          <div className="logo-text">
            <span className="logo-main">Vidapal Investments</span>
            {/* <span className="logo-sub">Coffee • Innovation • Excellence</span> */}
          </div>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
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

        {/* Actions */}
        <div className="header-actions">
          <button className="action-btn shop-btn">
            <FaShoppingCart />
            <span>Shop</span>
          </button>
          <button className="action-btn contact-btn">
            <FaPhone />
            <span>Contact</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        :root {
          --coffee-brown: #4b2e05;
          --tech-gold: #ffb100;
          --uganda-red: #c1121f;
          --dark-bg: rgba(10, 10, 10, 0.85);
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 2rem;
          background: rgba(20, 20, 20, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.9);
          padding: 1rem 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          position: relative;
          font-size: 2rem;
        }

        .logo-glow {
          position: absolute;
          width: 45px;
          height: 45px;
          background: radial-gradient(var(--tech-gold), transparent 70%);
          border-radius: 50%;
          top: -8px;
          left: -8px;
          z-index: -1;
          opacity: 0.6;
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.9;
          }
        }

        .logo-main {
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--tech-gold);
          letter-spacing: 1px;
          color: #ccc;
        }

        .logo-sub {
          font-size: 0.8rem;
          color: #ccc;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Navigation */
        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #eee;
          text-decoration: none;
          font-weight: 600;
          position: relative;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--tech-gold);
          transition: width 0.3s;
        }

        .nav-link:hover {
          color: var(--tech-gold);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Actions */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          border: none;
          border-radius: 25px;
          padding: 0.6rem 1.3rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .shop-btn {
          background: var(--tech-gold);
          color: black;
        }

        .shop-btn:hover {
          background: #ffd45a;
          transform: translateY(-2px);
        }

        .contact-btn {
          background: var(--uganda-red);
          color: white;
        }

        .contact-btn:hover {
          background: #e53e3e;
          transform: translateY(-2px);
        }

        /* Mobile Menu */
        .menu-toggle {
          display: none;
          background: var(--tech-gold);
          border: none;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 3px;
          background: black;
          margin: 4px auto;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
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
            top: 70px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: var(--dark-bg);
            backdrop-filter: blur(15px);
            padding: 2rem;
            gap: 1.2rem;
            transform: translateY(-120%);
            opacity: 0;
            transition: all 0.3s ease;
          }

          .nav.open {
            transform: translateY(0);
            opacity: 1;
          }

          .menu-toggle {
            display: flex;
          }

          .shop-btn span,
          .contact-btn span {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
