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

var cerveza = [];
var botellas = 6;

function cervezas(){
    while (botellas <= 1){
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

/*
99 botellas de cerveza en la pared, 99 botellas de cerveza.
Toma una y pásala, 98 botellas de cerveza en la pared

4 botellas de cerveza en la pared, 4 botellas de cerveza.
Toma una y pásala, 3 botellas de cerveza en la pared.

3 botellas de cerveza en la pared, 3 botellas de cerveza.
Toma una y pásala, 2 botellas de cerveza en la pared.

2 botellas de cerveza en la pared. 2 botellas de cerveza.
Toma una y pásala. 1 botella de cerveza en la pared.

1 botella de cerveza en la pared, 1 botella de cerveza.
Toma una y pásala, no más botellas de cerveza en la pared.

No más botellas de cerveza en la pared, no más botellas de cerveza.
Ve a la tienda y compra más, 99 botellas de cerveza en la pared.
*/

     


