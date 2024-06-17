const express = require('express');
const router = express.Router();
const BandaController = require('../controllers/bandaController');

router.post('/', BandaController.createBanda);
router.get('/', BandaController.getAllBandas);
router.get('/:id', BandaController.getBandaById);
router.put('/:id', BandaController.updateBanda);
router.delete('/:id', BandaController.deleteBanda);

module.exports = router;