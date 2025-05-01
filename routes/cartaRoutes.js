const express = require('express');
const router = express.Router();
const cartaWorker = require('../workers/cartaWorker');

router.post('/', cartaWorker.postCarta);
router.get('/:id', cartaWorker.getCarta);
//router.put('/:id', cartaWorker.putCarta);
//router.delete('/:id', cartaWorker.deleteCarta); 

module.exports = router;