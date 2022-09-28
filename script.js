let palabras = ["agua","pantalla","carne","camara","llama","carrera","monitor","codigo"];
let palabra = "poto";

function iniciarJuego(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    inicio.style.display = "none";
    juego.style.display = "flex";
    draw();
    dibujarLineas(palabra.length);
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

function draw() {
    var canvas = document.getElementById("canvas-juego")
    var pincel = canvas.getContext('2d');
    
    pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;

    pincel.moveTo(0,500);
    pincel.lineTo(1370,500);
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#f00000";
    pincel.stroke();

    pincel.moveTo(500,500);
    pincel.lineTo(500,100);
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#f00000";
    pincel.stroke();

    pincel.moveTo(495,100);
    pincel.lineTo(800,100);
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#f00000";
    pincel.stroke();

    pincel.moveTo(795,100);
    pincel.lineTo(795,150);
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#f00000";
    pincel.stroke();

    pincel.moveTo(795,150);
    pincel.arc(795,210,50,0,2*Math.PI);
    pincel.fill();
    
  }

function dibujarLineas(lineas){
    var canvas = document.getElementById("palabra-sec");
    var pincel = canvas.getContext("2d");
    canvas.width=canvas.width;

    /*pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;*/
          
    let x = 0;
    let x2 = 37.5;

    for(var i=0; i<lineas; i++){

        pincel.moveTo(x+2,95);
        pincel.lineTo(x2-5,95);
        pincel.lineWidth = 7;
        pincel.strokeStyle = "black";
        pincel.stroke();

        x = x2;
        x2 = x2 + 37.5;
    }

}