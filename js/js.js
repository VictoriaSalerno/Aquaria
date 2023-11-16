document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        var nav = document.querySelector(".nav");
        var ul = nav.querySelector("ul");
        ul.classList.toggle("active");
            
        // También podemos agregar "active" a los elementos <li> dentro de <ul>
        var lis = ul.querySelectorAll("li");
        lis.forEach(function(li) {
            li.classList.toggle("active");
        });
        }
})

const nombreInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const mensajeTextarea = document.querySelector('.mensaje');
const botonEnviar = document.querySelector('.boton');

botonEnviar.addEventListener('click', function() {
    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeTextarea.value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('email', email);
    localStorage.setItem('mensaje', mensaje);

    if (nombre === '') {
        alert('Por favor ingrese su nombre.');
        return;
    }

    if (email === '') {
        alert('Por favor ingrese un correo electrónico.');
        return;
    }

    if (mensaje === '') {
        alert('Por favor ingrese un mensaje.');
        return;
    }

    const resultadoHTML = '¡Tu mensaje se ha enviado correctamente!';

    Swal.fire({
        title: 'Nos estaremos contactando en la brevedad',
        html: resultadoHTML,
        icon: 'info',
    });

    nombreInput.value = '';
    emailInput.value = '';
    mensajeTextarea.value = '';
});