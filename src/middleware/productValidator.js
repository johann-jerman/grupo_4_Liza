const {body} = require('express-validator');

const productValidator = [
    body('name')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
    body('description')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
    body('image')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
    body('category')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
    body('size')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
    body('price')
        .notEmpty().withMessage('El campo no puede estar vacio.').bail(),
];

module.exports = productValidator;