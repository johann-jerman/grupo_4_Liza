const images = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.slider-dot');
let currentImage = 0;
images[currentImage].classList.add('active');
dots[currentImage].classList.add('active');



setInterval(() => {
  images[currentImage].classList.remove('active');
  dots[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
  dots[currentImage].classList.add('active');
}, 7000);


function updateSliderHeight() {
  const slider = document.querySelector('.slider');
  const currentWidth = slider.clientWidth;
  const aspectRatio = 1920 / 670; // Relación de aspecto de las imágenes
  const newHeight = currentWidth / aspectRatio;
  slider.style.height = `${newHeight}px`;
}

window.addEventListener('load', () => {
  // Actualizar la altura del slider al cargar la página
  updateSliderHeight();
});

window.addEventListener('resize', () => {
  // Actualizar la altura del slider al cambiar el tamaño de la pantalla
  updateSliderHeight();
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    if (index !== currentImage) {
      images[currentImage].classList.remove('active');
      dots[currentImage].classList.remove('active');
      currentImage = index;
      images[currentImage].classList.add('active');
      dots[currentImage].classList.add('active');
    }
  });
});