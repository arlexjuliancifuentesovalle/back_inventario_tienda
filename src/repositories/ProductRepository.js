const Product = require('../models/Product');

class ProductRepository {
  async findAll() {
    return await Product.find({});
  }

  async findById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      return null;
    }
  }

  async create(productData) {
    const newProduct = new Product({
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity
    });
    return await newProduct.save();
  }

  async update(id, productData) {
    try {
      // { new: true } devuelve el documento actualizado en lugar del original
      return await Product.findByIdAndUpdate(id, productData, { new: true });
    } catch (error) {
      return null;
    }
  }

  async delete(id) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      return !!deletedProduct; // true si lo eliminó, false si no existía
    } catch (error) {
      return false;
    }
  }
}

module.exports = ProductRepository;
