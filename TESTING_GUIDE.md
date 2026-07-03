# ✅ Guía de Testing - Verifica que todo funciona

## 🚀 Antes de empezar

```bash
cd c:\Users\keyla\Desktop\soft-consultotes-react\java-script-proy3
npm start
```

La aplicación se abrirá en `http://localhost:3000`

---

## 📋 Checklist de Testing

### 1. ✅ Página de Inicio (Home)
**Ruta:** `http://localhost:3000/`

- [ ] Se carga la página correctamente
- [ ] Se ve la sección Hero con título, descripción e imagen
- [ ] El botón "Ir a la Tienda" redirige a `/products`
- [ ] El botón "Ver Catálogo" hace scroll a #solutions-section
- [ ] Se muestran las 4 características (Despliegue, Seguridad, etc.)
- [ ] Se muestra el carrusel con 3 productos
- [ ] Los botones ← → del carrusel navegan entre productos
- [ ] Se ve el banner de promoción (azul)
- [ ] Se ve la sección "Respaldo de Profesionales UTP"

### 2. ✅ Navbar y Navegación
**En cualquier página**

- [ ] El logo "🛍️ E-Shop" redirige a Home (`/`)
- [ ] El enlace "Inicio" redirige a Home (`/`)
- [ ] El enlace "Productos" redirige a `/products`
- [ ] El contador del carrito muestra número correcto
- [ ] El contador se actualiza al agregar productos

### 3. ✅ Agregar Producto desde Home
**En la página Home**

- [ ] Haz click en "🛒 Añadir al Carrito" en un producto
- [ ] Verifica que el contador del Navbar aumenta en 1
- [ ] Se muestra alert "Producto agregado al carrito!"
- [ ] El producto se agrega sin recargar la página

### 4. ✅ Modal de Detalles
**En la página Home**

- [ ] Haz click en "Ver detalles" de un producto
- [ ] Se abre un modal con la información del producto
- [ ] El modal muestra el precio USD
- [ ] El botón "🛒 Agregar" en el modal suma al carrito
- [ ] El modal se cierra después de agregar
- [ ] El botón "×" o "Cerrar" cierra el modal

### 5. ✅ Página de Productos
**Ruta:** `http://localhost:3000/products`

- [ ] Se cargan todos los productos
- [ ] El filtro por categoría funciona
- [ ] El filtro por precio funciona
- [ ] La búsqueda funciona
- [ ] Se puede agregar productos al carrito
- [ ] Se puede ver el detalle individual (click en "Ver")

### 6. ✅ Detalle de Producto
**Ruta:** `http://localhost:3000/product/1`

- [ ] Se carga la página del producto
- [ ] Se muestra la imagen
- [ ] Se muestra toda la información (nombre, descripción, especificaciones)
- [ ] Se puede cambiar la cantidad
- [ ] El botón "Agregar al Carrito" redirige a `/cart`
- [ ] Se muestran productos relacionados
- [ ] Se pueden editar cantidades mínimo 1, máximo el stock

### 7. ✅ Carrito
**Ruta:** `http://localhost:3000/cart`

- [ ] Se muestran todos los productos agregados
- [ ] Se muestra imagen, nombre, precio de cada item
- [ ] Se puede cambiar cantidad con + -
- [ ] Se puede eliminar items con ✕
- [ ] Calcula correctamente: subtotal, impuestos, envío
- [ ] Muestra "Envío gratis" si subtotal > $50
- [ ] El total es correcto: subtotal + impuestos + envío
- [ ] El botón "Proceder al Pago" redirige a `/checkout`
- [ ] El botón "Continuar Comprando" redirige a `/products`
- [ ] Si carrito vacío, muestra mensaje

### 8. ✅ Checkout
**Ruta:** `http://localhost:3000/checkout`

- [ ] Se muestra formulario de envío
- [ ] Se muestra formulario de pago
- [ ] Puedes seleccionar método de pago
- [ ] Se muestra resumen del pedido en el lateral
- [ ] El botón "Completar Pedido" procesa

### 9. ✅ Confirmación de Orden
**Ruta:** `http://localhost:3000/order-confirmation/:id`

