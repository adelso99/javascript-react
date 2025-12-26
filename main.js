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


var lista = [];  // 1 , 2 , 3 , 4


function fizzBuzz(){
    
    if (lista.length === 0) {
        lista.push(1);
    }else {
        var ultimoIndex = lista.length - 1;
        var ultimoElemento = lista[ultimoIndex];
        var nuevoElemento = ultimoElemento + 1;

        if (nuevoElemento % 3 === 0){
             nuevoElemento = "Fizz";
        } else  if (nuevoElemento % 5 === 0){
             nuevoElemento = "Buzz";
        } else if (nuevoElemento % 3 === 0 && nuevoElemento % 5 === 0){
             nuevoElemento = "FizzBuzz";
        }



        lista.push(nuevoElemento);
    }




    console.log(lista);

    

}


fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

