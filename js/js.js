document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    hamburger.onclick = function () {
        const nav = document.querySelector(".nav");
        const ul = nav.querySelector("ul");
        ul.classList.toggle("active");

        // También podemos agregar "active" a los elementos <li> dentro de <ul>
        const lis = ul.querySelectorAll("li");
        lis.forEach(function (li) {
            li.classList.toggle("active");
        });
    }
})

const fileDirectory = window.location.pathname.split('/')
const fileName = fileDirectory[fileDirectory.length - 1]

if (fileName == 'contacto.html') {
    const nombreInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const botonEnviar = document.querySelector('.boton');
    const mensajeTextarea = document.querySelector('.mensaje');

    botonEnviar.addEventListener('click', () => {
        const email = emailInput.value;
        const nombre = nombreInput.value;
        const mensaje = mensajeTextarea.value;

        console.log(mensaje);

        localStorage.setItem('email', email);
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('mensaje', mensaje);

        if (email === '') {
            alert('Por favor ingrese su email.');
            return;
        }

        if (nombre === '') {
            alert('Por favor ingrese un nombre.');
            return;
        }

        if (mensaje === '') {
            alert('Por favor ingrese su mensaje.');
            return;
        }

        Swal.fire({
            title: 'Nos estaremos contactando en la brevedad',
            html: '¡Tu mensaje se ha enviado correctamente!',
            icon: 'info',
        });

        emailInput.value = '';
        nombreInput.value = '';
        mensajeTextarea.value = '';
    });   
}

let precio = 0;

if (fileName == 'tickets.html') {
    let selectedButtons = {
        "P1": false,
        "P2": false,
        "P3": false
    };
    
    const buttonP1 = document.getElementById("P1");
    const buttonP2 = document.getElementById("P2");
    const buttonP3 = document.getElementById("P3");
    
    buttonP1.onclick = () => buttonApretado('P1');
    buttonP2.onclick = () => buttonApretado('P2');
    buttonP3.onclick = () => buttonApretado('P3');
    
    MostrarPrecioTotal();
    
    function buttonApretado(plan) {
        selectedButtons[plan] = !selectedButtons[plan];
    
        let mostrarDiv = document.getElementById("Mostrar" + plan);
        mostrarDiv.style.display = selectedButtons[plan] ? "block" : "none";
    
        MostrarPrecioTotal();
    }
    
    function MostrarPrecioTotal() {
        precio = 0;

        if (selectedButtons["P1"]) {
            precio += 5000 * document.getElementById("cantP1").value;
        }
        if (selectedButtons["P2"]) {
            precio += 7000 * document.getElementById("cantP2").value;
        }
        if (selectedButtons["P3"]) {
            precio += 9000 * document.getElementById("cantP3").value;
        }
    
        document.getElementById("preciototal").innerHTML = `<span>Total: $${precio}</span><i class="fas fa-shopping-cart"></i>`;
    }

    const purchaseButton = document.getElementById("purchaseButton");

    purchaseButton.addEventListener("click", () => {

        if (precio > 0) {
            Swal.fire({
                title: 'Nos estaremos contactando en la brevedad',
                html: '¡Su compra ha sido exitosa!',
                icon: 'success',
            });
        } else {
            Swal.fire({
                title: 'Se ha producido un error',
                html: 'Debe seleccionar un plan para continuar',
                icon: 'error',
            });
        }
    })
}