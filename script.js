palabras = [];

function iniciarJuego(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    inicio.style.display = "none";
    juego.style.display = "flex";
}
function nuevaPalabra(){
    var login = document.querySelector(".login");
    var palabra = document.querySelector(".agregar-palabra");
    login.style.display = "none";
    palabra.style.display = "flex";   
}

function cancelar(){
    var login = document.querySelector(".login");
    var palabra = document.querySelector(".agregar-palabra");
    var textarea = document.querySelector(".ingresoNuevaPalabra");
    textarea.value ="";
    login.style.display = "flex";
    palabra.style.display = "none";  
}
function rendirse(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    inicio.style.display = "block";
    juego.style.display = "none";
}
