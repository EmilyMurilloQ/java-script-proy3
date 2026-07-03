import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Sobre Nosotros
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Somos Soft Consultores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un equipo de ingenieros de sistemas egresados de la Universidad Tecnológica del Perú,
            dedicados a construir software a medida para pequeñas y medianas empresas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Empezamos como un pequeño grupo de compañeros de universidad haciendo proyectos
              freelance para negocios locales. Con el tiempo notamos que muchas empresas
              pequeñas necesitaban lo mismo: un chatbot, un sistema de inventario, una tienda
              online. En vez de empezar cada proyecto desde cero, decidimos empaquetar esas
              soluciones y ofrecerlas listas para adaptar.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoy seguimos siendo un equipo pequeño, pero con procesos claros y código que
              cuidamos como si fuera para nosotros mismos.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
            <h3 className="font-bold text-blue-700 mb-4 text-lg">Lo que nos importa</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Código limpio y fácil de mantener, no plantillas genéricas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Comunicación directa con el cliente durante todo el proyecto.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span>Soporte real después de la entrega, no solo durante la venta.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            ¿Qué tipo de soluciones ofrecemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">Chatbots</h3>
              <p className="text-gray-600 text-sm">
                Automatización de atención al cliente por WhatsApp y redes sociales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-gray-900 mb-2">Inventarios</h3>
              <p className="text-gray-600 text-sm">
                Control de stock para tiendas y negocios con una o varias sucursales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="font-bold text-gray-900 mb-2">E-commerce</h3>
              <p className="text-gray-600 text-sm">
                Tiendas online con pasarela de pagos y catálogo administrable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">¿Tienes un proyecto en mente?</h2>
          <p className="mb-6">Cuéntanos qué necesitas y te ayudamos a encontrar la solución.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
