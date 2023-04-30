const express = require('express');
const router = express.Router();

const favoriteController = require('../controller/favorite.controller');

router.get('/favorite/add',   favoriteController.favoriteAdd);

router.get('/favorite/remove',   favoriteController.favoriteRemove);

module.exports = router