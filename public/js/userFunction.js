const isEmpty = (inputArray) => {
const errors = []  
    inputArray.forEach((input,i) => {
        let errorText = document.getElementById("error-"+i)
        if(!input.value.trim() && !errorText){
            let error = document.createElement("p")
            error.innerHTML = "El campo no puede estar vacío"
            error.setAttribute("id","error-"+i)
            error.classList.add("input-error")
            input.insertAdjacentElement("afterend",error)
            //errors.push(true)
        }
        !input.value.trim()? errors.push(true) : null
        if(input.value.trim() && errorText){
            errorText.remove()
        }
            });
            console.log(errors);    
            return errors
}

const isLength = (input,inputMinLength) => {
    let errorText = document.getElementById("error-"+input.attributes.id)    
    if(input.value.length < inputMinLength && !errorText){
            let error = document.createElement("p")
            error.innerHTML = "El campo debe tener mínimo " + inputMinLength + " caracteres"
            error.setAttribute("id","error-"+input.attributes.id)
            error.classList.add("input-error")
            input.insertAdjacentElement("afterend",error)
            return false
        }  
        if(input.value.length >= inputMinLength && errorText){
            errorText.remove()
            return true
        }
}

const imgFormat = (input) => {

    let extensions = ['.jpg', '.jpeg', '.png', '.gif']
    let inputExtension = input.value.substring(input.value.lastIndexOf('.'));
    if (!extensions.includes(inputExtension)) {

        let nameError = document.getElementById("error-img"+input.attributes.id)

        if (nameError) {
            nameError.remove()
        }

        let error = document.createElement('p');

        error.innerHTML = `El formato de la imagen tiene que ser: ${extensions.join(', ')}`

        error.setAttribute('id', "error-img"+input.attributes.id)

        error.classList.add("input-error")

        input.insertAdjacentElement('afterend', error)

        return false


    } else {

        let nameError = document.getElementById(createErrorId)

        if (nameError) {
            nameError.remove()
        }

        console.log('estoy en el else');

        return true

    }
}