import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/catalog';
import NotFound from './pages/NotFound';
import { getProducts } from './services/productService';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productsError, setProductsError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch(() => setProductsError('No se pudo cargar el catálogo. Intenta de nuevo más tarde.'))
      .finally(() => setLoadingProducts(false));
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleCheckout = (total) => {
    console.log('Procesando pago de:', total);
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <Navbar cartCount={cartCount} />
        
        <main className="app-main">
          {loadingProducts ? (
            <p className="text-center p-3">Cargando catálogo...</p>
          ) : productsError ? (
            <p className="text-center p-3">{productsError}</p>
          ) : (
            <Routes>
              <Route
                path="/"
                element={<Home products={products} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/products"
                element={<Products products={products} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/product/:id"
                element={<ProductDetail products={products} onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cartItems={cart}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveFromCart}
                    onCheckout={handleCheckout}
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <Checkout
                    cartItems={cart}
                    total={calculateCartTotal()}
                  />
                }
              />
              <Route
                path="/order-confirmation/:orderNumber"
                element={
                  <OrderConfirmation
                    cartItems={cart}
                    total={calculateCartTotal()}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catalog" element={<Catalog products={products} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </main>

        {isModalOpen && selectedProduct && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-title">¡Producto añadido!</h3>
              <p className="modal-message">Se ha agregado al carrito de compras.</p>
              
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
                <button onClick={() => setIsModalOpen(false)} className="btn-secondary">
                  Seguir comprando
                </button>
                <Link to="/cart" onClick={() => setIsModalOpen(false)} className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  Ir al carrito
                </Link>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;