// JavaScript para el carrusel de imágenes
let currentIndex = 0;

function moveSlide(direction) {
    const carousels = document.querySelectorAll('.carousel-images');
    const totalSlides = carousels.length;

    // Mover el carrusel
    for (let i = 0; i < totalSlides; i++) {
        const carousel = carousels[i];
        const slides = carousel.children.length;
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = slides - 1;
        }
        if (currentIndex >= slides) {
            currentIndex = 0;
        }
        
        // Mover la imagen
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}
