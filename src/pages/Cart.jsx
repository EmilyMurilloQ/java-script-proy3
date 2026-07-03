import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import '../styles/Pages.css';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + tax + shipping;

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>Parece que aún no has agregado ningún producto</p>
          <Link to="/products" className="btn btn-primary">
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          <h1>Carrito de Compras</h1>
          <div className="items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))}
          </div>
        </div>

        <div className="cart-summary">
          <h2>Resumen del Pedido</h2>
          
          <div className="summary-item">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Impuesto (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="summary-item">
            <span>Envío:</span>
            <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
          </div>

          {shipping === 0 && (
            <p className="free-shipping-message">✓ Envío gratis (compra mayor a $50)</p>
          )}
          
          <div className="summary-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button 
            className="btn btn-primary btn-large"
            onClick={handleProceedToCheckout}
          >
            Proceder al Pago
          </button>

          <Link to="/products" className="btn btn-secondary btn-large">
            Continuar Comprando
          </Link>

          <div className="cart-info">
            <p>📦 Envío a cualquier parte del país</p>
            <p>🔒 Pago 100% seguro</p>
            <p>↩️ Devuelve en 30 días sin preguntas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
