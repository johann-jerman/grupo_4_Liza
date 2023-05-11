const heath = document.querySelectorAll('.fav-heath')
const conteiner = document.querySelector('.box-index')

window.addEventListener('DOMContentLoaded', ()=> heathDom())

const heathDom = ()=>{
    heath.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('fa-beat')
            icon.classList.toggle('fa-solid')
            icon.classList.toggle('fa-regular')

        })
    })
}