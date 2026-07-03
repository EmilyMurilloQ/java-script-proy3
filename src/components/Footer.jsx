import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16 pt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-primary font-bold mb-4">E-Shop</h3>
          <p className="leading-relaxed">Tu tienda online de confianza</p>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-4">Enlaces</h4>
          <ul className="space-y-2 list-none p-0 m-0">
            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="#productos" className="hover:text-primary transition-colors">Productos</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-4">Contacto</h4>
          <p>Email: info@eshop.com</p>
          <p>Teléfono: +1 234 567 8900</p>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-4">Síguenos</h4>
          <div className="flex gap-4">
            <a href="#facebook" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#twitter" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#instagram" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-6 border-t border-gray-700">
        <p className="text-sm m-0">&copy; 2026 E-Shop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
