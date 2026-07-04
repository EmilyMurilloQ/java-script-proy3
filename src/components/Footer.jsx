import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 pt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
                  <Link 
          to="/home" 
          className="text-xl font-black tracking-wider text-cyan-400 hover:text-cyan-300 transition-all duration-300 flex items-center font-mono"
        >
          <span className="text-gray-500 mr-1 opacity-70">&lt;</span>
          <span className="text-3xl text-white">S</span>
          <span className="text-cyan-400 lowercase mr-2 text-xl">oft</span>
          <span className="text-3xl text-white">C</span>
          <span className="text-cyan-400 lowercase text-xl">onsultores</span>
          <span className="text-gray-500 ml-2 opacity-70">/&gt;</span>
        </Link>
          <p className="leading-relaxed">Ingenieros a tu servicio</p>
        </div>

        <div>
          <h4 className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Enlaces</h4>
          <ul className="space-y-2 list-none p-0 m-0">
            <li><a href="#productos" className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Productos</a></li>
            <li><a href="#contacto" className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Contacto</a></li>
            <li><a href="#nosotros" className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Contacto</h4>
          <p>Email: info@softconsultores.com</p>
          <p>Teléfono: 999 999 999 </p>
        </div>

        <div>
          <h4 className="text-gray-300 font-medium hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 pb-1">Síguenos</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/softconsultores" className="hover:text-primary transition-colors">Facebook</a>
            <a href="https://twitter.com/softconsultores" className="hover:text-primary transition-colors">Twitter</a>
            <a href="https://instagram.com/softconsultores" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-sm m-0">&copy; Ing. Keyla Mialu Jimenez Gallegos</p>
        <p className="text-sm m-0">&copy; Ing. Emily Ariana Murillo Quisp</p>
        <p className="text-sm m-0">&copy; Ing. José Gabriel García Huamán</p>
      </div>
    </footer>
  );
};

export default Footer;
