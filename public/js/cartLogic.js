
const addToCart = (data) => {
    const product = data.dataset.id

    let cart = getCart()
    
    cart.push(product)

    setCart(cart)

    return getCart()
}

const getCart = () => {
    return JSON.parse(window.localStorage.getItem('cart')) || []
}

const setCart = (cart) => {
    return window.localStorage.setItem('cart', JSON.stringify(cart))
}