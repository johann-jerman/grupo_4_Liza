const express = require('express');
const router = express.Router();
const apiProductController = require('../controller/product.controller');

router.get('/', apiProductController.getAll)
router.get('/last', apiProductController.getLast)


router.get('/detail/:id', apiProductController.detail);
// router.get('/categoris', apiProductController.categoryProducts);

router.delete('/delete/:id', apiProductController.erase);


module.exports = router

