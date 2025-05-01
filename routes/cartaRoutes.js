const express = require('express');
const router = express.Router();
const cartaWorker = require('../workers/cartaWorker');

router.post('/', cartaWorker.postCarta);
router.get('/', cartaWorker.getCartasPorAutor);

module.exports = router;