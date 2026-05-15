class ProductService {
  constructor(productRepository) {
    // Inyección de dependencias
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    return await this.productRepository.findAll();
  }

  async getProductById(id) {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new Error('Producto no encontrado');
    }
    return product;
  }

  async createProduct(productData) {
    if (!productData.name || productData.price == null || productData.quantity == null) {
      throw new Error('Faltan datos obligatorios (name, price, quantity)');
    }
    return await this.productRepository.create(productData);
  }

  async updateProduct(id, productData) {
    const updatedProduct = await this.productRepository.update(id, productData);
    if (!updatedProduct) {
      throw new Error('Producto no encontrado');
    }
    return updatedProduct;
  }

  async deleteProduct(id) {
    const isDeleted = await this.productRepository.delete(id);
    if (!isDeleted) {
      throw new Error('Producto no encontrado');
    }
    return true;
  }
}

module.exports = ProductService;
