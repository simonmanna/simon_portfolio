"use client";

import { useState } from "react";
import { FaSeedling, FaFire, FaLeaf, FaShoppingCart, FaMountain, FaSun } from "react-icons/fa";
import Image from "next/image";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("green-beans");

  const productCategories = {
    "green-beans": {
      name: "Green Coffee Beans",
      icon: <FaSeedling />,
      description: "Pure unroasted coffee beans, directly from Ugandan farmers.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
    },
    "roasted-coffee": {
      name: "Roasted Coffee",
      icon: <FaFire />,
      description: "Perfectly roasted for rich aroma and flavor balance.",
      image: "https://unsplash.com/photos/a-large-pile-of-coffee-beans-c7du_McsRKo"
    },
    "specialty-blends": {
      name: "Specialty Blends",
      icon: <FaLeaf />,
      description: "Signature blends crafted with the art of Ugandan excellence.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
    }
  };

  const products = {
    "green-beans": [
      {
        id: 1,
        name: "Bugisu AA Green Beans",
        type: "Arabica",
        origin: "Mount Elgon",
        price: "$8.50/kg",
        description: "Premium Arabica with wine-like acidity and floral tones.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
      },
      {
        id: 2,
        name: "Kibale Forest Green Beans",
        type: "Robusta",
        origin: "Kibale Forest",
        price: "$6.20/kg",
        description: "Deep-bodied Robusta with chocolatey and nutty flavors.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
      }
    ],
    "roasted-coffee": [
      {
        id: 3,
        name: "Bugisu Medium Roast",
        type: "Arabica",
        origin: "Mount Elgon",
        price: "$15.00/kg",
        description: "Balanced medium roast highlighting caramel and citrus notes.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
      },
      {
        id: 4,
        name: "Dark Roast Royal",
        type: "Robusta",
        origin: "Kibale Region",
        price: "$16.50/kg",
        description: "Bold, smoky roast with a powerful kick and dark chocolate finish.",
      image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0"
      }
    ],
    "specialty-blends": [
      {
        id: 5,
        name: "Pearl of Africa Blend",
        type: "Arabica/Robusta",
        origin: "Multiple Regions",
        price: "$18.00/kg",
        description: "Signature blend with complex, fruity and balanced flavor.",
        image: "https://images.unsplash.com/photo-1536520002442-39764a41e987"
      }
    ]
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Coffee Selection</h2>
          <p className="section-subtitle">From the lush hills of Uganda — crafted for global taste.</p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {Object.entries(productCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? "active" : ""}`}
              onClick={() => setActiveCategory(key)}
              style={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <div className="overlay" />
              <div className="tab-content">
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.name}</span>
                <p className="tab-description">{category.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products[activeCategory].map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={250}
                  className="coffee-img"
                />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-meta">
                  <span className="type">{product.type}</span>
                  <span className="origin">{product.origin}</span>
                </div>

                <div className="product-footer">
                  <span className="price">{product.price}</span>
                  <button className="inquiry-btn">
                    <FaShoppingCart className="btn-icon" />
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale CTA */}
        <div className="wholesale-cta">
          <h3>Partner with Us</h3>
          <p>
            We supply coffee shops, roasteries, and distributors globally with premium Ugandan coffee. 
            Ask about custom roasting, private labels, or export partnerships.
          </p>
          <button>Become a Partner</button>
        </div>
      </div>

      <style jsx>{`
        .products {
          padding: 6rem 0;
          background: #faf8f5;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3rem;
          color: #2c1810;
          margin-bottom: 0.5rem;
          font-family: "Playfair Display", serif;
        }

        .section-subtitle {
          color: #8b5e3c;
          font-size: 1.2rem;
        }

        /* Category Tabs */
        .category-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .category-tab {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 220px;
          background-size: cover;
          background-position: center;
          border: none;
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .category-tab:hover {
          transform: scale(1.05);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .tab-content {
          position: absolute;
          bottom: 20px;
          left: 20px;
          color: white;
          text-align: left;
        }

        .tab-icon {
          font-size: 1.5rem;
          color: #ffb300;
        }

        .tab-label {
          font-size: 1.4rem;
          font-weight: 700;
          display: block;
          margin-top: 0.5rem;
        }

        .tab-description {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .category-tab.active .overlay {
          background: rgba(255, 179, 0, 0.35);
        }

        /* Product Cards */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-10px);
        }

        .product-image {
          position: relative;
          height: 250px;
        }

        .coffee-img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #2c1810;
        }

        .product-description {
          font-size: 0.95rem;
          color: #6b4b36;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          color: #8b5e3c;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c1810;
        }

        .inquiry-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #c0392b;
          color: white;
          border: none;
          padding: 0.7rem 1.2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .inquiry-btn:hover {
          background: #922b21;
        }

        /* Wholesale CTA */
        .wholesale-cta {
          background: linear-gradient(135deg, #2c1810, #8b5e3c);
          color: white;
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          margin-top: 5rem;
        }

        .wholesale-cta h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .wholesale-cta button {
          background: #ffb300;
          color: #2c1810;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          margin-top: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .wholesale-cta button:hover {
          transform: translateY(-3px);
          background: #ffd700;
        }
      `}</style>
    </section>
  );
};

export default Products;
