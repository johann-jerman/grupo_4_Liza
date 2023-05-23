const deleteCartBtn = document.querySelector('#delete-cart')

window.addEventListener('DOMContentLoaded', () => shoppingCartEvt() )

const shoppingCartEvt = () => {
    document.addEventListener('click',  (e)=> {
        let btnDelete =  e.target
        // console.log(btnDelete);
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

        if (btnDelete.id == 'buy-btn') {
            buyCart()
        }


    })
}


const buyCart = async () => {
    let res= await fetch(`http://localhost:3004/api/cart`, {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart: getCart()
        })
    })
    let data = await res.json()
    // console.log(data);
    if (data.status == 404) {
        Swal.fire({
            title: 'Error!',
            text: `${data.data}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ir al login!'
          }).then((result) => {
            if (result.isConfirmed) {
              location.href = 'http://localhost:3004/user/login'
            }
          })
    } else {
        
    }

}