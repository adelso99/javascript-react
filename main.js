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
        var ultimoElemento = ultimoIndex + 1;
        var nuevoElemento = ultimoElemento + 1;

        

        if (nuevoElemento % 3 === 0 && nuevoElemento % 5 === 0){
             lista.push("FizzBuzz");
        } else  if (nuevoElemento % 3 === 0){
            lista.push("Fizz");
        } else if (nuevoElemento % 5 === 0){
            lista.push("Buzz");
        } else {
            lista.push(nuevoElemento);
        }


    }




    console.log(lista);

    

}


fizzBuzz(); //0
fizzBuzz(); //1
fizzBuzz(); //2
fizzBuzz(); //3
fizzBuzz(); //4
fizzBuzz(); //5
fizzBuzz(); //6
fizzBuzz(); //7
fizzBuzz(); //8
fizzBuzz(); //9
fizzBuzz(); //10
fizzBuzz(); //11
fizzBuzz(); //12
fizzBuzz(); //13
fizzBuzz(); //14
fizzBuzz(); //15
fizzBuzz(); //16

