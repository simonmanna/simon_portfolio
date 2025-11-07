"use client";

import { useState } from "react";
import { FaSeedling, FaFire, FaLeaf, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Products2 = () => {
  const [activeCategory, setActiveCategory] = useState("green-beans");

  const products = {
    "green-beans": [
      // {
      //   id: 1,
      //   name: "AA Green Beans",
      //   type: "Arabica",
      //   origin: "Mount Elgon",
      //   price: "$8.50/kg",
      //   description: "Premium Arabica with wine-like acidity and floral tones.",
      //   image: "/images/green-beans.jpg",
      // },
      {
        id: 2,
        name: "Medium Roast",
        type: "Robusta",
        origin: "Kibale Forest",
        price: "$6.20/kg",
        description: "Deep-bodied Robusta with chocolatey and nutty flavors.",
        image: "/images/coffee.png",
      },
      {
        id: 3,
        name: "Medium Dark Roast",
        type: "Robusta",
        origin: "Kibale Forest",
        price: "$6.20/kg",
        description: "Deep-bodied Robusta with chocolatey and nutty flavors.",
        image: "/images/coffee-medium-dark-roast2.png",
      },
            {
        id: 4,
        name: "Dark Roast",
        type: "Robusta",
        origin: "Kibale Forest",
        price: "$6.20/kg",
        description: "Deep-bodied Robusta with chocolatey and nutty flavors.",
        image: "/images/coffee-dark-roast2.png",
      },

    ],
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Continental Blend (Morning Energy Strength Blend)</h2>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {products[activeCategory].map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="coffee-img"
                  sizes="(max-width: 768px) 100vw, 400px"
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
          padding: 0rem 0;
          background: #faf8f5;
        }

        .section-header {
          text-align: left;
          margin-bottom: 1rem;
          margin-left:1rem;
        }

        .section-title {
          font-size: 2rem;
          color: #2c1810;
          margin-bottom: 0.1rem;
          font-family: "Playfair Display", serif;
          padding-left: 2rem;
          padding-top: 1rem;

        }

        .section-subtitle {
          color: #8b5e3c;
          font-size: 1.2rem;
        }

        /* Product Cards */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(250px, 1fr));
          gap: 2rem;
          justify-content: center;
          padding: 0 2rem;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-10px);
        }

        .product-image {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
        }

        .coffee-img {
          object-fit: cover;
          border-bottom: 4px solid #c39b77;
        }

        .product-info {
          padding: 1.5rem;
          flex: 1;
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

export default Products2;
