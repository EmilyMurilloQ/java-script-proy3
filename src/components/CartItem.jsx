import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="grid grid-cols-[60px_1fr_40px] sm:grid-cols-[80px_1fr_120px_100px_50px] gap-2 sm:gap-4 items-center p-4 border border-border rounded bg-white">
      <div className="w-20 h-20 rounded overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div>
        <h3 className="text-base font-bold mb-1">{item.name}</h3>
        <p className="text-gray-400 text-sm my-1">{item.category}</p>
        <p className="text-primary font-bold my-1">${item.price}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center border border-border rounded overflow-hidden">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="flex-1 w-full py-2 bg-gray-100 font-bold hover:bg-gray-200 transition-colors"
        >
          -
        </button>
        <input
          type="number"
          value={item.quantity}
          readOnly
          className="flex-1 w-full border-none text-center py-2 font-bold"
        />
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="flex-1 w-full py-2 bg-gray-100 font-bold hover:bg-gray-200 transition-colors"
        >
          +
        </button>
      </div>

      <div className="hidden sm:block text-right font-bold text-lg text-gray-800">
        <p className="m-0">${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        title="Eliminar del carrito"
        className="bg-red-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base font-bold hover:bg-red-600 transition-colors"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
