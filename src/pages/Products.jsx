import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import '../styles/Pages.css';

const Products = ({ products, onAddToCart }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 1000],
    search: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [...new Set(products.map(p => p.category || ''))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const name = product.name || product.title || '';
      const description = product.description || product.cardDescription || '';
      const category = product.category || '';
      
      const matchesCategory = !filters.category || category === filters.category;
      const matchesPrice = product.price >= filters.priceRange[0] && 
                           product.price <= filters.priceRange[1];
      const matchesSearch = name.toLowerCase().includes(filters.search.toLowerCase()) ||
                            description.toLowerCase().includes(filters.search.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [products, filters]);

  const handleProductAdded = (product) => {
    onAddToCart(product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

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
                  onAddToCart={handleProductAdded}
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

      {isModalOpen && selectedProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <h3 className="modal-title">¡Producto añadido!</h3>
            <p className="modal-message">
              Se ha agregado al carrito de compras.
            </p>
            
            <div className="modal-product-preview">
              <img 
                src={selectedProduct.image || selectedProduct.imagenUrl} 
                alt={selectedProduct.name || selectedProduct.title} 
                className="modal-product-img" 
              />
              <div className="modal-product-info">
                <p className="modal-product-name">{selectedProduct.name || selectedProduct.title}</p>
                <span className="modal-product-category">{selectedProduct.category}</span>
                <p className="modal-product-price">${selectedProduct.price}</p>
              </div>
            </div>

            <div className="modal-actions">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="btn-secondary"
              >
                Seguir comprando
              </button>
              <Link 
                to="/cart"
                onClick={() => setIsModalOpen(false)} 
                className="btn-primary"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                Ir al carrito
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Products;