const express = require('express');
const cors = require('cors');
const ProductRepository = require('./src/repositories/ProductRepository');
const ProductService = require('./src/services/ProductService');
const ProductController = require('./src/controllers/ProductController');
const createProductRouter = require('./src/routes/product.routes');

const app = express();
// Usa el puerto asignado por el servidor o el 3000 por defecto
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors()); // Permite peticiones desde un Frontend en otro dominio
app.use(express.json());

// ============================================
// INYECCIÓN DE DEPENDENCIAS (Dependency Inversion)
// ============================================

// 1. Instanciamos el Repositorio (Maneja los datos en memoria)
const productRepository = new ProductRepository();

// 2. Instanciamos el Servicio, inyectándole el repositorio
const productService = new ProductService(productRepository);

// 3. Instanciamos el Controlador, inyectándole el servicio
const productController = new ProductController(productService);

// 4. Creamos el Router, inyectándole el controlador
const productRouter = createProductRouter(productController);

// ============================================
// CONFIGURACIÓN DE RUTAS
// ============================================

// Montamos las rutas de productos bajo el prefijo /api/products
app.use('/api/products', productRouter);

// Ruta base
app.get('/', (req, res) => {
  res.send('API de Inventario Funcionando 🚀');
});

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
