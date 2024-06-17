const Banda = require('../models/banda');

exports.createBanda = async (req, res) => {
  try {
    const banda = await Banda.create(req.body);
    res.status(201).json(banda);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllBandas = async (req, res) => {
  try {
    const bandas = await Banda.findAll();
    res.status(200).json(bandas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBandaById = async (req, res) => {
  try {
    const banda = await Banda.findByPk(req.params.id);
    if (banda) {
      res.status(200).json(banda);
    } else {
      res.status(404).json({ error: 'Banda não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBanda = async (req, res) => {
  try {
    const banda = await Banda.findByPk(req.params.id);
    if (banda) {
      await banda.update(req.body);
      res.status(200).json(banda);
    } else {
      res.status(404).json({ error: 'Banda não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteBanda = async (req, res) => {
  try {
    const banda = await Banda.findByPk(req.params.id);
    if (banda) {
      await banda.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Banda não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};