const APIDetail = `http://localhost:3004/api/product/detail/`
const cartConteiner = document.getElementById('cart-conteiner')
const productConteiner = document.getElementById('products')
const cartTotal = document.getElementById('cart-total')
const main = document.getElementById('cart-main')

window.addEventListener('DOMContentLoaded', () => shoppingCart() )

const shoppingCart = async () => {
    
    let total = await renderCart()
    statsCart(total)
    
}

const  renderCart = async ()  => {
    let total = 0    
    let totalWithDiscounts = 0    
    let dataProduct = await getProducts()
// console.log(dataProduct);

    dataProduct.forEach(product => {
        let img = product.data.data.image[0].image
        let price = product.data.data.price
        let offer = product.data.data.offer
        let quantity = product.quantity
        total +=  price * quantity ;
        totalWithDiscounts +=  Math.ceil( price * quantity - price* quantity * offer / 100 );

        productConteiner.innerHTML += 
        ` 
            <div class="product">
                <img src="/images/products/${img}" class="carrito-img">
                <div class="product-info">
                    <h2 class="product-name">${product.data.data.name}</h2>
                    <h2 class="product-price">
                    $  ${ product.data.data.price * product.quantity  } 
                    </h2>
                    <h2 class="product-offer">${product.data.data.offer}%  : Total
                    ${ Math.ceil( price * quantity - price* quantity * offer / 100 ) }
                    </h2>
                    <p class="product-quantity">Cantidad: 
                    <i class="fa-solid fa-arrow-left" data-id="${product.data.data.id}" id="subtract-quantity"></i>
                    ${product.quantity} 
                    <i class="fa-solid fa-arrow-right" data-id="${product.data.data.id}" id="add-quantity"></i>
                    
                    <p class="product-remove" >
                        <i class="fa fa-trash" aria-hidden="true"></i>
                        <span class="remove" id="delete-product" data-id="${product.data.data.id}">
                        Eliminar Producto
                        </span>
                    </p>
                </div>
            </div>
        `
    })
    return {
        total: Math.ceil( total ),
        totalWithDiscounts: Math.ceil( totalWithDiscounts )
    }
}

const statsCart = ( total ) => {
    let totalProducts = getCart().length
    cartTotal.innerHTML += `
        <p>
            <span>Total</span>
            <span>$ ${total.total}</span>
        </p>
        <p>
          <span>Total a pagar </span>
          <span>$${total.totalWithDiscounts}</span>
        </p>
        <p>
            <span>Productos</span>
            <span>${totalProducts}</span>
        </p>
        <a id="buy-btn">Comprar</a>
        <a  id="delete-cart">Vaciar carrito</a>
    `

}



//<article class="container"> </article>