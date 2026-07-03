import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.discount && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        
        <div className="product-rating">
          {'⭐'.repeat(product.rating)}
          <span className="rating-text">({product.reviews} reseñas)</span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <div className="product-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
          </div>
          
          <div className="product-actions">
            <Link to={`/product/${product.id}`} className="btn btn-secondary">
              Ver
            </Link>
            <button
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
