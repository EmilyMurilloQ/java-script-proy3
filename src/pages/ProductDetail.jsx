import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Pages.css';

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="not-found">
          <h2>Producto no encontrado</h2>
          <button onClick={() => navigate('/products')} className="btn btn-primary">
            Volver a Productos
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    navigate('/cart');
  };

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
          {product.discount && (
            <span className="discount-badge">-{product.discount}%</span>
          )}
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          
          <div className="detail-rating">
            {'⭐'.repeat(product.rating)}
            <span>({product.reviews} reseñas)</span>
          </div>

          <p className="detail-category">Categoría: {product.category}</p>

          <div className="detail-price">
            {product.originalPrice && (
              <span className="original-price">${product.originalPrice}</span>
            )}
            <span className="current-price">${product.price}</span>
          </div>

          <div className="detail-stock">
            <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
              {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
            </span>
          </div>

          <p className="detail-description">{product.description}</p>

          {product.stock > 0 && (
            <div className="detail-actions">
              <div className="quantity-selector">
                <label htmlFor="quantity">Cantidad:</label>
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input 
                  type="number" 
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  max={product.stock}
                />
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <button className="btn btn-primary btn-large" onClick={handleAddToCart}>
                Agregar al Carrito
              </button>
            </div>
          )}

          <div className="detail-specs">
            <h3>Especificaciones</h3>
            <ul>
              <li><strong>SKU:</strong> {product.sku}</li>
              <li><strong>Peso:</strong> {product.weight}</li>
              <li><strong>Dimensiones:</strong> {product.dimensions}</li>
            </ul>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <h2>Productos Relacionados</h2>
          <div className="products-grid">
            {relatedProducts.map((p) => (
              <div key={p.id} className="related-product-card">
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
