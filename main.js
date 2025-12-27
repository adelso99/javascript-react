/*'use strict'
var numero1 = Number(prompt("Ingrese el Primer Numero"));
var numero2 = Number(prompt("Ingrese el segundo Numero"));

var suma = numero1+numero2;

alert("la suma es: "+suma);
console.log(suma);*/


/*
Progresss .....1
*/

/*
Progresss .....2
*/


var nombres = ["Angela" , "Ben" , "Jenny" , "Michael" , "Chloe"]; 

function whosPaying(nombres) {
    
    /******No cambies el código de arriba*******/

    //Escribe tu código aquí.
     
       var numeroPersonas = nombres.length;
       var posicionPersona = Math.floor(Math.random() * numeroPersonas);
       var personaRandom = nombres[posicionPersona];

       return "¡"+personaRandom+" va a comprar el almuerzo hoy !";



    /******No cambies el código de abajo*******/

}

whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);
whosPaying(nombres);


