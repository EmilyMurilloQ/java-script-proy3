#  E-Commerce - Soft-Consultotes
¡Bienvenido al repositorio de nuestra tienda online! Este es un proyecto de comercio electrónico desarrollado con **React**, estilizado con **Tailwind CSS**, y estructurado de forma modular para ofrecer una experiencia de usuario fluida, rápida y responsiva.

El frontend está desplegado en **Netlify** y se conecta a un servidor/API alojado en **Render**.

---

## Características principales

* **Catálogo completo de productos:** Filtros dinámicos por categorías, precios y búsqueda en tiempo real.
* **Carrito de compras:** Adición, modificación de cantidades, aplicación de descuentos y eliminación de productos con persistencia de estado.
* **Pasarela de simulación de pago:** Formulario de Checkout validado para simular la orden de compra.
* **Enrutamiento dinámico:** Rutas protegidas y amigables utilizando `react-router-dom` (Página de detalles, carrito, confirmación, etc.).
* **Diseño adaptativo (Responsive):** Experiencia visual optimizada para móviles, tablets y computadoras gracias a Tailwind CSS.

---

## Tecnologías utilizadas

### Frontend
* **React (Vite / CRA):** Librería principal para la interfaz de usuario.
* **React Router DOM:** Manejo de rutas y navegación de la aplicación.
* **Tailwind CSS:** Framework de estilos utilitarios para un diseño moderno y rápido.
* **Axios / Fetch API:** Consumo de servicios y comunicación con el backend.

### Backend & Despliegue
* **Servidor en Render:** API encargada de proveer los datos de los productos y procesar las órdenes.
* **Netlify:** Hosting e integración continua para el cliente de React.

---

## Estructura del proyecto (Frontend)

```text
src/
├── assets/          # Imágenes, íconos y recursos estáticos
├── components/      # Componentes reutilizables (Navbar, Footer, ProductCard, etc.)
├── pages/           # Vistas principales de la aplicación (Home, Cart, Catalog, etc.)
├── routes/          # Configuración y definición de rutas
├── services/        # Archivos de comunicación con la API (productService.js)
├── styles/          # Estilos globales y configuraciones de Tailwind
├── App.jsx          # Componente principal y manejo del estado global
└── main.jsx         # Punto de entrada de la aplicación

------------