import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import { mockProducts } from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

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
          <Routes>
            <Route 
              path="/" 
              element={<Home products={mockProducts} onAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/products" 
              element={<Products products={mockProducts} onAddToCart={handleAddToCart} />} 
            />
            <Route 
              path="/product/:id" 
              element={<ProductDetail products={mockProducts} onAddToCart={handleAddToCart} />} 
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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
