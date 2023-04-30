
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        // console.log(req.originalUrl.includes('product' || 'file'), 'url\n \n');
        let multerRutes = req.originalUrl.includes('product' || 'file')? 'products' : 'users';
        let pathImg = path.resolve(__dirname, `../../public/images/${multerRutes}`) 
        cb(null, pathImg)
    },
    filename : (req, file, cb) => {
        let multerRutes = req.originalUrl.includes('product')? 'products' : 'users';
        let nombreImg = `${multerRutes}-` + Date.now() + path.extname(file.originalname)
        cb(null, nombreImg)
    }
})

const upload = multer({storage})

module.exports = upload