const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Banda = sequelize.define('Banda', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Banda;