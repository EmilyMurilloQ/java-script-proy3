import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navLinkClass = 'text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1';

const Navbar = ({ cartCount, currentUser, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link
          to="/"
          className="text-xl font-black tracking-wider text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center font-mono"
        >
          <span className="text-gray-500 mr-1 opacity-70">&lt;</span>
          <span className="text-3xl text-white">S</span>
          <span className="text-cyan-400 lowercase mr-2 text-xl">oft</span>
          <span className="text-3xl text-white">C</span>
          <span className="text-cyan-400 lowercase text-xl">onsultores</span>
          <span className="text-gray-500 ml-2 opacity-70">/&gt;</span>
        </Link>

        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 list-none m-0 p-0">
          <li className="flex items-center justify-center">
            <Link to="/products" className={navLinkClass}>
              Productos
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link to="/about" className={navLinkClass}>
              Nosotros
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link to="/contact" className={navLinkClass}>
              Contacto
            </Link>
          </li>
          <li className="flex items-center justify-center">
            {currentUser ? (
              <button
                type="button"
                onClick={handleLogoutClick}
                className={`${navLinkClass} cursor-pointer border-0 bg-transparent`}
              >
                Cerrar sesión
              </button>
            ) : (
              <Link to="/login" className={navLinkClass}>
                Login
              </Link>
            )}
          </li>
          {currentUser && (
            <li className="flex items-center justify-center">
              <Link
                to="/perfil"
                title="Ver perfil"
                aria-label="Ver perfil de usuario"
                className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-700"
              >
                <span className="text-xl">👤</span>
              </Link>
            </li>
          )}
          <li className="flex items-center justify-center">
            <Link
              to="/cart"
              className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 flex items-center gap-1 bg-gray-700/50 hover:bg-gray-700 px-3 py-1.5 rounded-lg border border-gray-600 hover:border-cyan-500/50"
            >
              <span>🛒</span> Carrito
              <span className="bg-cyan-500 text-gray-900 text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                {cartCount}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
