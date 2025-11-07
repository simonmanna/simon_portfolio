// ========================================
// File: page.js
// ========================================

import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Uganda Gold Beans - Premium Coffee from the Pearl of Africa</title>
        <meta name="description" content="Premium green coffee beans and artisan roasted coffee directly from Ugandan farms. Wholesale supplier to roasters and distributors worldwide." />
        <meta name="keywords" content="Uganda coffee, green coffee beans, roasted coffee, wholesale coffee, Arabica, Robusta, specialty coffee" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Uganda Gold Beans - Premium Coffee" />
        <meta property="og:description" content="Premium coffee from Uganda's finest farms" />
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        {/* <Process /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


// ========================================
// File: globals.css
// ========================================

/* ========================================
   GLOBAL STYLES - globals.css
   Place this in your app/globals.css or styles/globals.css
   ======================================== */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

/* ========================================
   CSS VARIABLES - COLOR PALETTE
   ======================================== */
:root {
  /* Uganda Flag Colors */
  --uganda-black: #000000;
  --uganda-yellow: #FCDC04;
  --uganda-red: #D90000;
  
  /* Coffee & Earth Tones */
  --coffee-brown: #6F4E37;
  --dark-roast: #3E2723;
  --medium-roast: #8B4513;
  --light-roast: #A0826D;
  --cream: #F5F5DC;
  --light-cream: #FFF8DC;
  
  /* Nature & Farm Colors */
  --earth-green: #2E8B57;
  --forest-green: #228B22;
  --leaf-green: #90EE90;
  --soil-brown: #8B7355;
  --sun-orange: #FF8C00;
  
  /* UI Colors */
  --white: #FFFFFF;
  --light-gray: #F8F8F8;
  --medium-gray: #808080;
  --dark-charcoal: #2C2C2C;
  
  /* Gradients */
  --gradient-uganda: linear-gradient(135deg, #D90000 0%, #FCDC04 100%);
  --gradient-coffee: linear-gradient(135deg, #3E2723 0%, #6F4E37 50%, #8B4513 100%);
  --gradient-earth: linear-gradient(135deg, #2E8B57 0%, #90EE90 100%);
  
  /* Shadows */
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-deep: 0 8px 32px rgba(0, 0, 0, 0.16);
  --shadow-float: 0 12px 40px rgba(0, 0, 0, 0.12);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  --transition-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* ========================================
   RESET & BASE STYLES
   ======================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: var(--dark-charcoal);
  background: var(--white);
  line-height: 1.6;
  overflow-x: hidden;
}

/* ========================================
   TYPOGRAPHY
   ======================================== */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  line-height: 1.2;
  color: var(--uganda-black);
}

h1 { font-size: 3.5rem; }
h2 { font-size: 2.8rem; }
h3 { font-size: 2.2rem; }
h4 { font-size: 1.8rem; }
h5 { font-size: 1.4rem; }
h6 { font-size: 1.2rem; }

p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: inherit;
  transition: var(--transition-normal);
}

/* ========================================
   CONTAINER & LAYOUT
   ======================================== */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 1440px) {
  .container { max-width: 1200px; }
}

@media (max-width: 1200px) {
  .container { max-width: 100%; padding: 0 1.5rem; }
}

@media (max-width: 768px) {
  .container { padding: 0 1rem; }
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.6rem; }
}

/* ========================================
   UTILITY CLASSES
   ======================================== */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

/* ========================================
   BUTTONS
   ======================================== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.btn-primary {
  background: var(--uganda-red);
  color: white;
  box-shadow: var(--shadow-medium);
}

.btn-primary:hover {
  background: #b30000;
  transform: translateY(-3px);
  box-shadow: var(--shadow-deep);
}

.btn-secondary {
  background: var(--earth-green);
  color: white;
  box-shadow: var(--shadow-medium);
}

.btn-secondary:hover {
  background: #267a48;
  transform: translateY(-3px);
  box-shadow: var(--shadow-deep);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--uganda-red);
  color: var(--uganda-red);
}

.btn-outline:hover {
  background: var(--uganda-red);
  color: white;
  transform: translateY(-3px);
}

/* ========================================
   CARDS
   ======================================== */
.card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: var(--shadow-soft);
  transition: all var(--transition-normal);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-deep);
}

/* ========================================
   ANIMATIONS
   ======================================== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}

.animate-slideInLeft {
  animation: slideInLeft 0.6s ease-out;
}

.animate-slideInRight {
  animation: slideInRight 0.6s ease-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* ========================================
   SCROLLBAR STYLING
   ======================================== */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--light-gray);
}

::-webkit-scrollbar-thumb {
  background: var(--uganda-red);
  border-radius: 6px;
  border: 2px solid var(--light-gray);
}

::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

/* ========================================
   SELECTION
   ======================================== */
::selection {
  background: var(--uganda-yellow);
  color: var(--uganda-black);
}

::-moz-selection {
  background: var(--uganda-yellow);
  color: var(--uganda-black);
}

/* ========================================
   LOADING STATES
   ======================================== */
.skeleton {
  background: linear-gradient(
    90deg,
    var(--light-gray) 0%,
    #e0e0e0 50%,
    var(--light-gray) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

/* ========================================
   RESPONSIVE UTILITIES
   ======================================== */
.mobile-only {
  display: none;
}

.desktop-only {
  display: block;
}

@media (max-width: 768px) {
  .mobile-only { display: block; }
  .desktop-only { display: none; }
}

/* ========================================
   SECTION SPACING
   ======================================== */
section {
  padding: 6rem 0;
}

@media (max-width: 768px) {
  section {
    padding: 4rem 0;
  }
}

/* ========================================
   FOCUS STYLES (Accessibility)
   ======================================== */
*:focus-visible {
  outline: 3px solid var(--uganda-yellow);
  outline-offset: 3px;
}

button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--uganda-yellow);
  outline-offset: 3px;
}


// ========================================
// File: ../components/Testimonials.js
// ========================================

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Senior Dev, Stripe',
    text: "BeanCode's Arabica keeps me in flow for 10-hour sprints. No jitters, just focus.",
    rating: 5,
  },
  {
    name: 'Sarah Kim',
    role: 'CTO, Startup',
    text: 'The Specialty Blend is now part of our onboarding kit. Devs love it.',
    rating: 5,
  },
  {
    name: 'Mike Torres',
    role: 'Freelancer',
    text: 'Finally, coffee that understands late-night debugging sessions.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-coffee-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-coffee-900">
          What <span className="text-coffee-700">Developers</span> Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">Star</span>
                ))}
              </div>
              <p className="text-coffee-700 italic mb-4">"{t.text}"</p>
              <div>
                <p className="font-bold text-coffee-900">{t.name}</p>
                <p className="text-sm text-coffee-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ========================================
// File: ../components/Hero.js
// ========================================

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


// ========================================
// File: layout.js
// ========================================

export const metadata = {
  title: 'ByteBrew - Coffee & IT Solutions',
  description: 'Premium coffee and professional IT services for the modern tech professional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}


// ========================================
// File: ../components/Header.js
// ========================================

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
