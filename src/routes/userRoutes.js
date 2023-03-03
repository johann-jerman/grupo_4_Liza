const express = require('express');
const router = express.Router();
const multer = require('multer');
const userValidator = require('../middleware/userValidator');

const userController = require('../controller/userController');

//configuracion de multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let name = path.resolve(__dirname, '../../public/images/user')
        cb(null, name)
    },

    filename: (req, file, cb)=>{
        let filename = 'user-' + Date.now() + path.extname(file.originalname)
        cb(null, filename)
    }
})

const upload = multer ({storage})

router.get('/login',userController.login);
router.get('/register',userController.register);
router.post('/register',userValidator,userController.registerProcess);
router.get('/admin',userController.see);


module.exports = router
