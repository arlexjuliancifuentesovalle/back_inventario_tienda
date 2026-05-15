const Product = require('../models/Product');

class ProductRepository {
  async findAll() {
    return await Product.findAll();
  }

  async findById(id) {
    try {
      return await Product.findByPk(id);
    } catch (error) {
      return null;
    }
  }

  async create(productData) {
    return await Product.create({
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity
    });
  }

  async update(id, productData) {
    try {
      const [updatedRows] = await Product.update(productData, { 
        where: { id } 
      });
      if (updatedRows === 0) return null;
      return await Product.findByPk(id);
    } catch (error) {
      return null;
    }
  }

  async delete(id) {
    try {
      const deletedRows = await Product.destroy({ where: { id } });
      return deletedRows > 0;
    } catch (error) {
      return false;
    }
  }
}

module.exports = ProductRepository;
