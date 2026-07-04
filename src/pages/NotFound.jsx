import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.css';

const NotFound = () => {
  return (
    <div className="error-wrapper flex items-center justify-center min-h-screen bg-white relative px-3 select-none">
      
      <div className="tech-grid-bg"></div>

      <div className="text-center card-clean-error p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 bg-white relative z-10">
        
        <div className="laptop-animation-container mb-6">
          <div className="laptop-illustration" aria-hidden="true">
            <div className="laptop-shadow"></div>
            <svg className="laptop-svg" viewBox="0 0 96 64" role="img" aria-label="Laptop">
              <rect x="8" y="8" width="72" height="44" rx="6" className="laptop-body"></rect>
              <rect x="16" y="16" width="56" height="28" rx="2" className="laptop-screen"></rect>
              <rect x="28" y="54" width="32" height="4" rx="2" className="laptop-base"></rect>
            </svg>
          </div>
        </div>

        <h2 className="fw-extrabold text-gray-900 mb-2 text-2xl md:text-3xl">
          ¡Uy! Alguien se equivocó de ruta
        </h2>
        <h5 className="text-blue-600 font-semibold mb-6 text-base md:text-lg">
          Código de estado: 404 (Dirección no encontrada)
        </h5>
        
        <p className="text-gray-500 mx-auto mb-6 lead-text text-sm md:text-base">
          No te preocupes, en <strong className="text-gray-900">Soft Consultores</strong> no dejamos que nadie se pierda. 
          El enlace que presionaste cambió de dirección o el script de navegación tuvo un salto inesperado. 
          Nosotros te ayudamos a regresar a un entorno seguro.
        </p>

        <div className="mt-2">
          <Link 
            to="/" 
            className="btn-tech-glide inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-base rounded-xl px-6 py-3.5 shadow-sm transition-all duration-200"
          >
            <i className="bi bi-house-door-fill"></i> Regresar al Home de forma segura
          </Link>
        </div>

      </div>
    </div>
  );
};


export default NotFound;