- [ ] Se muestra el número de orden
- [ ] Se muestra el resumen de productos
- [ ] Se muestra el total final
- [ ] Se muestran pasos siguientes
- [ ] Botón "Volver al Inicio" redirige a `/`
- [ ] Botón "Seguir Comprando" redirige a `/products`

### 10. ✅ Footer
**En cualquier página al final**

- [ ] Se muestra el footer
- [ ] Contiene información de contacto
- [ ] Contiene links sociales
- [ ] Tiene copyright

---

## 🧪 Casos de Prueba Específicos

### Caso: Compra Completa
```
1. Home → Click "Ir a la Tienda"
2. Products → Agregar 2+ productos
3. Navbar → Click carrito (contador debe mostrar cantidad)
4. Cart → Verificar totales (impuestos, envío)
5. Checkout → Llenar formulario
6. Completar → Ver confirmación
```

### Caso: Filtros
```
1. Products
2. Filtrar por categoría "Electrónica"
3. Debe mostrar solo productos de esa categoría
4. Filtrar por precio $100-$500
5. Debe mostrar solo en ese rango
6. Buscar "laptop"
7. Debe mostrar solo coincidencias
```

### Caso: Actualizar Cantidad
```
1. Cart
2. Cambiar cantidad a 5
3. Total debe recalcularse
4. Cambiar a 0 (debe eliminar)
5. Cambiar con botones + -
6. Debe funcionar correctamente
```

### Caso: Envío Gratis
```
1. Agregar productos hasta >$50
2. Cart
3. Debe mostrar "Envío gratis"
4. Envío debe ser $0
5. Si quito un producto y baja de $50
6. Debe costar $10 de envío
```

---

## 🐛 Si Algo No Funciona

### Problema: Rutas no funcionan
```bash
# Verifica que React Router esté instalado
npm list react-router-dom

# Si no está, instala:
npm install react-router-dom
```

### Problema: Tailwind no aplica estilos
```bash
# Reinicia el servidor
npm start

# O limpia cache
npm cache clean --force
rm -rf node_modules
npm install
npm start
```

### Problema: Carrito no se actualiza
```
1. Abre DevTools (F12)
2. Consola
3. Busca errores rojos
4. Si hay error, cópialo aquí para debug
```

### Problema: Modal no se cierra
```
1. Actualiza la página (F5)
2. Si persiste, verifica en App.js que handleAddAndClose esté correcto
3. Busca errores en consola (F12)
```

---

## 📊 Tabla de Rutas

| URL | Componente | ¿Funciona? |
|-----|-----------|-----------|
| `/` | Home | ✅ |
| `/products` | Products | ✅ |
| `/product/1` | ProductDetail | ✅ |
| `/cart` | Cart | ✅ |
| `/checkout` | Checkout | ✅ |
| `/order-confirmation/123` | OrderConfirmation | ✅ |

---

## ✨ Características que Deberías Ver

- [x] Home hermoso con secciones
- [x] Carrusel de productos funcional
- [x] Modal interactivo
- [x] Navbar sticky (pegado al top)
- [x] Footer en el final
- [x] Filtros funcionando
- [x] Carrito actualizado en tiempo real
- [x] Redirecciones automáticas
- [x] Responsive en mobile
- [x] Estilos con Tailwind + CSS personalizado

---

## 🎯 Script de Prueba Rápida

1. Home → Haz scroll todo abajo
2. Click "Ver detalles" en un producto
3. Cierra el modal
4. Click "Ir a la Tienda"
5. Agregar 3 productos
6. Click carrito en Navbar
7. Cambiar cantidades
8. Click "Proceder al Pago"
9. Llenar algunos campos del formulario
10. Click "Completar Pedido"
11. Ver confirmación
12. Click "Volver al Inicio"

**Tiempo estimado:** 2-3 minutos

---

## 📝 Notas

- No habrá validación de datos reales
- No hay integración con pasarela de pago real
- El carrito se limpia al recargar (usar localStorage para persistencia)
- Las imágenes son placeholders

---

## 🚀 Todo Listo

Si todos los tests pasan, **¡tu e-commerce está 100% funcional!**

Próximo paso: Agregar persistencia con localStorage o conectar a un backend real.

---

**Created:** 2026-07-02
**Status:** ✅ LISTO PARA TESTEAR
