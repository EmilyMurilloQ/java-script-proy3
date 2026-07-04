import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const hasPromotion = cartItems.length >= 2;
  const discount = hasPromotion ? subtotal * 0.15 : 0;
  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * 0.08;
  const total = discountedSubtotal + tax;

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center py-16 px-4 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">Parece que aún no has agregado ningún producto</p>
          <Link
            to="/products"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Carrito de Compras</h1>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg h-fit lg:sticky lg:top-20">
          <h2 className="text-lg font-bold mb-6">Resumen del Pedido</h2>

          <div className="flex justify-between mb-4 text-sm">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {hasPromotion && (
            <div className="mb-4 rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
              🎉 Lleva 2 o más soluciones y recibe 15% de descuento automático.
            </div>
          )}

          <div className="flex justify-between mb-4 text-sm">
            <span>Descuento:</span>
            <span>- ${discount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4 text-sm">
            <span>Subtotal con descuento:</span>
            <span>${discountedSubtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4 text-sm">
            <span>Impuesto (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg my-4 py-4 border-t-2 border-b-2 border-border">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleProceedToCheckout}
            className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors mb-3"
          >
            Proceder al Pago
          </button>

          <Link
            to="/products"
            className="block w-full text-center bg-blue-500 text-white py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors"
          >
            Continuar Comprando
          </Link>

          <div className="mt-6 text-xs text-gray-500 space-y-2">
            <p>� Acceso digital inmediato</p>
            <p>🔒 Pago 100% seguro</p>
            <p>↩️ Soporte y garantía incluida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
