const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');
const userValidator = require('../middleware/userValidator');
const loginValidator = require('../middleware/loginValidator');
const authMiddleware = require('../middleware/authMiddleware');
const guessMiddleware = require('../middleware/guessMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware')
 

const upload = require('../middleware/multer');
// register rutes
router.get('/register', authMiddleware, userController.register);
router.post('/register',upload.single("image"),userValidator,userController.registerProcess);

// login rutes
router.get('/login', authMiddleware, userController.login);
router.post('/login', loginValidator,userController.loginPocess);

// logout rutes
router.post('/logout', userController.logout);

// profile rutes
router.get('/profile', guessMiddleware,  userController.profile);

router.get('/urlruta', (req, res)=> res.send('hola ro y jose'))

// admin routes
router.get('/admin', adminMiddleware,userController.admin);


module.exports = router
