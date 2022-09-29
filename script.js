let palabras = ["llama","carrera","monitor","codigo"];
let palabra = "";

function iniciarJuego(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    inicio.style.display = "none";
    juego.style.display = "flex";
    
    draw();
    //Escoge una palabra al azar de la lista
    palabra = palabras[Math.floor(Math.random() * palabras.length)]
    dibujarLineas(palabra.length);
    presionarTecla(palabra);
    
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
    limpiarVariables();
    inicio.style.display = "block";
    juego.style.display = "none";
    
}

function draw() {
    var canvas = document.getElementById("canvas-juego")
    var pincel = canvas.getContext('2d');
    
    pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;

    pincel.beginPath();
    pincel.moveTo(0,500);
    pincel.lineTo(1370,500);
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#008000";
    pincel.closePath();
    pincel.stroke();
    

    pincel.beginPath();
    pincel.moveTo(500,500);
    pincel.lineTo(500,100);
    pincel.strokeStyle="#591F0B"
    pincel.lineWidth = 15;
    pincel.closePath();
    pincel.stroke();

    pincel.moveTo(495,100);
    pincel.lineTo(800,100);
    pincel.lineWidth = 15;
    pincel.closePath();
    pincel.stroke();

    pincel.moveTo(795,100);
    pincel.lineTo(795,150);
    pincel.lineWidth = 15;
    pincel.closePath();
    pincel.stroke();
        
  }

function dibujarLineas(lineas){
    var canvas = document.getElementById("palabra-sec");
    var pincel = canvas.getContext("2d");
    canvas.width=canvas.width;

    /*pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;*/
          
    let x1 = 0;
    let x2 = 37.5;

    for(var i=0; i<lineas; i++){

        pincel.moveTo(x1+2,95);
        pincel.lineTo(x2-5,95);
        pincel.lineWidth = 7;
        pincel.strokeStyle = "black";
        pincel.stroke();

        x1 = x2;
        x2 = x2 + 37.5;
    }

}

function presionarTecla(palabra){
    document.addEventListener('keydown', (event) => {
        var keyValue = event.key;
        var codeValue = event.code;
        
        if (palabra.includes(keyValue)){
            console.log("si esta");
            
        }

        else{
            console.log("no esta");
            
        }
        

        //console.log("keyValue: " + keyValue);
        //console.log("codeValue: " + codeValue);
        //if(codeValue >= 65 && codeValue <=90){
        //    console.log(keyValue);
        //}
      }, false);
      
}

function limpiarVariables(){
    palabra = "";
    delete keyValue;

}

function nuevoJuego(){
    window.alert("la palabra era: "+ palabra);
    rendirse();
}

function imprimirPalabra(palabra){
    var canvas = document.getElementById("palabra-sec");
    var pincel = canvas.getContext("2d");
    canvas.width=canvas.width;

    pincel.font = "10px Verdana";
    pincel.strokeText(palabra, 0, 10);
    

}

