import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pages.css';

const Checkout = ({ cartItems, total }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit-card'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderNumber = `ORD-${Date.now()}`;
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    setTimeout(() => {
      navigate(`/order-confirmation/${newOrderNumber}`);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="order-processing">
          <h2>Procesando tu pedido...</h2>
          <p>Número de pedido: {orderNumber}</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form">
          <h1>Finalizar Compra</h1>
          
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Información de Envío</legend>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Apellido</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Calle y número"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">Ciudad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="postalCode">Código Postal</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>Información de Pago</legend>
              
              <div className="form-group">
                <label>Método de Pago</label>
                <div className="payment-methods">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    Tarjeta de Crédito
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    PayPal
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                    />
                    Transferencia Bancaria
                  </label>
                </div>
              </div>

              {formData.paymentMethod === 'credit-card' && (
                <>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Número de Tarjeta</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required={formData.paymentMethod === 'credit-card'}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiryDate">Fecha de Vencimiento</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        required={formData.paymentMethod === 'credit-card'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required={formData.paymentMethod === 'credit-card'}
                        maxLength="3"
                      />
                    </div>
                  </div>
                </>
              )}
            </fieldset>

            <button type="submit" className="btn btn-primary btn-large">
              Completar Pedido
            </button>
          </form>
        </div>

        <div className="checkout-summary">
          <h2>Resumen del Pedido</h2>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item-checkout">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="summary-total-checkout">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="security-info">
            <p>🔒 Tu información está protegida con encriptación SSL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
