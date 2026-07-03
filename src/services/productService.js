const API_URL = 'https://json-servidor.onrender.com/products';

// La API guarda el precio "base" y el descuento aparte, pero nuestros
// componentes ya trabajan con price (precio final) + originalPrice (precio tachado)
const normalizeProduct = (item) => {
  const hasDiscount = item.discount > 0;
  const finalPrice = hasDiscount
    ? Number((item.price * (1 - item.discount / 100)).toFixed(2))
    : item.price;

  return {
    id: item.id,
    name: item.title,
    category: item.category,
    price: finalPrice,
    originalPrice: hasDiscount ? item.price : undefined,
    discount: item.discount,
    rating: 5,
    reviews: 0,
    image: item.imagenUrl,
    description: item.cardDescription,
    sku: item.id.toUpperCase(),
    weight: 'Producto digital',
    dimensions: 'No aplica',
    stock: 100,
  };
};

export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('No se pudo obtener el catálogo de productos');
  }

  const data = await response.json();
  return data.map(normalizeProduct);
};
