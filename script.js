let palabras = ["oceano","memoria","colombia","teclado","magico","aguacate","gato"];
let palabra = "";
let correctas = [];
let incorrectas = [];
let noRepetidas = [];

function iniciarJuego(){
    
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    inicio.style.display = "none";
    juego.style.display = "flex";
    palabra = palabras[Math.floor(Math.random() * palabras.length)]
    

    jugar(palabra,correctas,incorrectas);
        
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

function salir(){
    var inicio = document.querySelector(".inicio");
    var juego = document.querySelector(".juego");
    correctas = [];
    incorrectas = [];
    palabra= [];
    letrasPalabra = [];
    noRepetidas = [];

    inicio.style.display = "block";
    juego.style.display = "none";   
    
}

function dibujoPrincipal(parte) {
    var canvas = document.getElementById("canvas-juego")
    var pincel = canvas.getContext('2d');
    
    pincel.canvas.width  = window.innerWidth;
    pincel.canvas.height = window.innerHeight;

    pincel.beginPath();
    pincel.moveTo(0,500);
    pincel.lineTo(1550,500);
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
            pincel.strokeStyle = "black";
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
            pincel.strokeStyle = "black";
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
            pincel.strokeStyle = "black";
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
            pincel.strokeStyle = "black";
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
            pincel.strokeStyle = "black";
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
            pincel.strokeStyle = "black";
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

    // pincel.moveTo(795,100);
    // pincel.lineTo(795,150);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();

    // pincel.beginPath();
    // pincel.strokeStyle = "black";
    // pincel.arc(795,180,30,0,2*Math.PI);
    // pincel.closePath();
    // pincel.stroke();

    // pincel.beginPath();
    // pincel.moveTo(795,200);
    // pincel.lineTo(795,370);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();
    
    // pincel.beginPath();
    // pincel.moveTo(795,370);
    // pincel.lineTo(820,420);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();

    // pincel.beginPath();
    // pincel.moveTo(795,370);
    // pincel.lineTo(770,420);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();

    // pincel.beginPath();
    // pincel.moveTo(795,250);
    // pincel.lineTo(770,330);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();

    // pincel.beginPath();
    // pincel.moveTo(795,250);
    // pincel.lineTo(820,330);
    // pincel.lineWidth = 15;
    // pincel.closePath();
    // pincel.stroke();
  }

//   function dibujarAhorcado(parte){
    // var canvas = document.getElementById("canvas-juego")
    // var pincel = canvas.getContext('2d');
    
    // pincel.canvas.width  = window.innerWidth;
    // pincel.canvas.height = window.innerHeight;

    

//   }

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
        pincel.strokeStyle = "black";
        pincel.stroke();

        x1 = x2;
        x2 = x2 + 37.5;
    }

}

function jugar(palabra, correctas, incorrectas){
    var canvas = document.getElementById("palabra-sec");
    var pincel = canvas.getContext("2d");
    var ordenadas1 = [];
    var ordenadas2 = [];
    
    dibujoPrincipal();
    dibujarLineas(palabra.length);

    palabra = palabra.toUpperCase();
    let letrasPalabra = palabra.split('');
    console.log(letrasPalabra);

    dataArr2 = new Set(letrasPalabra);
    noRepetidas = [...dataArr2];
    //console.log(noRepetidas);

    document.addEventListener('keyup', (event) =>{

        var letra = event.key;
        letra = letra.toUpperCase();
        var code = event.keyCode;
        var x = 0;
        var x2 = 0;
 
            if(code >= 65 && code<=90){
                if (letrasPalabra.includes(letra)){
                    correctas.push(letra);
                    correctas = [... new Set(correctas)];
                    
                    for (var i=0; i<palabra.length; i++ ){
                        if (letra == palabra.charAt(i)){
                            pincel.beginPath();
                            pincel.fillStyle="red";
                            pincel.font="bold 20px arial";
                            pincel.textAlign="start";
                            pincel.fillText(palabra.charAt(i),x,70);
                            x = x + 40;
                        }

                        else(x = x + 40);
                    
                }
                    ordenadas1 = noRepetidas.sort();
                    //console.log(ordenadas1);
                    ordenadas2 = correctas.sort();
                    //console.log(ordenadas2);

                    var esIgual = JSON.stringify(ordenadas1) === JSON.stringify(ordenadas2);

                    if(esIgual == true){
                        window.alert("Felicitaciones, ganaste! La palabra era: " + palabra);
                        letrasPalabra = [];
                        incorrectas = [];
                        salir()
                    }
                    // else{

                        

                    // }
                }
                else{
                    
                    incorrectas.push(letra);
                    incorrectas = [... new Set(incorrectas)];
                    console.log(incorrectas);

                    
                    for(var i2=0; i2<=incorrectas.length - 1;i2++){
                        pincel.beginPath();
                        pincel.fillStyle="red";
                        pincel.font="bold 20px arial";
                        pincel.textAlign="start";
                        pincel.fillText(incorrectas[i2],x2,120);
                        x2 = x2 + 40;
                    }



        
                    dibujoPrincipal(incorrectas.length);
                    if (incorrectas.length == 7){
                        window.alert("Perdiste, la palabra era: " + palabra );
                        incorrectas = [];
                        letrasPalabra = [];
                        salir();
                    }
                    

                }
            
        }
    
    }, false);


}


