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
        }
        !input.value.trim()? errors.push(true) : null
        if(input.value.trim() && errorText){
            errorText.remove()
        }
    });

    return errors
}

const isLength = (input,inputMinLength) => {
    let errorText = document.getElementById("error-" + input.attributes.id) 

        if(input.value.length < inputMinLength && !errorText){
            let error = document.createElement("p")
            error.innerHTML = `El campo debe tener mínimo ${inputMinLength} caracteres`
            error.setAttribute("id","error-length"+input.attributes.id)
            error.classList.add("input-error")
            input.insertAdjacentElement("afterend", error)
        };

        if (input.value.length < inputMinLength) return false 

        if(input.value.length >= inputMinLength && errorText){
            errorText.remove()
            return true
        };
}

const imgFormat = (input) => {

    let extensions = ['.jpg', '.jpeg', '.png', '.gif', '.PNG', '.JPG', '.JPEG']
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

        let nameError = document.getElementById("error-img"+input.attributes.id)

        if (nameError) {
            nameError.remove()
        }

        return true

    }
}

function validateEmail(email){
    //capturamos el error si esta creado
    let errorText = document.getElementById("error-email"+ email.attributes.id)

    //expreciones regulares para validar email
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    //creamos el error si el mail es invalido y el error no existe
    if( !validEmail.test(email.value) && !errorText){
		let error = document.createElement("p")
            error.innerHTML = "El mail tiene que ser valido"
            error.setAttribute("id","error-email"+ email.attributes.id)
            error.classList.add("input-error")
            email.insertAdjacentElement("afterend",error)
	}

    // retornamos false si el mail no es valido
    if (!validEmail.test(email.value))  return false 

    //retornamos true si el mail es valido y eliminamos el error si existe
    if(validEmail.test(email.value)){
        errorText ? errorText.remove(): null
        return true
    }
} 



const emailRegistered = () => {

}