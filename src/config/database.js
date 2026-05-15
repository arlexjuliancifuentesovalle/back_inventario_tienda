const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // Puedes ponerlo en true si quieres ver las consultas SQL en la consola
});

module.exports = sequelize;
