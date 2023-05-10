const offers = document.querySelectorAll('.offers')
const right = document.getElementById('right')
const left = document.getElementById('left')

window.addEventListener('DOMContentLoaded', ()=> offerView() )

const offerView= () => {
    let visibleIndex = 0
    
    right.addEventListener('click', () => {
        if (offers.length -1 > visibleIndex +3) visibleIndex ++

        offers.forEach( box => {
            let dataset = box.dataset.id
            
            if (dataset >= visibleIndex && dataset <= visibleIndex + 3 ) {
                box.classList.add('is-visible')
            } 
            
            if (dataset < visibleIndex || dataset > visibleIndex + 3 ) {
                box.classList.remove('is-visible')
            }             
        })
    })
    
    
    left.addEventListener('click', () => {
        if (visibleIndex > 0) visibleIndex --
        offers.forEach( box => {
            let dataset = box.dataset.id


            if (dataset >= visibleIndex && dataset <= visibleIndex + 3 ) {
                box.classList.add('is-visible')
            }
        
            if (dataset < visibleIndex || dataset > visibleIndex + 3 ) {
                box.classList.remove('is-visible')
            }             
        })
    })

}