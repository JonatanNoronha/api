const sequelize = require('./config/database');
const Banda = require('./models/banda');
const Reserva = require('./models/reserva');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Banco de dados sincronizado!');
  } catch (error) {
    console.error('Falha ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close();
  }
};

syncDatabase();