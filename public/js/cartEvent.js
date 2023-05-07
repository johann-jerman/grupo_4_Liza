
const addCartBtn = document.getElementById('add-cart')

window.addEventListener('DOMContentLoaded', () => cart())

const cart = () =>{
    addCartBtn.addEventListener('click', ()=>{
        const productToAdd = {
            id: addCartBtn.dataset.id,
            quantity: 1,
        }
        
        addToCart(productToAdd)
        console.log(
            getCart()
        );
    })
}

