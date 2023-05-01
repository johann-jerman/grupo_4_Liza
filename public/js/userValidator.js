const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const image = document.getElementById("image");
const inputArray = [name,lastname,email,password]
const form = document.getElementById("form-register")
window.addEventListener("DOMContentLoaded",() => validator())

const validator = () => {
   form.addEventListener("submit", (e) =>  {
    
    let validatorResult = isEmpty(inputArray)
    if(validatorResult.includes(true)){
    e.preventDefault()
    }
    let lastnameLength = isLength(lastname, 4)
    if (!lastnameLength) e.preventDefault()

    let passwordLength = isLength(password, 8)
    if (!passwordLength) e.preventDefault()

    let nameLength = isLength(name, 4)
    if (!nameLength) e.preventDefault()

    let imageForma = imgFormat(image)
    if(!imageForma) e.preventDefault()
  })
    
}

