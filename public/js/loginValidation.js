const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')


window.addEventListener('DOMContentLoaded', ()=> loginValidation())

const loginValidation = () => {

    form.addEventListener('submit', e => {

        const inputsIsEmpty = isEmpty([email, password])        
        if ( inputsIsEmpty.includes(true) )  e.preventDefault()
        
        const validMail = validateEmail(email)
        if ( !validMail ) e.preventDefault()
        
    })


}