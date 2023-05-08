const APIDetail = `http://localhost:3004/api/product/detail/`
const cartConteiner = document.getElementById('cart-conteiner')
const main = document.getElementById('cart-main')

window.addEventListener('DOMContentLoaded', () => shoppingCart() )

const shoppingCart = () => {
    
    renderCart()
    
}

const  renderCart = async ()  => {
    // const cartConteiner = document.getElementById('cart-conteiner')
    let cart =  getCart()
    let total = 0
    let dataProduct = await Promise.all (
        cart.map(async product => {
            let req = await fetch(APIDetail + product.id);
            let data = await req.json()
            return {
                data,
                quantity: product.quantity
            }
        })
    );

    dataProduct.forEach(product => {
        let img = product.data.data.image[0].image
        total += product.data.data.price * product.data.data.offer / 100
        cartConteiner.innerHTML += 
            `
                <h3>${product.data.data.name}</h3>
                <p>
                $  ${ product.data.data.price} - ${product.data.data.offer}% = 
                ${product.data.data.price * product.data.data.offer / 100}
                </p>
                <p>----</p>
                <p>${product.data.data.stock}</p>
                <p>${product.data.data.description}</p>
                <img src="/images/products/${img}" style=" width: 150px; heigth: 150px;" />
                <i class="fa-solid fa-arrow-right" data-id="${product.data.data.id}" id="add-quantity"></i>
                <p>${product.quantity}</p>
                <i class="fa-solid fa-arrow-left" data-id="${product.data.data.id}" id="subtract-quantity"></i>
                <button id="delete-product" data-id="${product.data.data.id}">Eliminar Producto</button>
            `
    })
    main.innerHTML += `<p>Total: ${total} </p>`
}
