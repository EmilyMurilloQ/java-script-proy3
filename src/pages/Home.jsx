import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = ({ products, onAddToCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleAddAndClose = (product) => {
    onAddToCart(product);
    setShowModal(false);
  };

  const productsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / productsPerSlide);
  const currentProducts = products.slice(
    currentSlide * productsPerSlide,
    (currentSlide + 1) * productsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="home-page">
      <section className="hero-section bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Soluciones Tecnológicas Listas
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Adquiere el Software que tu Negocio Necesita
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Soluciones digitales modernas, pre-construidas y escalables. Elige tu sistema, añádelo al carrito y automatiza tu empresa hoy.
              </p>
              <div className="flex gap-4 flex-col sm:flex-row">
                <Link
                  to="/products"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center"
                >
                  Ir a la Tienda
                </Link>
                <Link
                  to="/catalog"
                  className="inline-block border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300 text-center shadow-sm"
                >
                  Ver Catálogo 
                </Link>
              </div>
            </div>
            <div className="hidden md:block text-center">
              <img
                src="https://informatica.imagenes.baifos-serviciosinformatica.com.es/2023/11/desarrollo-aplicaciones-moviles.png"
                alt="Software Solutions"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features-section py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Despliegue Rápido</h3>
              <p className="text-gray-600 text-sm">Tu software configurado e instalado en tiempo récord.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Garantía Segura</h3>
              <p className="text-gray-600 text-sm">Código robusto con altos estándares de seguridad y protección.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Escalable</h3>
              <p className="text-gray-600 text-sm">Preparado para añadir módulos conforme tu empresa crezca.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Soporte Incluido</h3>
              <p className="text-gray-600 text-sm">Acompañamiento post-venta directo por ingenieros UTP.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions-section" className="solutions-section py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Nuestras Soluciones Destacadas</h2>
                <p className="text-gray-600">Lleva tu negocio al siguiente nivel con precios transparentes.</p>
              </div>
              <Link
                to="/products"
                className="hidden md:inline-block text-blue-600 font-bold hover:text-blue-800 transition-colors"
              >
                Ver todas las ofertas →
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative bg-gray-100 h-40 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.discount && (
                      <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-center mb-2 text-gray-900">{product.name}</h4>
                    <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">{product.description}</p>

                    <div className="text-center mb-4">
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through text-sm">USD {product.originalPrice.toFixed(2)}</span>
                      )}
                      <h3 className="text-2xl font-bold text-blue-600 mb-1">USD {product.price.toFixed(2)}</h3>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition-colors"
                      >
                        🛒 Añadir al Carrito
                      </button>
                      <button
                        onClick={() => handleSelectProduct(product)}
                        className="w-full border border-gray-300 text-gray-700 py-2 rounded font-bold hover:bg-gray-50 transition-colors"
                      >
                        Ver detalles
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalSlides > 1 && (
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
                  aria-label="Anterior"
                >
                  ←
                </button>
                <span className="text-gray-600 font-bold">
                  {currentSlide + 1} / {totalSlides}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900 transition-colors"
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="promotion-banner bg-blue-600 text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <h5 className="text-xl font-bold mb-2">🎉 ¡Promoción por Lanzamiento!</h5>
          <p className="text-lg">
            Lleva 2 o más soluciones de software a tu carrito y recibe un <strong>15% de descuento automático</strong> en tu orden total.
          </p>
        </div>
      </section>

      <section id="about" className="about-section py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Respaldo de Profesionales UTP</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Somos un equipo de ingenieros de sistemas egresados de la <strong>Universidad Tecnológica del Perú</strong>. Unimos nuestra experiencia corporativa para empaquetar plataformas de software comerciales de primer nivel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No compras plantillas genéricas; adquieres arquitecturas limpias, escalables y con código garantizado bajo altos estándares técnicos.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h5 className="font-bold text-blue-600 mb-4 text-lg flex items-center gap-2">
                ✓ ¿Qué incluye cada compra?
              </h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Instalación en tu servidor / hosting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Manuales de administración de datos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>Licencia perpetua de uso comercial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>3 meses de soporte técnico ante fallos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="bg-gray-100 px-6 py-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{selectedProduct.name}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>

              <div className="bg-blue-50 p-4 rounded mb-6">
                <p className="text-gray-600 text-sm font-semibold mb-2 uppercase">Inversión Final del Software:</p>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">USD {selectedProduct.price.toFixed(2)}</h3>
                <p className="text-green-600 text-sm font-bold">
                  💳 Pago único, sin mensualidades obligatorias
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleAddAndClose(selectedProduct)}
                  className="bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors"
                >
                  🛒 Agregar
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="border border-gray-300 text-gray-700 py-3 rounded font-bold hover:bg-gray-50 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
