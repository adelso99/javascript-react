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
var contar = 1;

function cervezas(){
    while (contar <= 6){
        var dato = cerveza.length; 

        if (dato === 5) {
            cerveza.push("No más botellas de cerveza en la pared, no más botellas de cerveza. Ve a la tienda y compra más, "+dato+" botellas de cerveza en la pared.");
        } else if (dato === 4) {
            cerveza.push(contar+" botellas de cerveza en la pared, "+dato+" botellas de cerveza. Toma una y pásala, no más botellas de cerveza en la pared.");
        } else {
            cerveza.push(contar+" botellas de cerveza en la pared, "+contar+" botellas de cerveza. Toma una y pásala, "+contar+" botellas de cerveza en la pared.");
        }

        contar++;
    }    

	console.log(cerveza);

}

/*
99 botellas de cerveza en la pared, 99 botellas de cerveza.
Toma una y pásala, 98 botellas de cerveza en la pared

1 botella de cerveza en la pared, 1 botella de cerveza.
Toma una y pásala, no más botellas de cerveza en la pared.

No más botellas de cerveza en la pared, no más botellas de cerveza.
Ve a la tienda y compra más, 99 botellas de cerveza en la pared.
*/

     


