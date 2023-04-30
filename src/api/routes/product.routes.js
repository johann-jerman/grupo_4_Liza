const express = require('express');
const router = express.Router();
const apiProductController = require('../controller/product.controller');

router.delete('/delete/:id', apiProductController.erase);

module.exports = router

