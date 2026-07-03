import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>E-Shop</h3>
          <p>Tu tienda online de confianza</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@eshop.com</p>
          <p>Teléfono: +1 234 567 8900</p>
        </div>
        
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 E-Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
