document.getElementById("btn__Registrarse").addEventListener("click", registro);
document.getElementById("btn__iniciar_sesión").addEventListener("click", Iniciarsesion);
window.addEventListener("resize", anchopagina);


//declaracion de variables
var contenedor__login_registro = document.querySelector(".contenedor__login_registro");
var formulario__login = document.querySelector(".formulario__login");
var formulario__registro = document.querySelector(".formulario__registro");
var caja_trasera_login = document.querySelector(".caja_trasera_login");
var caja_trasera_registro = document.querySelector(".caja_trasera_registro");

function anchopagina() {
    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_registro.style.display = "block";
    } else {
        caja_trasera_registro.style.display = "block";
        caja_trasera_registro.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__registro.style.display = "none";
        contenedor__login_registro.style.left = "0px";
    }
}





function Iniciarsesion() {

    if (window.innerWidth > 850) {
        formulario__registro.style.display = "none";
        contenedor__login_registro.style.left = "10px";
        formulario__login.style.display = "block";
        caja_trasera_registro.style.opacity = "1"
        caja_trasera_login.style.opacity = "0"
    } else {
        formulario__registro.style.display = "none";
        contenedor__login_registro.style.left = "0px";
        formulario__login.style.display = "block";
        caja_trasera_registro.style.display = "block"
        caja_trasera_login.style.display = "none"

    }

}


function registro() {

    if (window.innerWidth > 850) {
        formulario__registro.style.display = "block";
        contenedor__login_registro.style.left = "410px";
        formulario__login.style.display = "none";
        caja_trasera_registro.style.opacity = "0"
        caja_trasera_login.style.opacity = "1"

    } else {
        formulario__registro.style.display = "block";
        contenedor__login_registro.style.left = "0px";
        formulario__login.style.display = "none";
        caja_trasera_registro.style.display = "none"
        caja_trasera_login.style.display = "block"
        caja_trasera_login.style.opacity = "1"
    }

}