document.addEventListener("DOMContentLoaded", function() {
    // Aquí puedes añadir lógica de carrito, interacciones y formularios.
    
    // Simulando agregar productos al carrito:
    const addToCartButtons = document.querySelectorAll('.btn-add');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert("Producto añadido al carrito");
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("¡Gracias por tu mensaje!");
    });
});
