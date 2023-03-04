const path = require('path')
const fs = require('fs')
const bcrypt = require('bcrypt')

const User = {
    fileName: path.resolve(__dirname, '../data/users.json'),

    findAll: () => {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

    findByPK: (bodyId)=>{
        let userData =this.findAll();
        let userFound = userData.find(user => user.id = bodyId)
        return userFound
    },

    findByField: (campo, bodyCampo)=>{
        let userData = this.findAll();
        let userFound = userData.find(user => user[campo]==bodyCampo)
        return userFound
    },

    createUser : (body)=>{
        let userData = this.findAll();
        let newUser = {
            id: Date.now(),
            ...body
            
        } 
        userData.push(newUser)
        fs.writeFileSync(this.fileName,JSON.stringify(userData,null," "))
        return userData
    },

    deleteUser : (bodyId)=>{
        let userData = this.findAll();
        userData = userData.filter(user => user.id != bodyId)
        fs.writeFileSync(this.fileName,JSON.stringify(userData,null," "))
        return userData      


    }
}

module.exports = User