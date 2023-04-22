const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController')
const upload = require('../middleware/multer')

router.post('/edit/:id', upload.single('image') ,fileController.edit);

router.delete('/delete/:id', fileController.delete);

module.exports = router
