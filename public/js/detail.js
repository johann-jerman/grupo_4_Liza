// const deleteButton = document.getElementById('delete')
const imageDetail = document.querySelectorAll('.main-product')
const imgButtonDetail = document.querySelectorAll('.fa-circle')

window.addEventListener('DOMContentLoaded', ()=> eventDeteil())

const eventDeteil = ()=>{
    
    imgButtonDetail.forEach( (button) => {
        button.addEventListener('click', ()=>{
            showImg(button.dataset.id) 
            deleteVisible()
            if (!button.classList.contains('fa-solid')) {
                button.classList.add('fa-solid')
            }
        })
    })
    
}

const showImg = (dataId) => {
    imageDetail.forEach( image => {
        if (image.dataset.id == dataId && !image.classList.contains('is-visible') ) {
           image.classList.add('is-visible')
        } 
        if (image.dataset.id != dataId && image.classList.contains('is-visible')) {
            image.classList.remove('is-visible')
        }
    })
}

const deleteVisible = () => {
    imgButtonDetail.forEach( button => {
        if (button.classList.contains('fa-solid')) {
            button.classList.remove('fa-solid')
            button.classList.add('fa-regular')
        }
    })
}

