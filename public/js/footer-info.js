var subtitles = document.getElementsByClassName("subtitle");

for (var i = 0; i < subtitles.length; i++) {
  subtitles[i].addEventListener("click", function() {
    var column = this.nextElementSibling;

    if (column.classList.contains("active")) {
      // La columna ya está visible, así que la ocultamos quitando la clase "active"
      column.classList.remove("active");
    } else {
      // La columna está oculta, así que la hacemos visible agregando la clase "active"
      column.classList.add("active");
    }
  });
}