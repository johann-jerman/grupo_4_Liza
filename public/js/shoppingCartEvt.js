const deleteCartBtn = document.querySelector('#delete-cart')

window.addEventListener('DOMContentLoaded', () => shoppingCartEvt() )

const shoppingCartEvt = () => {
    document.addEventListener('click', (e)=> {
        let btnDelete =  e.target
        console.log(btnDelete);
        if (btnDelete.id == 'delete-cart') {
            deleteAllCart()
        }
        if (btnDelete.id == 'delete-product') {
            deleteProduct(btnDelete.dataset.id)
        }
        if (btnDelete.id == 'add-quantity') {
            let productData = btnDelete.dataset.id
            addQueantity(productData)
        }
        if (btnDelete.id == 'subtract-quantity') {
            let productData = btnDelete.dataset.id
            subtractQueantity(productData)
        }


    })
}
