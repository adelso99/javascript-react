/*'use strict'
var numero1 = Number(prompt("Ingrese el Primer Numero"));
var numero2 = Number(prompt("Ingrese el segundo Numero"));

var suma = numero1+numero2;

alert("la suma es: "+suma);
console.log(suma);*/




var cerveza = [];
var botellas = 99;

function cervezas(){
    while (0 <= botellas){
        var total = cerveza.length;
        var contar = (botellas - 1); 

        if (botellas === 1) {
            cerveza.push(botellas+" botellas de cerveza en la pared, "+botellas+" botellas de cerveza. Toma una y pásala, no más botellas de cerveza en la pared.");
        } else if (botellas === 0) {
            cerveza.push("No más botellas de cerveza en la pared, no más botellas de cerveza. Ve a la tienda y compra más, "+total+" botellas de cerveza en la pared.");
        } else {
            cerveza.push(botellas+" botellas de cerveza en la pared, "+botellas+" botellas de cerveza. Toma una y pásala, "+contar+" botellas de cerveza en la pared.");
        }

        botellas--;

    }    

	console.log(cerveza);

}

cervezas();





var lista1 = [];

function fizzBuzz(){
    for (var contar = 1; contar <= 100; contar++){
        if (contar % 3 === 0 && contar % 5 === 0) {
            lista1.push("FizzBuzz");
        } else if (contar % 3 === 0) {
            lista1.push("Fizz");
        } else if (contar % 5 === 0) {
            lista1.push("Buzz");
        } else {
            lista1.push(contar);
        }

    }    

	console.log(lista1);

}

fizzBuzz(); // cuando se llama muestra 100 datos


