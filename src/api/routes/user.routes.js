const express = require('express');
const router = express.Router();


const apiUserController = require('../controller/user.controller');
const userValidator = require('../../middleware/userValidator');
const loginValidator = require('../../middleware/loginValidator');
const authMiddleware = require('../../middleware/authMiddleware');
const guessMiddleware = require('../../middleware/guessMiddleware');
const adminMiddleware = require('../../middleware/adminMiddleware')
 

const upload = require('../../middleware/multer');

router.get('/', apiUserController.getAll)
router.get('/last', apiUserController.getLast)

// register rutes
router.post('/register',upload.single("image"),userValidator,apiUserController.registerProcess);

// login rutes
router.post('/login', loginValidator, authMiddleware,apiUserController.loginPocess);

// logout rutes
router.post('/logout', apiUserController.logout);

// profile rutes
router.get('/profile', guessMiddleware,  apiUserController.profile);

// admin routes
router.get('/admin', adminMiddleware,apiUserController.admin);

router.get('/:id', apiUserController.getByPk)
module.exports = router
