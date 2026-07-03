import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-white h-full flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.discount && (
          <span className="absolute top-2.5 right-2.5 bg-red-500 text-white px-2.5 py-1 rounded font-bold text-xs">
            -{product.discount}%
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 mb-1 leading-snug">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-2">{product.category}</p>

        <div className="flex items-center gap-2 mb-2 text-sm">
          {'⭐'.repeat(product.rating)}
          <span className="text-gray-400 text-xs">({product.reviews} reseñas)</span>
        </div>

        <p className="text-gray-500 text-sm mb-2 flex-1 line-clamp-2">{product.description}</p>

        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="line-through text-gray-400 text-sm">${product.originalPrice}</span>
            )}
            <span className="text-xl font-bold text-primary">${product.price}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to={`/product/${product.id}`}
              className="bg-blue-500 text-white text-center py-2 rounded font-bold text-sm hover:bg-blue-600 transition-colors"
            >
              Ver
            </Link>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-primary text-white py-2 rounded font-bold text-sm hover:bg-green-600 transition-colors"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
