const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Banda = require('./banda');

const Reserva = sequelize.define('Reserva', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hora_fim: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  bandaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Banda,
      key: 'id',
    },
  },
});

Banda.hasMany(Reserva, { foreignKey: 'bandaId' });
Reserva.belongsTo(Banda, { foreignKey: 'bandaId' });

module.exports = Reserva;