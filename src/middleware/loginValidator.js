const {body} = require('express-validator');

const loginValidator = [
    body('email')
        .notEmpty().withMessage('El campo no puede estar vacio'),
    body('password')
        .notEmpty().withMessage('El campo no puede estar vacio')
]

module.exports = loginValidator