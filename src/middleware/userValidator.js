const {body} = require('express-validator');
const path = require('path');

const userValidator = [
    body('name')
        .isLength({min: 2}).withMessage('incluir al menos dos caracteres'),
    body('lastname')
        .isLength({min: 2}).withMessage('incluir al menos dos caracteres'),
    body('email')
        .isEmail().withMessage('Incluir tu correo electronico'),
    body('password')
        .custom((val,{req})=> {
            let passwordVal = req.body.confirm-password
            if(val != passwordVal ){
                throw new Error('Contraseñas no validas');
            }
            return true
        }),
    // body('image')
    //     .custom((val,{req})=>{
    //         const validExtension = ['.jpg', '.jpeg', '.png', '.svg']
    //         const file = req.file
    //         const extension = path.extname(file.originalname)
            
    //         if(!validExtension.includes(extension)) {
    //             throw new Error(`Debe incluir ${validExtension.join(', ')}`)
    //         }
    //         return true
    //     })
]

module.exports = userValidator