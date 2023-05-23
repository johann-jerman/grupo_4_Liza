const deleteProduct = (productId) => {
    let cart =  getCart()

    cart = cart.filter(product => product.id != productId )

    setCart(cart)

    location.reload()
}
const deleteAllCart = () => {
    window.localStorage.clear()
    location.reload()
}

const addToCart = (productToAdd) => {
    const product = productToAdd

    let cart = getCart()
    
    let productExist = productIsAdded(product, cart)

    if (productExist) {
        cart.forEach( prodoductInCart => {
            if (prodoductInCart.id == productExist.id ) prodoductInCart.quantity ++
        });
    } else {
        cart.push(product)
    }

    setCart(cart)

    return getCart()
}

const getCart = () => {
    return JSON.parse(window.localStorage.getItem('cart')) || []
}

const setCart = (cart) => {
    return window.localStorage.setItem('cart', JSON.stringify(cart))
}

const productIsAdded = (product, cart) => {
    return cart.find( productInCart =>  productInCart.id == product.id)
}

const addQueantity = (productAddQnt) => {
    const cart = getCart()
    cart.forEach(product => {
        if (product.id == productAddQnt) {
            product.quantity ++;
        } 
    })
    setCart(cart)

    location.reload()
}

const subtractQueantity = (productsubtractQnt) => {
    const cart = getCart()

    cart.forEach(product => {
        if (product.id == productsubtractQnt) {
            product.quantity --;
        } 
    })
    setCart(cart)

    location.reload()
}

const getProducts = async () => {
    let cart =  getCart()
    let data = await Promise.all (
        cart.map(async product => {
            let req = await fetch(APIDetail + product.id)
            let data = await req.json()
            return {
                data,
                quantity: product.quantity
            }
        })
    );
    return data
}