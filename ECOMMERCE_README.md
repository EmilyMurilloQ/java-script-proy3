# E-Shop - E-Commerce en React

Un completo sistema de e-commerce desarrollado con React, React Router y CSS moderno.

## 📦 Características

### ✅ Componentes Principales
- **Navbar** - Barra de navegación con contador de carrito
- **Footer** - Pie de página con información y enlaces
- **ProductCard** - Tarjeta de producto con información y botones
- **CartItem** - Item individual en el carrito de compras
- **Filter** - Panel de filtros (categoría, precio, búsqueda)

### 📄 Páginas Implementadas
- **Home** - Página principal con productos destacados
- **Products** - Catálogo completo con filtros
- **ProductDetail** - Detalle de producto individual
- **Cart** - Carrito de compras con resumen
- **Checkout** - Formulario de compra y pago
- **OrderConfirmation** - Confirmación de pedido

### 🎨 Características del Diseño
- Diseño responsivo (mobile, tablet, desktop)
- Interfaz moderna y amigable
- Colores personalizados (#4CAF50 verde principal, #333 oscuro)
- Animaciones suaves
- Validación de formularios

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── CartItem.js
│   └── Filter.js
├── pages/
│   ├── Home.js
│   ├── Products.js
│   ├── ProductDetail.js
│   ├── Cart.js
│   ├── Checkout.js
│   └── OrderConfirmation.js
├── styles/
│   ├── Navbar.css
│   ├── Footer.css
│   ├── ProductCard.css
│   ├── CartItem.css
│   ├── Filter.css
│   └── Pages.css
├── data/
│   └── products.js
├── App.js
└── index.js
```

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Instalar React Router (si no está instalado)
```bash
npm install react-router-dom
```

### 3. Ejecutar la aplicación
```bash
npm start
```

La aplicación se abrirá en `http://localhost:3000`

## 📱 Rutas Disponibles

| Ruta | Descripción |
|------|-------------|
| `/` | Página de inicio |
| `/products` | Catálogo de productos |
| `/product/:id` | Detalle de un producto |
| `/cart` | Carrito de compras |
| `/checkout` | Página de pago |
| `/order-confirmation/:orderNumber` | Confirmación de pedido |

## 💳 Funcionalidades

### Carrito de Compras
- ✅ Agregar productos
- ✅ Actualizar cantidad
- ✅ Eliminar productos
- ✅ Resumen con subtotal, impuestos y envío
- ✅ Envío gratis en compras mayores a $50

### Filtros
- ✅ Búsqueda por nombre
- ✅ Filtro por categoría
- ✅ Rango de precio

### Checkout
- ✅ Formulario de envío
- ✅ Opciones de pago (Tarjeta, PayPal, Transferencia)
- ✅ Validación de datos
- ✅ Resumen del pedido

## 📊 Datos de Ejemplo

El proyecto incluye 12 productos de ejemplo en `src/data/products.js`:
- Electrónica (Laptop, Smartphone, Tablet, Monitor, Webcam)
- Accesorios (Mochila, Mouse, Teclado, Powerbank)
- Fotografía (Cámara Digital)
- Wearables (Reloj Inteligente)

Cada producto incluye:
- ID único
- Nombre y categoría
- Precio original y actual
- Descuentos
- Calificación y reseñas
- Imagen (placeholder)
- Descripción completa
- SKU, peso y dimensiones
- Stock disponible

## 🛠️ Personalización

### Cambiar colores principales
Busca en los archivos CSS las siguientes clases y cambia los valores:
- `#4CAF50` - Color verde principal
- `#333` - Color oscuro
- `#667eea` - Color gradiente

### Agregar más productos
Edita `src/data/products.js` y agrega nuevos productos siguiendo la estructura existente.

### Cambiar imágenes
Reemplaza las URLs de `https://via.placeholder.com/300x300?text=...` con tus propias imágenes.

## 📝 Notas Importantes

- El carrito se almacena en el estado de React (no persiste al recargar)
- Para persistencia real, intégra con localStorage o una base de datos
- El checkout es un simulador (no procesa pagos reales)
- Las imágenes usan placeholders (reemplaza con URLs reales)

## 🔄 Próximas Mejoras Recomendadas

- [ ] Persistencia del carrito con localStorage
- [ ] Integración con API real de productos
- [ ] Sistema de autenticación de usuarios
- [ ] Historial de órdenes
- [ ] Integración de pasarelas de pago reales
- [ ] Reviews y calificaciones de usuarios
- [ ] Wishlist/Favoritos
- [ ] Sistema de cupones y promociones
- [ ] Chat de soporte en vivo
- [ ] Análisis de compra

## 📄 Licencia

Proyecto de prueba para propósitos educativos.

---

**Creado con ❤️ usando React**
