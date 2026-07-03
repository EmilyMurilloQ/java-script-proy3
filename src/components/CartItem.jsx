import React from 'react';
import '../styles/CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <p className="item-price">${item.price}</p>
      </div>
      
      <div className="item-quantity">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
        <input type="number" value={item.quantity} readOnly />
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      
      <div className="item-total">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      
      <button
        className="btn-remove"
        onClick={() => onRemove(item.id)}
        title="Eliminar del carrito"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
