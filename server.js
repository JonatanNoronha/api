const express = require('express');
const bodyParser = require('body-parser');
const bandaRoutes = require('./routes/banda');
const reservaRoutes = require('./routes/reserva');

const app = express();
app.use(bodyParser.json());

app.use('/bandas', bandaRoutes);
app.use('/reservas', reservaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});