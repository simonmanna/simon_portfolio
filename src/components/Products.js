"use client";

import { useState } from 'react';
import { FaSeedling, FaFire, FaShoppingCart, FaLeaf, FaMountain, FaSun } from 'react-icons/fa';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('green-beans');

  const productCategories = {
    'green-beans': {
      name: 'Green Coffee Beans',
      icon: <FaSeedling />,
      description: 'Premium unroasted beans for professional roasters'
    },
    'roasted-coffee': {
      name: 'Roasted Coffee',
      icon: <FaFire />,
      description: 'Artisan roasted coffee for immediate brewing'
    },
    'specialty-blends': {
      name: 'Specialty Blends',
      icon: <FaLeaf />,
      description: 'Unique blends showcasing Ugandan flavors'
    }
  };

  const products = {
    'green-beans': [
      {
        id: 1,
        name: 'Bugisu AA Green Beans',
        type: 'Arabica',
        origin: 'Mount Elgon',
        price: '$8.50/kg',
        description: 'Premium Arabica from the slopes of Mount Elgon with wine-like acidity',
        grade: 'AA',
        altitude: '1800-2200m',
        process: 'Washed',
        flavor: 'Berry, Wine, Chocolate',
        minOrder: '50kg'
      },
      {
        id: 2,
        name: 'Kibale Forest Green Beans',
        type: 'Robusta',
        origin: 'Kibale Forest',
        price: '$6.20/kg',
        description: 'Bold Robusta with deep chocolate notes from western Uganda',
        grade: 'Grade 1',
        altitude: '1200-1500m',
        process: 'Natural',
        flavor: 'Chocolate, Nutty, Spice',
        minOrder: '100kg'
      }
    ],
    'roasted-coffee': [
      {
        id: 3,
        name: 'Bugisu Medium Roast',
        type: 'Arabica',
        origin: 'Mount Elgon',
        price: '$15.00/kg',
        description: 'Balanced medium roast highlighting natural sweetness',
        roast: 'Medium',
        flavor: 'Caramel, Citrus, Brown Sugar',
        packaging: '250g, 500g, 1kg'
      }
    ],
    'specialty-blends': [
      {
        id: 4,
        name: 'Pearl of Africa Blend',
        type: 'Arabica/Robusta',
        origin: 'Multiple Regions',
        price: '$18.00/kg',
        description: 'Signature blend combining the best of Ugandan coffee',
        composition: '70% Arabica, 30% Robusta',
        flavor: 'Complex, Balanced, Fruity',
        roast: 'Medium-Dark'
      }
    ]
  };

  return (
    <section className="products" id="products">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">Our Coffee Products</h2>
          <p className="section-subtitle">
            Direct from Ugandan farms to your roastery or café
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.name}</span>
              <p className="tab-description">{category.description}</p>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products[activeCategory].map((product) => (
            <div key={product.id} className="product-card">
              {/* Product Header */}
              <div className="product-header">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-type">{product.type}</div>
              </div>

              {/* Origin & Details */}
              <div className="product-origin">
                <FaMountain className="origin-icon" />
                <span>{product.origin}</span>
                {product.grade && <span className="product-grade">{product.grade}</span>}
              </div>

              {/* Description */}
              <p className="product-description">{product.description}</p>

              {/* Specifications */}
              <div className="product-specs">
                {product.altitude && (
                  <div className="spec">
                    <FaSun className="spec-icon" />
                    <span>{product.altitude}</span>
                  </div>
                )}
                {product.process && (
                  <div className="spec">
                    <FaLeaf className="spec-icon" />
                    <span>{product.process} Process</span>
                  </div>
                )}
                {product.flavor && (
                  <div className="spec">
                    <span className="flavor-profile">{product.flavor}</span>
                  </div>
                )}
              </div>

              {/* Price & Action */}
              <div className="product-footer">
                <div className="product-price">
                  <span className="price">{product.price}</span>
                  {product.minOrder && (
                    <span className="min-order">Min: {product.minOrder}</span>
                  )}
                </div>
                <button className="inquiry-btn">
                  <FaShoppingCart className="btn-icon" />
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Notice */}
        <div className="wholesale-notice">
          <div className="notice-content">
            <h3>Wholesale & Bulk Orders</h3>
            <p>
              We specialize in supplying coffee shops, roasteries, and distributors worldwide. 
              Contact us for custom roasting, private labeling, and competitive bulk pricing.
            </p>
            <button className="wholesale-cta">
              Become a Partner
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: 6rem 0;
          background: var(--light-gray);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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
        
        /* Category Tabs */
        .category-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 4rem;
        }
        
        .category-tab {
          background: white;
          border: 2px solid var(--light-gray);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
        }
        
        .category-tab:hover {
          border-color: var(--earth-green);
          transform: translateY(-5px);
        }
        
        .category-tab.active {
          border-color: var(--uganda-red);
          background: linear-gradient(135deg, white, var(--light-cream));
          transform: translateY(-5px);
          box-shadow: var(--shadow-float);
        }
        
        .tab-icon {
          font-size: 2.5rem;
          color: var(--earth-green);
          margin-bottom: 1rem;
        }
        
        .tab-label {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--uganda-black);
          margin-bottom: 0.5rem;
        }
        
        .tab-description {
          font-size: 0.9rem;
          color: var(--medium-gray);
          line-height: 1.4;
        }
        
        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .product-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--shadow-float);
          transition: all 0.3s var(--transition-bounce);
          border: 1px solid var(--light-gray);
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-deep);
        }
        
        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .product-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--uganda-black);
          margin: 0;
        }
        
        .product-type {
          background: var(--earth-green);
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .product-origin {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--medium-gray);
          font-weight: 500;
        }
        
        .origin-icon {
          color: var(--uganda-yellow);
        }
        
        .product-grade {
          background: var(--uganda-yellow);
          color: var(--uganda-black);
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          font-size: 0.7rem;
          font-weight: 700;
          margin-left: auto;
        }
        
        .product-description {
          color: var(--medium-gray);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .product-specs {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }
        
        .spec {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--dark-charcoal);
        }
        
        .spec-icon {
          color: var(--uganda-red);
        }
        
        .flavor-profile {
          background: var(--light-cream);
          color: var(--coffee-brown);
          padding: 0.3rem 0.8rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-style: italic;
        }
        
        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .product-price {
          display: flex;
          flex-direction: column;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--uganda-black);
        }
        
        .min-order {
          font-size: 0.8rem;
          color: var(--medium-gray);
        }
        
        .inquiry-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--uganda-red);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .inquiry-btn:hover {
          background: #b30000;
          transform: translateY(-2px);
        }
        
        /* Wholesale Notice */
        .wholesale-notice {
          background: linear-gradient(135deg, var(--uganda-black), var(--coffee-brown));
          color: white;
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
        }
        
        .wholesale-cta {
          background: var(--uganda-yellow);
          color: var(--uganda-black);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }
        
        .wholesale-cta:hover {
          background: #e6c200;
          transform: translateY(-2px);
        }
        
        @media (max-width: 968px) {
          .category-tabs {
            grid-template-columns: 1fr;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;