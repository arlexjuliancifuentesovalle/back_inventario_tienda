class ProductController {
  constructor(productService) {
    this.productService = productService;
    
    // Bindear los métodos para no perder el contexto de 'this' cuando sean llamados por Express
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  getAll(req, res) {
    try {
      const products = this.productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  getById(req, res) {
    try {
      const product = this.productService.getProductById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  create(req, res) {
    try {
      const newProduct = this.productService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  update(req, res) {
    try {
      const updatedProduct = this.productService.updateProduct(req.params.id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  delete(req, res) {
    try {
      this.productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = ProductController;
