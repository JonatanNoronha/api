const Reserva = require('../models/reserva');
const Banda = require('../models/banda');

exports.createReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllReservas = async (req, res) => {
  try {
    const reservas = await Reserva.findAll({
      include: [{ model: Banda }]
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id, {
      include: [{ model: Banda }]
    });
    if (reserva) {
      res.status(200).json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.update(req.body);
      res.status(200).json(reserva);
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByPk(req.params.id);
    if (reserva) {
      await reserva.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Reserva não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};