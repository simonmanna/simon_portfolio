
// ========================================
// File: ../components/Process.js
// ========================================

"use client";

import { FaSeedling, FaFire, FaShippingFast, FaCertificate } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaSeedling />,
      title: 'Farm Selection',
      description: 'We partner with over 50 certified farms across Uganda\'s best coffee-growing regions.',
      details: ['Mount Elgon', 'Rwenzori Mountains', 'Lake Victoria Basin']
    },
    {
      icon: <FaSeedling />,
      title: 'Harvesting',
      description: 'Hand-picked at peak ripeness by experienced farmers who know every bean matters.',
      details: ['Selective picking', 'Quality control', 'Sustainable practices']
    },
    {
      icon: <FaFire />,
      title: 'Processing & Roasting',
      description: 'State-of-the-art processing and roasting facilities ensure consistent quality.',
      details: ['Washed & Natural', 'Custom roasting', 'Quality assurance']
    },
    {
      icon: <FaShippingFast />,
      title: 'Global Delivery',
      description: 'Fast, reliable shipping to roasters and distributors worldwide.',
      details: ['Air & Sea freight', '30+ countries', 'Tracked delivery']
    }
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">From Farm to Your Cup</h2>
          <p className="section-subtitle">
            Our meticulous process ensures every bean meets the highest standards of quality
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul className="step-details">
                  {step.details.map((detail, i) => (
                    <li key={i}>✓ {detail}</li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>

        <div className="certifications">
          <div className="cert-badge">
            <FaCertificate />
            <span>Organic Certified</span>
          </div>
          <div className="cert-badge">
            <FaCertificate />
            <span>Fair Trade</span>
          </div>
          <div className="cert-badge">
            <FaCertificate />
            <span>Rainforest Alliance</span>
          </div>
          <div className="cert-badge">
            <FaCertificate />
            <span>ISO 22000</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .process {
          padding: 6rem 0;
          background: white;
          position: relative;
          overflow: hidden;
        }

        .process::before {
          content: '';
          position: absolute;
          top: 0;
          right: -10%;
          width: 40%;
          height: 100%;
          background: linear-gradient(135deg, var(--light-cream) 0%, transparent 100%);
          border-radius: 50%;
          opacity: 0.5;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          font-size: 3rem;
          color: var(--uganda-black);
          margin-bottom: 1rem;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: var(--medium-gray);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
        }
        
        .process-step {
          position: relative;
          text-align: center;
        }
        
        .step-number {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background: var(--uganda-yellow);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--uganda-black);
          box-shadow: var(--shadow-medium);
          z-index: 3;
        }
        
        .step-icon {
          width: 100px;
          height: 100px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--uganda-red), #b30000);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          box-shadow: var(--shadow-deep);
          transition: all var(--transition-normal);
          margin-top: 30px;
        }
        
        .process-step:hover .step-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .step-content h3 {
          font-size: 1.4rem;
          color: var(--uganda-black);
          margin-bottom: 1rem;
        }
        
        .step-content p {
          color: var(--medium-gray);
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .step-details {
          list-style: none;
          text-align: left;
          padding: 1rem;
          background: var(--light-cream);
          border-radius: 10px;
        }
        
        .step-details li {
          color: var(--earth-green);
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .step-connector {
          position: absolute;
          top: 80px;
          right: -50%;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--uganda-yellow), var(--uganda-red));
          z-index: 1;
        }
        
        .certifications {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--light-gray);
          border-radius: 20px;
        }
        
        .cert-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          box-shadow: var(--shadow-soft);
          font-weight: 600;
          color: var(--earth-green);
          transition: all var(--transition-normal);
        }
        
        .cert-badge:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }
        
        .cert-badge svg {
          font-size: 1.5rem;
          color: var(--uganda-yellow);
        }
        
        @media (max-width: 968px) {
          .process-timeline {
            grid-template-columns: 1fr;
          }
          
          .step-connector {
            display: none;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .certifications {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Process;
