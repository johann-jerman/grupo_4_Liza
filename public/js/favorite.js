const heath = document.getElementById('fav-heath')
const conteiner = document.querySelector('.box-index')

window.addEventListener('DOMContentLoaded', ()=> heathDom())

const heathDom = ()=>{
    heath.addEventListener('click', (e)=>{
        heath.classList.toggle('fa-beat')
        heath.classList.toggle('fa-solid')
        heath.classList.toggle('fa-regular')

    })
}