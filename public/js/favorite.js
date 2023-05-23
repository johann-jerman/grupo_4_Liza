const heath = document.querySelectorAll('.fav-heath')
const conteiner = document.querySelector('.box-index')

window.addEventListener('DOMContentLoaded', ()=> heathDom())

const heathDom = ()=>{
    
    document.addEventListener('click', (e)=> {
        console.log(e.target);
        if (e.target.id == 'fav-heath') {
            e.target.classList.toggle('fa-beat')
            e.target.classList.toggle('fa-solid')
            e.target.classList.toggle('fa-regular')
        }
    })
}