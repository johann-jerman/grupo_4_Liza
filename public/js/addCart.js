const addCartBtn = document.getElementById('add-cart')

window.addEventListener('DOMContentLoaded', () => cart())

const cart = () =>{
    addCartBtn.addEventListener('click', ()=>{
        addToCart(addCartBtn)
        console.log(
            getCart()
        );
    })
}

