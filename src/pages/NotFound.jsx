import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-16">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Página no encontrada</h2>
        <p className="text-gray-600 mb-8">
          La página que buscas no existe o fue movida a otra dirección.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
