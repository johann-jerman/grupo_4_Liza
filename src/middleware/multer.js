const express = require('express');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        let pathImg = path.resolve(__dirname, '../../public/images/products') 
        cb(null, pathImg)
    },
    filename : (req, file, cb) => {
        let nombreImg = 'product-' + Date.now() + path.extname(file.originalname)
        cb(null, nombreImg)
    }
})

const upload = multer({storage})

module.exports = upload