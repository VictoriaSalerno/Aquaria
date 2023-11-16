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









window.onload=DocumentoCargado; 

//En esta función se capturan todos los eventos requeridos por el script
function DocumentoCargado(){
   let checkboxP1 = document.getElementById("P1"); //obtiene los elementos del documento html y los asigna a variables
   let checkboxP2 = document.getElementById("P2"); 
   let checkboxP3 = document.getElementById("P3"); 
   let cantpersonasP1 = document.getElementById("cantP1");
   let cantpersonasP2 = document.getElementById("cantP2");
   let cantpersonasP3 = document.getElementById("cantP3");
   cantpersonasP1.onchange = selectp1personas; // Se ejecuta la función selectp1personas() cuando ocurre el evento
   cantpersonasP2.onchange = selectp2personas;
   cantpersonasP3.onchange = selectp3personas;
   checkboxP1.onclick = checkboxP1Apretado; 
   checkboxP2.onclick = checkboxP2Apretado;
   checkboxP3.onclick = checkboxP3Apretado;

   MostrarPrecioTotal(); // llama a la función 
}
//Cuando el usuario aprieta el checkbox, se debe mostrar u ocultar el objeto select

function checkboxP1Apretado()
{
   if(document.getElementById("P1").checked == true)
   {
       document.getElementById("MostrarP1").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP1").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP2Apretado()
{
   if(document.getElementById("P2").checked == true)
   {
       document.getElementById("MostrarP2").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP2").style.display = "none";
   }
   MostrarPrecioTotal();
}
function checkboxP3Apretado()
{
   if(document.getElementById("P3").checked == true)
   {
       document.getElementById("MostrarP3").style.display = "block";
   }
   else
   {
       document.getElementById("MostrarP3").style.display = "none";
   }
   MostrarPrecioTotal();
}
// En base a los checkbox y los objetos select, esta función calcula el precio total
function MostrarPrecioTotal()
{
  let precio = 0;

  if (document.getElementById("P1").checked == true)
  {
      precio += 5000 * document.getElementById("cantP1").value;
  }

  if (document.getElementById("P2").checked == true)
  {
      precio += 7000 * document.getElementById("cantP2").value;
  }
  if (document.getElementById("P3").checked == true)
  {
      precio += 9000 * document.getElementById("cantP3").value;
  }
  document.getElementById("preciototal").innerHTML= "precio: $" + precio;
}
//Se ejecuta cuando cambia el valor del select
function selectp1personas()
{
  MostrarPrecioTotal();
}
function selectp2personas()
{
  MostrarPrecioTotal();
}
function selectp3personas()
{
  MostrarPrecioTotal();
}







