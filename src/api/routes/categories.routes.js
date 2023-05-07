const express = require('express');
const router = express.Router();
const apiCategoriesController = require('../controller/categories.controller');

router.get('/', apiCategoriesController.getAll)

module.exports = router

