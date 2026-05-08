const Product = require('../models/Product');

class ProductRepository {
  constructor() {
    this.products = [];
    this.currentId = 1;
    this.initializeProducts();
  }

  initializeProducts() {
    const defaultProductNames = [
      "Laptop Gamer", "Mouse Inalámbrico", "Teclado Mecánico", "Monitor 144Hz", 
      "Audífonos Bluetooth", "Silla Ergonómica", "Escritorio de Madera", "Impresora Láser", 
      "Cámara Web 1080p", "Micrófono USB", "Disco Duro 1TB", "Memoria RAM 16GB", 
      "Tarjeta Gráfica RTX 3060", "Fuente de Poder 650W", "Gabinete ATX", 
      "Cable HDMI 2m", "Router Wi-Fi 6", "Hub USB-C", "Pad Mouse Extra Grande", "Tableta Gráfica"
    ];

    defaultProductNames.forEach(name => {
      // Precio aleatorio entre $50 y $1500
      const randomPrice = Math.floor(Math.random() * (1500 - 50 + 1)) + 50;
      // Cantidad aleatoria estricta entre 20 y 40
      const randomQuantity = Math.floor(Math.random() * (40 - 20 + 1)) + 20;

      this.products.push(new Product(
        this.currentId++,
        name,
        randomPrice,
        randomQuantity
      ));
    });
  }

  findAll() {
    return this.products;
  }

  findById(id) {
    return this.products.find(p => p.id === id);
  }

  create(productData) {
    const newProduct = new Product(
      this.currentId++,
      productData.name,
      productData.price,
      productData.quantity
    );
    this.products.push(newProduct);
    return newProduct;
  }

  update(id, productData) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;

    this.products[index] = {
      ...this.products[index],
      name: productData.name ?? this.products[index].name,
      price: productData.price ?? this.products[index].price,
      quantity: productData.quantity ?? this.products[index].quantity
    };

    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;

    this.products.splice(index, 1);
    return true;
  }
}

module.exports = ProductRepository;
