import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const inputClass = 'w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-green-100';
const labelClass = 'block mb-1 font-bold text-gray-800 text-sm';

const Checkout = ({ cartItems, total }) => {
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasPromotion = cartItems.length >= 2;
  const discount = hasPromotion ? subtotal * 0.15 : 0;
  const discountedSubtotal = subtotal - discount;
  const tax = discountedSubtotal * 0.08;
  const shipping = discountedSubtotal > 50 ? 0 : 10;
  const finalTotal = discountedSubtotal + tax + shipping;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'credit-card'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrderNumber = `ORD-${Date.now()}`;
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    setTimeout(() => {
      navigate(`/order-confirmation/${newOrderNumber}`);
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center p-12 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Procesando tu pedido...</h2>
          <p className="mb-4">Número de pedido: {orderNumber}</p>
          <div className="inline-block w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Finalizar Compra</h1>

          <form onSubmit={handleSubmit}>
            <fieldset className="border border-border rounded-lg p-6 mb-8">
              <legend className="px-2 font-bold text-gray-800">Información de Envío</legend>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className={labelClass}>Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className={labelClass}>Apellido</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="email" className={labelClass}>Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className={labelClass}>Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="address" className={labelClass}>Dirección</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Calle y número"
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="city" className={labelClass}>Ciudad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="postalCode" className={labelClass}>Código Postal</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="border border-border rounded-lg p-6 mb-8">
              <legend className="px-2 font-bold text-gray-800">Información de Pago</legend>

              <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
                {hasPromotion
                  ? '🎉 Tu compra cumple con la promoción: 15% de descuento automático.'
                  : 'Agrega 2 o más soluciones para recibir 15% de descuento automático.'}
              </div>

              <div className="mb-4">
                <label className={labelClass}>Método de Pago</label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                    />
                    Tarjeta de Crédito
                  </label>
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                    />
                    PayPal
                  </label>
                  <label className="flex items-center gap-2 font-normal">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="transfer"
                      checked={formData.paymentMethod === 'transfer'}
                      onChange={handleInputChange}
                    />
                    Transferencia Bancaria
                  </label>
                </div>
              </div>

              {formData.paymentMethod === 'credit-card' && (
                <>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className={labelClass}>Número de Tarjeta</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required={formData.paymentMethod === 'credit-card'}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label htmlFor="expiryDate" className={labelClass}>Fecha de Vencimiento</label>
                      <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/AA"
                        required={formData.paymentMethod === 'credit-card'}
                        className={inputClass}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="cvv" className={labelClass}>CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        required={formData.paymentMethod === 'credit-card'}
                        maxLength="3"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </>
              )}
            </fieldset>

            <div className="mt-6 rounded-lg border border-border bg-gray-50 p-4 text-sm text-gray-700">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Descuento:</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900">
                <span>Total final:</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              Completar Pedido
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg h-fit lg:sticky lg:top-20">
          <h2 className="text-lg font-bold mb-4">Resumen del Pedido</h2>
          <div className="mb-4 max-h-72 overflow-y-auto">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm pb-2 mb-2 border-b border-border">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-bold text-lg my-4 py-4 border-t-2 border-b-2 border-border">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="text-xs text-gray-500 mt-4">
            <p>🔒 Tu información está protegida con encriptación SSL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
