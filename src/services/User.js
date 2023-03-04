const path = require('path')
const fs = require('fs')

const User = {
    fileName: path.resolve(__dirname, '../data/users.json'),

    findAll: () => {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

    findByPK: (bodyId)=>{
        
    },

    findByField: (campo, bodyCampo)=>{
        
    },

    createUser : (body, img)=>{
        
    },

    deleteUser : (bodyId)=>{

    }
}

module.exports = User