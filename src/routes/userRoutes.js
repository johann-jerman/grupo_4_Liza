const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');
const userValidator = require('../middleware/userValidator');

const upload = require('../middleware/multer');
// register rutes
router.get('/register',userController.register);
router.post('/register',upload.single("image"),userValidator,userController.registerProcess);

// login rutes
router.get('/login',userController.login);
router.post('/login', userController.loginPocess);

//logout rutes
// router.post('/logout', userController.logout);

// profile rutes
router.get('/profile', userController.profile);

//admin routes
router.get('/admin',userController.admin);


module.exports = router
