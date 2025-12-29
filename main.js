/*'use strict'
var numero1 = Number(prompt("Ingrese el Primer Numero"));
var numero2 = Number(prompt("Ingrese el segundo Numero"));

var suma = numero1+numero2;

alert("la suma es: "+suma);
console.log(suma);*/





var lista = []; var numero1 = 0; var numero2 = 1;

function fibonacciGenerator (n) {
    for (var fibo = 1; fibo <= n; fibo++){
        
        
         if (fibo === 1) {
            lista.push(numero1);
        } else if (fibo === 2) {
            lista.push(numero2);
        } else if (fibo === 3){
            lista.push(numero1+numero2);
        } else {
            numero1 = numero2;
            numero2 = numero1 + numero1;

            lista.push(numero2);
        }

    }    

	console.log(lista);

}

fibonacciGenerator(5); 








