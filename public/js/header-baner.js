// Obtiene los elementos promotion1 y promotion2 por su ID
const promotion1 = document.getElementById("promotion1");
const promotion2 = document.getElementById("promotion2");

// Establece el temporizador para cambiar la visibilidad de los elementos
setInterval(() => {
  // Si promotion1 es visible, oculta promotion1 y muestra promotion2
  if (promotion1.style.display !== "none") {
    promotion1.style.display = "none";
    promotion2.style.display = "block";
  } 
  // De lo contrario, oculta promotion2 y muestra promotion1
  else {
    promotion1.style.display = "block";
    promotion2.style.display = "none";
  }
}, 5000); // 5000 milisegundos = 5 segundos




