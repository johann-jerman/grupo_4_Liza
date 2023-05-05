
const formCreate = document.getElementById('form-create')
const name = document.getElementById('name')
const description = document.getElementById('description')
const category = document.getElementById('category')
const price = document.getElementById('price')
const image = document.getElementById('image')

window.addEventListener('DOMContentLoaded', ()=> validatorCreate())

const validatorCreate = ()=>{

    formCreate.addEventListener('submit', (e)=>{
        let empty = isEmpty([name, description, category, price])
        if (empty.includes(true)) e.preventDefault()

        let nameLength = isLength(name, 2)
        if (!nameLength) e.preventDefault()

        let format = imgFormat(image)
        if (!format) e.preventDefault()
    })
}