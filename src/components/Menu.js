"use client";

import { useState, useEffect } from 'react';
import { FaStar, FaPlus, FaMinus, FaShoppingCart, FaClock, FaHeart } from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('signature');
  const [cartItems, setCartItems] = useState({});
  const [favorites, setFavorites] = useState(new Set());
  const [isAdding, setIsAdding] = useState(null);

  const menuCategories = {
    signature: {
      name: 'Signature Brews',
      icon: '⭐',
      color: 'var(--vibrant-yellow)'
    },
    espresso: {
      name: 'Espresso Bar',
      icon: '☕',
      color: 'var(--primary-orange)'
    },
    special: {
      name: 'Specialty Drinks',
      icon: '✨',
      color: 'var(--accent-purple)'
    },
    tea: {
      name: 'Tea Collection',
      icon: '🍵',
      color: 'var(--secondary-teal)'
    },
    pastries: {
      name: 'Fresh Pastries',
      icon: '🥐',
      color: 'var(--rich-red)'
    }
  };

  const menuItems = {
    signature: [
      { 
        id: 1,
        name: 'Sunrise Cold Brew', 
        price: 5.99, 
        description: 'Our signature cold brew infused with orange and vanilla notes',
        image: '🥶',
        popular: true,
        time: '5 min',
        calories: '15 cal',
        ingredients: ['Arabica Beans', 'Vanilla', 'Orange Zest'],
        rating: 4.9
      },
      { 
        id: 2,
        name: 'Caramel Cloud Macchiato', 
        price: 6.49, 
        description: 'Layered espresso with creamy foam and caramel drizzle',
        image: '☁️',
        popular: true,
        time: '4 min',
        calories: '120 cal',
        ingredients: ['Espresso', 'Caramel', 'Milk Foam'],
        rating: 4.8
      },
      { 
        id: 3,
        name: 'Moonlight Latte', 
        price: 5.75, 
        description: 'Lavender-infused latte with edible glitter and honey',
        image: '🌙',
        popular: false,
        time: '6 min',
        calories: '80 cal',
        ingredients: ['Lavender', 'Espresso', 'Honey'],
        rating: 4.7
      }
    ],
    espresso: [
      { 
        id: 4,
        name: 'Double Shot Espresso', 
        price: 3.50, 
        description: 'Bold and intense double shot of our premium blend',
        image: '⚡',
        popular: true,
        time: '2 min',
        calories: '5 cal',
        ingredients: ['Premium Espresso Blend'],
        rating: 4.9
      },
      { 
        id: 5,
        name: 'Americano', 
        price: 4.25, 
        description: 'Rich espresso topped with hot water for a smooth taste',
        image: '💧',
        popular: false,
        time: '3 min',
        calories: '10 cal',
        ingredients: ['Espresso', 'Hot Water'],
        rating: 4.6
      }
    ],
    special: [
      { 
        id: 6,
        name: 'Unicorn Frappé', 
        price: 7.99, 
        description: 'Colorful blended creation with magical flavors',
        image: '🦄',
        popular: true,
        time: '7 min',
        calories: '180 cal',
        ingredients: ['Magic Syrup', 'Cream', 'Rainbow Sprinkles'],
        rating: 4.8
      },
      { 
        id: 7,
        name: 'Matcha Galaxy', 
        price: 6.99, 
        description: 'Premium matcha with cosmic color layers',
        image: '🌌',
        popular: false,
        time: '5 min',
        calories: '90 cal',
        ingredients: ['Ceremonial Matcha', 'Blue Spirulina'],
        rating: 4.7
      }
    ],
    tea: [
      { 
        id: 8,
        name: 'Earl Grey Majesty', 
        price: 4.50, 
        description: 'Royal blend of bergamot and blue flowers',
        image: '👑',
        popular: true,
        time: '4 min',
        calories: '0 cal',
        ingredients: ['Earl Grey', 'Cornflower', 'Bergamot'],
        rating: 4.8
      }
    ],
    pastries: [
      { 
        id: 9,
        name: 'Croissant Royale', 
        price: 4.99, 
        description: 'Buttery croissant with almond filling and icing',
        image: '🥐',
        popular: true,
        time: '1 min',
        calories: '320 cal',
        ingredients: ['Butter', 'Almond Paste', 'Icing'],
        rating: 4.9
      }
    ]
  };

  const addToCart = (itemId) => {
    setIsAdding(itemId);
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    
    setTimeout(() => setIsAdding(null), 600);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      const newCount = (prev[itemId] || 0) - 1;
      if (newCount <= 0) {
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newCount };
    });
  };

  const toggleFavorite = (itemId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemId)) {
        newFavorites.delete(itemId);
      } else {
        newFavorites.add(itemId);
      }
      return newFavorites;
    });
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  return (
    <section className="menu" id="menu">
      {/* Animated Background */}
      <div className="menu-background">
        <div className="floating-ingredient i1">🍫</div>
        <div className="floating-ingredient i2">🥛</div>
        <div className="floating-ingredient i3">🍯</div>
        <div className="floating-ingredient i4">🌰</div>
        <div className="background-glow"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="menu-header">
          <div className="header-content">
            <h2 className="section-title">
              <span className="title-gradient">Artisan Menu</span>
            </h2>
            <p className="section-subtitle">
              Crafted with passion, served with perfection. Discover our world of flavors.
            </p>
            <div className="menu-stats">
              <div className="stat">
                <span>Fresh Daily</span>
              </div>
              <div className="stat">
                <FaStar className="stat-icon" />
                <span>Premium Quality</span>
              </div>
              <div className="stat">
                <FaClock className="stat-icon" />
                <span>Made to Order</span>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <div className="cart-icon-wrapper">
              <FaShoppingCart className="cart-icon" />
              {getTotalCartItems() > 0 && (
                <div className="cart-count">{getTotalCartItems()}</div>
              )}
            </div>
            <span className="cart-text">Your Order</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-navigation">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              className={`category-tab ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
              style={{ '--category-color': category.color }}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-label">{category.name}</span>
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {menuItems[activeCategory].map((item) => (
            <div 
              key={item.id} 
              className={`menu-item ${item.popular ? 'popular' : ''} ${isAdding === item.id ? 'adding' : ''}`}
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="popular-badge">
                  <FaStar className="badge-icon" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Favorite Button */}
              <button 
                className={`favorite-btn ${favorites.has(item.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(item.id)}
              >
                <FaHeart className="heart-icon" />
              </button>

              {/* Item Image */}
              <div className="item-image">
                <span className="item-emoji">{item.image}</span>
                <div className="image-glow"></div>
              </div>

              {/* Item Content */}
              <div className="item-content">
                <div className="item-header">
                  <div className="item-info">
                    <h3 className="item-name">{item.name}</h3>
                    <div className="item-meta">
                      <span className="item-time">
                        <FaClock className="meta-icon" />
                        {item.time}
                      </span>
                      <span className="item-calories">{item.calories}</span>
                    </div>
                  </div>
                  <div className="item-rating">
                    <FaStar className="rating-icon" />
                    <span className="rating-value">{item.rating}</span>
                  </div>
                </div>

                <p className="item-description">{item.description}</p>

                {/* Ingredients */}
                <div className="item-ingredients">
                  {item.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>

                {/* Price and Actions */}
                <div className="item-actions">
                  <div className="item-price">
                    <span className="price-currency">$</span>
                    <span className="price-amount">{item.price}</span>
                  </div>
                  
                  <div className="quantity-controls">
                    {cartItems[item.id] ? (
                      <>
                        <button 
                          className="quantity-btn minus"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Minus />
                        </button>
                        <span className="quantity-display">{cartItems[item.id]}</span>
                        <button 
                          className="quantity-btn plus"
                          onClick={() => addToCart(item.id)}
                        >
                          <FaPlus />
                        </button>
                      </>
                    ) : (
                      <button 
                        className="add-to-cart-btn"
                        onClick={() => addToCart(item.id)}
                      >
                        <FaPlus className="btn-icon" />
                        <span>Add to Cart</span>
                        <div className="btn-glow"></div>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="item-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="special-offer">
          <div className="offer-content">
            <div className="offer-badge">Limited Time!</div>
            <h3 className="offer-title">Buy 3 Get 1 Free</h3>
            <p className="offer-description">
              Mix and match any drinks. Valid until end of month.
            </p>
            <button className="offer-cta">
              <span>Claim Offer</span>
              <div className="offer-sparkle">✨</div>
            </button>
          </div>
          <div className="offer-visual">
            <div className="offer-coffee">☕</div>
            <div className="offer-gift">🎁</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu {
          padding: 6rem 0;
          background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1A237E 100%);
          position: relative;
          overflow: hidden;
        }
        
        .menu-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }
        
        .floating-ingredient {
          position: absolute;
          font-size: 2rem;
          animation: float 8s ease-in-out infinite;
          opacity: 0.6;
        }
        
        .i1 { top: 10%; left: 5%; animation-delay: 0s; }
        .i2 { top: 20%; right: 10%; animation-delay: 2s; }
        .i3 { bottom: 30%; left: 15%; animation-delay: 4s; }
        .i4 { bottom: 20%; right: 5%; animation-delay: 6s; }
        
        .background-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: var(--accent-purple);
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
        }
        
        .container {
          position: relative;
          z-index: 2;
        }
        
        /* Menu Header */
        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4rem;
        }
        
        .header-content {
          flex: 1;
        }
        
        .section-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .title-gradient {
          background: linear-gradient(45deg, var(--vibrant-yellow), var(--primary-orange), var(--accent-purple));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          background-size: 200% auto;
          animation: textShine 3s ease-in-out infinite alternate;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          max-width: 500px;
        }
        
        .menu-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary-teal);
          font-weight: 600;
        }
        
        .stat-icon {
          color: var(--vibrant-yellow);
        }
        
        /* Cart Summary */
        .cart-summary {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
        }
        
        .cart-summary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }
        
        .cart-icon-wrapper {
          position: relative;
          font-size: 1.5rem;
          color: var(--primary-orange);
        }
        
        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--rich-red);
          color: white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          animation: pulse 2s infinite;
        }
        
        .cart-text {
          color: white;
          font-weight: 600;
        }
        
        /* Category Navigation */
        .category-navigation {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        
        .category-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid transparent;
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
          position: relative;
          overflow: hidden;
        }
        
        .category-tab:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-3px);
        }
        
        .category-tab.active {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--category-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px color-mix(in srgb, var(--category-color) 30%, transparent);
        }
        
        .tab-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .tab-label {
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
        }
        
        .tab-indicator {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: var(--category-color);
          transition: width 0.3s var(--transition-bounce);
        }
        
        .category-tab.active .tab-indicator {
          width: 80%;
        }
        
        /* Menu Grid */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .menu-item {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--transition-bounce);
          animation: slideIn 0.6s ease-out;
        }
        
        .menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 50px color-mix(in srgb, var(--primary-orange) 20%, transparent);
        }
        
        .menu-item.popular {
          border: 2px solid var(--vibrant-yellow);
        }
        
        .menu-item.adding {
          animation: pulse 0.6s ease-in-out;
        }
        
        /* Popular Badge */
        .popular-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--gradient-gold);
          color: var(--dark-charcoal);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          z-index: 2;
        }
        
        .badge-icon {
          font-size: 0.7rem;
        }
        
        /* Favorite Button */
        .favorite-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
          z-index: 2;
        }
        
        .favorite-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .favorite-btn.active {
          background: var(--rich-red);
          color: white;
        }
        
        .heart-icon {
          font-size: 1rem;
        }
        
        /* Item Image */
        .item-image {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .item-emoji {
          font-size: 3rem;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
          z-index: 2;
          position: relative;
        }
        
        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: var(--primary-orange);
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.5;
        }
        
        /* Item Content */
        .item-content {
          text-align: center;
        }
        
        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .item-info {
          flex: 1;
          text-align: left;
        }
        
        .item-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .item-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }
        
        .item-time {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        
        .meta-icon {
          font-size: 0.7rem;
        }
        
        .item-rating {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          border-radius: 15px;
          color: var(--vibrant-yellow);
        }
        
        .rating-icon {
          font-size: 0.7rem;
        }
        
        .rating-value {
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .item-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        /* Ingredients */
        .item-ingredients {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: center;
        }
        
        .ingredient-tag {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.7rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Item Actions */
        .item-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .item-price {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          color: white;
        }
        
        .price-currency {
          font-size: 1rem;
          color: var(--vibrant-yellow);
          font-weight: 600;
        }
        
        .price-amount {
          font-size: 2rem;
          font-weight: 800;
          font-family: 'Montserrat', sans-serif;
          background: var(--gradient-sunset);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .quantity-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .quantity-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .quantity-display {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          min-width: 30px;
          text-align: center;
        }
        
        .add-to-cart-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gradient-sunset);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
          position: relative;
          overflow: hidden;
        }
        
        .add-to-cart-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
        }
        
        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.5s;
        }
        
        .add-to-cart-btn:hover .btn-glow {
          left: 100%;
        }
        
        /* Special Offer */
        .special-offer {
          background: var(--gradient-purple);
          border-radius: 25px;
          padding: 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .offer-content {
          flex: 1;
          color: white;
        }
        
        .offer-badge {
          display: inline-block;
          background: var(--vibrant-yellow);
          color: var(--dark-charcoal);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .offer-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .offer-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .offer-cta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: white;
          color: var(--accent-purple);
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s var(--transition-bounce);
        }
        
        .offer-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .offer-visual {
          display: flex;
          gap: 1rem;
          font-size: 4rem;
          animation: float 3s ease-in-out infinite;
        }
        
        .offer-coffee, .offer-gift {
          animation: float 3s ease-in-out infinite;
        }
        
        .offer-gift {
          animation-delay: 1.5s;
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
          .menu-header {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
          
          .section-title {
            font-size: 3rem;
          }
          
          .menu-stats {
            justify-content: center;
          }
          
          .menu-grid {
            grid-template-columns: 1fr;
          }
          
          .special-offer {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .category-navigation {
            gap: 0.5rem;
          }
          
          .category-tab {
            padding: 1rem 1.5rem;
          }
          
          .tab-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;