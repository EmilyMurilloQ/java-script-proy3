import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const categoryMeta = {
  ecommerce: {
    title: 'Ventas Digitales & E-commerce',
    badge: 'Facturación 24/7',
    desc: 'Expande tu mercado con pasarelas de pago automatizadas y catálogos web que procesan pedidos de forma fluida.',
    icon: '🌐',
    accent: 'from-blue-600 to-cyan-500',
  },
  marketing: {
    title: 'Automatización & Marketing Digital',
    badge: 'Multiplica tus Cierres',
    desc: 'Conecta Chatbots con IA y flujos automáticos que calientan al cliente y aseguran ventas inmediatas.',
    icon: '⚡',
    accent: 'from-purple-600 to-indigo-500',
  },
  inventarios: {
    title: 'Control de Stock & Logística Express',
    badge: 'Cero Pérdidas',
    desc: 'Sincroniza almacenes y gestiona rutas con precisión para evitar quiebres de stock.',
    icon: '📦',
    accent: 'from-amber-600 to-orange-500',
  },
  gestion: {
    title: 'Gestión Comercial, CRM & POS',
    badge: 'Control Absoluto',
    desc: 'Centraliza clientes, emite comprobantes y organiza tareas desde un ecosistema profesional.',
    icon: '📊',
    accent: 'from-emerald-600 to-teal-500',
  },
  analitica: {
    title: 'Business Intelligence & Analítica',
    badge: 'Decisiones con Datos',
    desc: 'Visualiza métricas y proyecciones que ayuden a tomar decisiones comerciales firmes.',
    icon: '📈',
    accent: 'from-cyan-600 to-blue-500',
  },
  seguridad: {
    title: 'Ciberseguridad & Infraestructura',
    badge: 'Protección Blindada',
    desc: 'Protege datos, automatiza respaldos y asigna permisos por roles con mayor seguridad.',
    icon: '🔒',
    accent: 'from-red-600 to-rose-500',
  },
};

const Catalog = ({ products = [] }) => {
  const [activeCategory, setActiveCategory] = useState('ecommerce');
  const productList = Array.isArray(products) ? products : [];

  const groupedProducts = useMemo(() => {
    return Object.keys(categoryMeta).reduce((acc, key) => {
      acc[key] = productList.filter((product) => product.category === key);
      return acc;
    }, {});
  }, [productList]);

  const availableCategories = Object.entries(categoryMeta).filter(([key]) => groupedProducts[key]?.length > 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              ✨ Soluciones digitales para crecer con orden
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Explora nuestras categorías de servicios
            </h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Cada bloque reúne herramientas pensadas para impulsar ventas, automatizar procesos y fortalecer la operación de tu empresa.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {availableCategories.map(([key, meta]) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {meta.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {availableCategories.map(([key, meta]) => {
              const items = groupedProducts[key] || [];
              const isActive = activeCategory === key;

              return (
                <article
                  key={key}
                  className={`rounded-3xl border bg-white p-6 shadow-sm transition-all ${
                    isActive ? 'border-blue-500 shadow-lg ring-2 ring-blue-100' : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{meta.badge}</p>
                      <h2 className="mt-2 text-xl font-bold text-slate-900">{meta.title}</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                      {meta.icon}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">{meta.desc}</p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-700">{items.length} soluciones</span>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(key)}
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Ver ahora →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {availableCategories.length > 0 && (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Carrusel por categoría</p>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    {categoryMeta[activeCategory]?.title}
                  </h2>
                </div>
                <Link to="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Ver todos los productos →
                </Link>
              </div>

              <div className="mt-8 flex gap-4 overflow-x-auto pb-3">
                {groupedProducts[activeCategory]?.length > 0 ? (
                  groupedProducts[activeCategory].map((product) => {
                    const hasDiscount = Number(product.discount) > 0;
                    const finalPrice = hasDiscount ? Number(product.price) * (1 - Number(product.discount) / 100) : Number(product.price);

                    return (
                      <div
                        key={product.id}
                        className="min-w-[280px] max-w-[280px] flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <img
                            src={product.image || product.imagenUrl}
                            alt={product.name || product.title}
                            className="h-12 w-12 rounded-xl object-cover"
                            onError={(event) => {
                              event.target.src = 'https://cdn-icons-png.flaticon.com/512/2910/2910768.png';
                            }}
                          />
                          {hasDiscount && (
                            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600">
                              -{product.discount}%
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 text-lg font-bold text-slate-900">{product.name || product.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{product.description || product.cardDescription}</p>

                        <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Precio</p>
                            <p className="text-base font-bold text-blue-600">USD {finalPrice.toFixed(2)}</p>
                          </div>
                          <Link
                            to="/products"
                            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                          >
                            Ver más
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
                    Pronto añadiremos más soluciones para esta categoría.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Tu negocio está listo para el siguiente nivel</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Elige la categoría que mejor represente tus necesidades y empieza a organizar tu operación con herramientas claras y escalables.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/products" className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Ir a la tienda
            </Link>
            <Link to="/contact" className="rounded-full border border-slate-300 px-8 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
              Hablemos por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;