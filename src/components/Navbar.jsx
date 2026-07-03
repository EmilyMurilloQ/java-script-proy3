import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold text-white hover:text-primary transition-colors flex items-center gap-2">
          🛍️ E-Shop
        </Link>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 list-none m-0 p-0">
          <li>
            <Link to="/" className="text-white font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white font-medium hover:text-primary transition-colors">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white font-medium hover:text-primary transition-colors">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white font-medium hover:text-primary transition-colors">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-white font-medium hover:text-primary transition-colors">
              🛒 Carrito ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
