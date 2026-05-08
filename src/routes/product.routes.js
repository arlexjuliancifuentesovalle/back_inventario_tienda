const { Router } = require('express');

// Función factory para configurar las rutas pasándole el controlador inyectado
function createProductRouter(productController) {
  const router = Router();

  // Endpoints independientes, cada uno delega en un método específico del controlador (SRP)
  router.get('/', productController.getAll);
  router.get('/:id', productController.getById);
  router.post('/', productController.create);
  router.put('/:id', productController.update);
  router.delete('/:id', productController.delete);

  return router;
}

module.exports = createProductRouter;
