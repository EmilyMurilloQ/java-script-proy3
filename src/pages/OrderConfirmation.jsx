import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Pages.css';

const OrderConfirmation = ({ cartItems, total }) => {
  const { orderNumber } = useParams();
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '',
    date: '',
    estimatedDelivery: '',
    status: 'Confirmado'
  });

  useEffect(() => {
    const today = new Date();
    const deliveryDate = new Date(today.getTime() + 4 * 24 * 60 * 60 * 1000);
    
    setOrderDetails({
      orderNumber: orderNumber,
      date: today.toLocaleDateString('es-ES'),
      estimatedDelivery: deliveryDate.toLocaleDateString('es-ES'),
      status: 'Confirmado'
    });
  }, [orderNumber]);

  return (
    <div className="order-confirmation-page">
      <div className="confirmation-container">
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h1>¡Pedido Confirmado!</h1>
          <p>Gracias por tu compra. Tu pedido ha sido recibido.</p>
        </div>

        <div className="order-info">
          <div className="info-section">
            <h2>Detalles del Pedido</h2>
            <div className="info-row">
              <span>Número de Pedido:</span>
              <strong>{orderDetails.orderNumber}</strong>
            </div>
            <div className="info-row">
              <span>Fecha:</span>
              <span>{orderDetails.date}</span>
            </div>
            <div className="info-row">
              <span>Estado:</span>
              <span className="status-badge">{orderDetails.status}</span>
            </div>
            <div className="info-row">
              <span>Entrega Estimada:</span>
              <span>{orderDetails.estimatedDelivery}</span>
            </div>
          </div>

          <div className="info-section">
            <h2>Resumen de tu Compra</h2>
            <div className="items-summary">
              {cartItems.map(item => (
                <div key={item.id} className="item-summary">
                  <span>{item.name}</span>
                  <span>x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="total-summary">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
          </div>

          <div className="info-section">
            <h2>Próximos Pasos</h2>
            <ol className="steps-list">
              <li>Recibirás un correo de confirmación en breve</li>
              <li>Tu pedido será preparado en nuestro almacén</li>
              <li>Recibirás una notificación cuando sea enviado</li>
              <li>Rastrearemos tu paquete hasta tu puerta</li>
            </ol>
          </div>

          <div className="info-section">
            <h2>Necesitas Ayuda?</h2>
            <p>Si tienes alguna pregunta, contáctanos:</p>
            <p>📧 Email: support@eshop.com</p>
            <p>📞 Teléfono: +1 234 567 8900</p>
            <p>💬 Chat en línea: Disponible 24/7</p>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="btn btn-primary btn-large">
            Volver al Inicio
          </Link>
          <Link to="/products" className="btn btn-secondary btn-large">
            Seguir Comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
