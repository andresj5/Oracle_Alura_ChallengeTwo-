var palabras = ["perro","oceano","teclado","columna","colombia","codigo","euforia","energia","seguro","ahorcado"];   //
var palabra = "";
var letra ="";
var letrasPalabra = [];
var letrasPalabraOrdenadas = [];
var correctas = [];
var incorrectas = [];
var i = 0;
var i2 = 0;
var x = 0;
var x2 = 0;

var presionada = [];


function nuevaPalabra(){
    var login = document.querySelector(".login");
    var palabra = document.querySelector(".agregar-palabra");
    var textarea = document.querySelector(".ingresoNuevaPalabra");
    textarea.value ="";
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

function salir(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    correctas = [];
    incorrectas = [];
    letrasPalabra = [];
    
    
    inicio.style.display = "block";
    juego.style.display = "none";   
    
    location.reload();    
    
}

function iniciarJuego(){
    
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    var canvas2 = document.getElementById("palabra-sec");
    var pincel2 = canvas2.getContext("2d");

    inicio.style.display = "none";
    juego.style.display = "flex";

    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabra = palabra.toUpperCase();
    letrasPalabra = palabra.split('');

    letrasPalabraOrdenadas = letrasPalabra.slice();
    letrasPalabraOrdenadas.sort();
    letrasPalabraOrdenadas = [...new Set(letrasPalabraOrdenadas)];
    
    dibujarLineas(palabra.length);
    dibujoPrincipal();
    

    document.onkeyup = function (event) {
        
        if (event.keyCode >= 65 && event.keyCode <= 90){
            letra = event.key.toUpperCase();
            x = 0;
            x2 = 0;
            
            console.log("letra pres:" + letra);


            if ((letrasPalabra.includes(letra) == true) && (!correctas.includes(letra))){
                correctas.push(letra);
                correctas.sort();
                console.log("correctas: "+ correctas);
                console.log("palabra: " + palabra);
                console.log("letras palabra: " + letrasPalabra);
                console.log("ordenadas: " + letrasPalabraOrdenadas);

                for (i=0; i<letrasPalabra.length; i++ ){
                    
                    if (letra == letrasPalabra[i]){
                        pincel2.beginPath();
                        pincel2.fillStyle="#0A3871";
                        pincel2.font="bold 20px arial";
                        pincel2.textAlign="start";
                        pincel2.fillText(letrasPalabra[i],x,70);
                        x = x + 40;

                    }
                    else{x = x + 40};
                }
                console.log(letrasPalabraOrdenadas.length);
                console.log(correctas.length);
                if((letrasPalabraOrdenadas.length) === (correctas.length)){
                    window.alert("Felicitaciones!! Ganaste!!");
                    pincel2 = null;
                    letra = null;

                }
                
                
            }
            if (((letrasPalabra.includes(letra)) == false) && (!incorrectas.includes(letra))){
                incorrectas.push(letra);
                console.log("incorrectas: " + incorrectas);

                for (i2=0; i2<incorrectas.length; i2++ ){
                     pincel2.beginPath();
                     pincel2.fillStyle="#0A3871";
                     pincel2.font="bold 20px arial";
                     pincel2.textAlign="start";
                     pincel2.fillText(incorrectas[i2],x2,120);
                    dibujoPrincipal(incorrectas.length);
                     x2 = x2 + 40;
                }
                if (incorrectas.length == 7){
                    pincel2.clearRect(0, 0, canvas2.width, canvas2.height);
                    window.alert("Perdiste, la palabra era: " + palabra);
                    pincel2.beginPath();
                    pincel2.fillStyle="#0A3871";
                    pincel2.font="bold 20px arial";
                    pincel2.textAlign="start";
                    pincel2.fillText("Perdiste!",100,80);

                    pincel2 = null;
                    letra = null;

                 }
            }
        }else(console.log("eso no es una letra!")); 
    }
         
}

function dibujoPrincipal(parte) {
    var canvas = document.getElementById("canvas-juego")
    var pincel = canvas.getContext('2d');
    
    pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;

    // pincel.beginPath();
    // pincel.moveTo(0,500);
    // pincel.lineTo(1370,500);
    // pincel.lineWidth = 70;
    // pincel.strokeStyle = "green";
    // pincel.closePath();
    // pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(500,600);
    pincel.lineTo(500,100);
    pincel.strokeStyle="#0A3871";
    pincel.lineWidth = 15;
    pincel.closePath();
    pincel.stroke();

    pincel.moveTo(495,100);
    pincel.lineTo(800,100);
    pincel.lineWidth = 15;
    pincel.closePath();
    pincel.stroke();

    switch(parte){
        case 1:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;
        
        case 2:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();

            break;
        
        case 3:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.moveTo(795,200);
            pincel.lineTo(795,370);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;

        case 4:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.moveTo(795,200);
            pincel.lineTo(795,370);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(820,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;

        case 5:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.moveTo(795,200);
            pincel.lineTo(795,370);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(820,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(770,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;

        case 6:
            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.moveTo(795,200);
            pincel.lineTo(795,370);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(820,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(770,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,250);
            pincel.lineTo(770,330);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;

        case 7:

            pincel.moveTo(795,100);
            pincel.lineTo(795,150);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.strokeStyle = "#0A3871";
            pincel.arc(795,180,30,0,2*Math.PI);
            pincel.closePath();
            pincel.stroke();


            pincel.beginPath();
            pincel.moveTo(795,200);
            pincel.lineTo(795,370);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(820,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,370);
            pincel.lineTo(770,420);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,250);
            pincel.lineTo(770,330);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            pincel.beginPath();
            pincel.moveTo(795,250);
            pincel.lineTo(820,330);
            pincel.lineWidth = 15;
            pincel.closePath();
            pincel.stroke();

            break;
    }
  }


  function dibujarLineas(lineas){
    var canvas = document.getElementById("palabra-sec");
    var pincel = canvas.getContext("2d");
    canvas.width=canvas.width;

    let x1 = 0;
    let x2 = 37.5;

    for(var i=0; i<lineas; i++){

        pincel.moveTo(x1+2,80);
        pincel.lineTo(x2-5,80);
        pincel.lineWidth = 7;
        pincel.strokeStyle = "#0A3871";
        pincel.stroke();

        x1 = x2;
        x2 = x2 + 37.5;
    }

}

function nuevoJuego(){
    palabra = null;
    letrasPalabra = [];
    correctas = [];
    incorrectas = [];
    iniciarJuego();
    i = 0;
    console.log(palabra);
    console.log(letrasPalabra);

}

function guardarPalabra(){
    var palabra = document.querySelector(".agregar-palabra");
    var textarea = document.querySelector(".ingresoNuevaPalabra");
    var juego = document.querySelector(".juego");

    var nuevaPalabra = textarea.value;
    
    console.log(nuevaPalabra);

    var matches = nuevaPalabra.match(/\d+/g);
    var matches2 = nuevaPalabra.match(/^[A-Za-z]+$/)

    if (matches2 == null){
        alert("NO se permiten número o caracteres especiales!");
    }

    if (matches != null) {
        //alert('NO se permiten números');
    }

    if ((nuevaPalabra.length >= 3)  && (nuevaPalabra.length <=8) && (matches == null) && (matches2 != null)){
        palabras.push(nuevaPalabra);
        juego.style.display = "flex";
        palabra.style.display = "none";
    

        iniciarJuego();
    }
    else {window.alert("Entrada no valida, revisa tu palabra!");}
    
}