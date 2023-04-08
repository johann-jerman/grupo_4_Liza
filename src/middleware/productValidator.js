const {body} = require("express-validator");
const { type } = require("os");
const path = require("path");
const productValidator = [
    body("name")
        .isLength({min:5}).withMessage("minimo 5 caracteres"),
    
    body("description")
        .isLength({max:100}).withMessage("maximo 100 caracteres"),
    
    body("price")
        .isNumeric().withMessage("ingresar solo numeros"),
    
    body("image")
        .custom((val, {req})=>{
            const file = req.files
            const validExtension = [".jpg" ,".png" ,".svg" , ".jpeg"]
            if(!file){
                throw new Error("ingresar una imagen")
            }
            file.forEach(file => {
                const extension = path.extname(file.originalname)
                if(!validExtension.includes(extension)){
                    throw new Error(`Las extenciones validas son ${validExtension.join(', ')}`)
                }
            });
            return true
        })
]

module.exports = productValidator;