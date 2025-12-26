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
    var n = Math.random(); 
    n = n * nombres.length;  // con el 100 se asigna un rango maximo de 100
    n = Math.floor(n) + 1;  //con el "+ 1" se asigana un rango minimo de 1

    if (n === 1){
        return "¡"+nombres[0]+" va a comprar el almuerzo hoy !";
    } else if (n === 2){
        return "¡"+nombres[1]+" va a comprar el almuerzo hoy !";
    } else if (n === 3){
        return "¡"+nombres[2]+" va a comprar el almuerzo hoy !";
    } else if (n === 4){
        return "¡"+nombres[3]+" va a comprar el almuerzo hoy !";
    } else {
        return "¡"+nombres[4]+" va a comprar el almuerzo hoy !";
    }

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


