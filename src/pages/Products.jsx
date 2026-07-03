import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import '../styles/Pages.css';

const Products = ({ products, onAddToCart }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    search: ''
  });

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange[0] && 
                          product.price <= filters.priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           product.description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [products, filters]);

  return (
    <div className="products-page">
      <div className="products-container">
        <aside className="sidebar">
          <Filter 
            onFilterChange={setFilters}
            categories={categories}
          />
        </aside>

        <main className="products-main">
          <div className="products-header">
            <h1>Catálogo de Productos</h1>
            <p className="products-count">
              Se encontraron {filteredProducts.length} productos
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No se encontraron productos que coincidan con los filtros seleccionados.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
