const deleteButton = document.getElementById('delete')

window.addEventListener('DOMContentLoaded', ()=> eventDetail())

const eventDetail = ()=>{
    deleteButton.addEventListener('submit', async (e)=>{
        e.preventDefault()
        
        const confirmation = await sweetConferm()
        
        if(confirmation.isConfirmed){
          await fetch(`http://localhost:3004/api/product/delete/${deleteButton.dataset.productdelete}`, {
            method: 'delete'
          })
          window.location.href = 'http://localhost:3004/'
        }
        
    })
}

const sweetConferm = async () => {
    const confirm = await Swal.fire({
      title: 'Estas Seguro?',
      text: "Una vez elimininado no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '<i class="fa-solid fa-trash" style="color: #ffffff;"></i> Deseo Eliminarla!'
    })
    if (confirm.isConfirmed) {
      await Swal.fire(
        'Eliminado!',
        'La imagen fue eliminada con exito.',
        'success'
      )
    }
    return confirm
}