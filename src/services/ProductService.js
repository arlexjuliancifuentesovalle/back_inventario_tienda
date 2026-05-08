class ProductService {
  constructor(productRepository) {
    // Inyección de dependencias
    this.productRepository = productRepository;
  }

  getAllProducts() {
    return this.productRepository.findAll();
  }

  getProductById(id) {
    const product = this.productRepository.findById(Number(id));
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

  createProduct(productData) {
    if (!productData.name || productData.price == null || productData.quantity == null) {
      throw new Error('Faltan datos obligatorios (name, price, quantity)');
    }
    return this.productRepository.create(productData);
  }

  updateProduct(id, productData) {
    const updatedProduct = this.productRepository.update(Number(id), productData);
    if (!updatedProduct) {
      throw new Error('Producto no encontrado');
    }
    return updatedProduct;
  }

  deleteProduct(id) {
    const isDeleted = this.productRepository.delete(Number(id));
    if (!isDeleted) {
      throw new Error('Producto no encontrado');
    }
    return true;
  }
}

module.exports = ProductService;
