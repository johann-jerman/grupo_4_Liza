const path = require('path')
const fs = require('fs')


const Admin = {
    productPath: path.resolve(__dirname, '../data/products.json'),

    getAllProduct () {
        return JSON.parse(fs.readFileSync(Admin.productPath, 'utf-8'))
    }
}

module.exports = Admin